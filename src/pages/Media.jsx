import AudioPlayer from '../components/AudioPlayer';
import placeholder from '../assets/placeholder.mp3';

const titles = ['Asian Americans in Pittsburgh',
                     'Black Americans in Pittsburgh',
                     'Latinx Americans in Pittsburgh']; 

const descs = ['This audio documentary delves into the history of Asian Americans in Western Pennsylvania. Learn about how the arrival of Chinese factory workers lead to the creation of Pittsburgh\'s historic Chinatown. Additionally, explore how Asian Indians migrated to the area. Hear from contemporary Asian American voices about their experiences.',
               'Discover Pittsburgh\'s history with Civil Rights, Jazz, and how the Great Migration tripled the African American population in the area. Learn about how the increased presence of African and Caribbean migrants has added complexity to Black identity in the region.',
               'This episode provides education on the early years of Latinx presence in Pittsburgh and how recent decades have caused exponential growth in the population. Listen to interview participants express the challenges that Latinx Pittsburghers face.']

function Media() { 
    return ( 
       <div className="audio-div">
            <AudioPlayer 
              title={titles[0]}
              file={placeholder}
              desc={descs[0]}/>
            <AudioPlayer 
              title={titles[1]}
              file={placeholder}
              desc={descs[1]}/>
            <AudioPlayer 
              title={titles[2]}
              file={placeholder}
              desc={descs[2]}/>
      </div> 
    ); 
} 
export default Media; 