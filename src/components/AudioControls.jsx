import { useCallback, useRef, useEffect, useState } from 'react';
import { TbRewindForward10, TbRewindBackward10 } from 'react-icons/tb';
import { IoPlaySharp, IoPauseSharp } from 'react-icons/io5'
import { IconContext } from 'react-icons'



function AudioControls ({ audioRef, progressBarRef, totalTime, setTimeProgressed }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const animationRef = useRef();

    // function called on button press
    const toggle = () => {
        setIsPlaying((state) => !state);
    }

    const skip = (time) => {
        audioRef.current.currentTime += time;
    }

    const repeat = useCallback(() => {
        // null check to avoid console spam
        if (audioRef.current == null) {
            return;
        }

        const currentTime = audioRef.current.currentTime;
        setTimeProgressed(currentTime);
        progressBarRef.current.value = currentTime;
        progressBarRef.current.style.setProperty(
            '--range-progress',
            `${(progressBarRef.current.value / totalTime) * 100}%`
        );

        animationRef.current = requestAnimationFrame(repeat);
    }, [audioRef, totalTime, progressBarRef, setTimeProgressed]);

    // set the audio to play or pause
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        }
        else {
            audioRef.current.pause();
        }

        animationRef.current = requestAnimationFrame(repeat);
    }, [isPlaying, audioRef]);

    return (
        <div className="audio-controls">
            <button className="audio-control-button" onClick={() => skip(-10)}>
                <IconContext.Provider value={{ className: 'audio-control-button-icon' }}>
                    <TbRewindBackward10 />
                </IconContext.Provider>
            </button>
            <button className="audio-control-button" onClick={toggle}>
                {isPlaying ? 
                    <IconContext.Provider value={{ className: 'audio-control-button-icon' }}>
                        <IoPauseSharp /> 
                    </IconContext.Provider> : 
                    <IconContext.Provider value={{ className: 'audio-control-button-icon' }}>
                        <IoPlaySharp />
                    </IconContext.Provider>
                }
            </button>
            <button className="audio-control-button" onClick={() => skip(10)}>
                <IconContext.Provider value={{ className: 'audio-control-button-icon' }}>
                    <TbRewindForward10 />
                </IconContext.Provider>
            </button>
        </div>
    )
}
export default AudioControls;