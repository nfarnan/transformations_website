function ProgressBar ({ progressBarRef, audioRef, timeProgressed, totalTime }) {
    const progressChange = () => {
        audioRef.current.currentTime = progressBarRef.current.value;
    }

    const formatTime = (time) => {
        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60);
            let seconds = Math.floor(time % 60);

            if (seconds < 10) {
                seconds = `0${seconds}`;
            }

            return `${minutes}:${seconds}`;
        }
        return `0:00`;
    }

    return (
        <div className="progress-bar">
            <div className="current-time">{formatTime(timeProgressed)}</div>
            <input 
                className="progress-bar-input" 
                type="range" 
                ref={progressBarRef} 
                defaultValue="0"
                onChange={progressChange}
            />
            <div className="total-time">{formatTime(totalTime)}</div>
        </div>
    )
}
export default ProgressBar;