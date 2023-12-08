import {MapContainer, TileLayer, LayersControl,GeoJSON} from 'react-leaflet'
import {useState } from 'react'
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet'
import zipcodeData from '../pages/mapData/Zip and Tract/pitt.json'
import tractData from '../pages/mapData//Zip and Tract/tract1980.json'
import geo2022 from '../pages/mapData/Geojson/geo2022.json'
import geo1980 from '../pages/mapData/Geojson/geo1980.json'
import '../App.css'
import FAQ from './mapData/Info/faqMain'
import L from "leaflet";
import '../pages/mapData/legend.css'

const center = [40.44, -79.99]

export default function Map() { 
  const [map, setMap] = useState(null)
    const table = addToLayers()
    function mapHandler(map){
      setMap(map.target)
      Legend(map.target)
    }
    return ( 
      <div>
        <FAQ />
        <MapContainer center={center} zoom={11} scrollWheelZoom={false}  whenReady={(map) =>{mapHandler(map)}}  >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LayersControl position="topright" style={{width: "100px"}} >                                         
            {table}
          </LayersControl>    
      </MapContainer>
      </div>
    )
  } 

// adds the colors based on population for each zip code region
function onEachZipCodeCloser(data){
  return function onEachFeature(feature,layer){
      const zip = feature.properties.ZCTA5CE10
      let population = data[zip]
      if(population){
        population = population.toString().replaceAll(',','')
        layer.setStyle({
          fillColor: getColor(population),
          weight: 1,
          opacity: .5,
          color: 'black',
          dashArray: '3',
          fillOpacity: 0.7,
          })
          layer.bindPopup("Zip Code: "+zip,{autoClose:false, closeOnClick:false}); 
      }
    }
  }

  
// adds the colors based on population for each tract region
function onEachTract(data){
  return function onEachFeature(feature,layer){
      const tract = feature.properties.tract
      let population = data[tract]
      population = population.toString().replaceAll(',','')
        layer.setStyle({
         color: "black",
         fill:true,
         fillColor: getColor(population),
         fillOpacity: .7,
        })
       
       layer.bindPopup("Census Tract: "+tract, {autoClose:false, closeOnClick:false});
      }
}

// gets color based on population size
function getColor(d) {
  return d > 30000 ?'#4D201E':
        d > 20000 ?'#77322E':
        d > 10000 ?'#AE484C':
        d > 7500 ?'#C7726E':
        d > 5000 ?'#E7C3C1': 
        d > 2500 ?"#1D4984": 
        d > 1000 ? "#2661AE":
        d > 500 ? "#4886D7":
        d > 100 ? "#85AEE4":
        "#C2D7F2"  
}
  
//Add All map data to the layer Control
function addToLayers(){
   // add 2022 map data
   const table= []
   
   for(let key in zipcodeData){
    table.push(<LayersControl.BaseLayer key = {key} checked={true} name = {key}>
        <GeoJSON  style={{color:"black"}}  data= {geo2022} onEachFeature= {onEachZipCodeCloser(zipcodeData[key])}/>         
    </LayersControl.BaseLayer> )   
  }
   
  // add 1980 map data 
  for(let key in tractData){
    table.push(<LayersControl.BaseLayer key = {key} checked={false} name = {key}> 
      < GeoJSON  data= {geo1980} onEachFeature={onEachTract(tractData[key])} />          
    </LayersControl.BaseLayer> )  
  }
  return table
}

// Legend of map added when map object is ready
function Legend(map) {
        const legend = L.control({ position: "bottomright" });
        legend.onAdd = function () {
          const div = L.DomUtil.create('div', 'info legend'),
          grades = [0,100,500,1000,2500,5000,7500,10000,20000,30000]
          div.innerHTML = '<span> Population per Area</span>'
          for (var i = 0; i < grades.length; i++) {
            const color = getColor(grades[i] + 1)
            let second=""
            const first = grades[i].toLocaleString("en-US").toString()
            if (i + 1 < grades.length){
              second = grades[i+1].toLocaleString("en-US").toString()
            }
            div.innerHTML +=
                '<i style="background:' + color + '"></i> ' +
                first + (second ? '&ndash;' + second + '<br>' : '+');
          }
          return div;
        }
          legend.addTo(map);
} 
 

