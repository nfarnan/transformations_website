import L from "leaflet";
import './legend.css';
import { useEffect } from "react";

function Legend({map,data}) {
      useEffect(()=>{
        console.log("my effect is running", map)
        const legend = L.control({ position: "bottomright" });
        legend.onAdd = function () {
          const div = L.DomUtil.create('div', 'info legend'),
          grades = [0,100,500,1000,2500,5000,7500,10000,20000,30000]
          div.innerHTML = '<span> Population per Area</span>'
          for (var i = 0; i < grades.length; i++) {
            const color = data(grades[i] + 1)
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
        return ()=>legend.remove()
      },[map,data]);
      
}
export default Legend;