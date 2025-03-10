import { useEffect, useRef, useState } from "react";
import s from "./regisHero.module.css"
const RegisHero = () => {

  const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-11-29T00:00:00');
    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;
       
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);
            setTimeLeft({ days, hours, minutes, seconds });
        }
    };

    calculateTimeLeft();
    
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);


  const arrVideos = [
    "/bg2.mp4",
    "/bg3.mp4",
    "/bg4.mp4",
  ];

  const randomIndex = Math.floor(Math.random() * arrVideos.length);
  const [isVideo, setIsVideo] = useState(randomIndex);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
      setIsVideo((prevIndex) => {
          const nextIndex = (prevIndex + 1) % arrVideos.length; 
          return nextIndex;
      });
  };

  useEffect(() => {
      if (videoRef.current) {
          videoRef.current.load();
          videoRef.current.play();
      }
  }, [isVideo]); 



  return (
    <div className={s.video}>
      <video onEnded={handleVideoEnd} ref={videoRef} autoPlay id={s.bgVideo}>
        <source src={arrVideos[isVideo]} type="video/mp4" />
      </video>
      <div className={s.content}>
        <div className="container">
          <h1>Hurry up to sign up for the event</h1>
          <p className="text-center fs-4 p-3">
            2/8/24 <br />
            The registration ends in:
          </p>
          <div className={s.times}>
            <div className={s.item}>
              <p className={s.num}>{String(timeLeft.days).length > 1 ?timeLeft.days: "0" + timeLeft.days }</p>
              <p>days</p>
            </div>
            <div className={s.item}>
              <p className={s.num}>{String(timeLeft.hours).length > 1 ?timeLeft.hours: "0" +timeLeft.hours}</p>
              <p>hours</p>
            </div>
            <div className={s.item}>
              <p className={s.num}>{String(timeLeft.minutes).length > 1 ?timeLeft.minutes: "0" +timeLeft.minutes}</p>
              <p>minutes</p>
            </div>
            <div className={s.item}>
              <p className={s.num}>{String(timeLeft.seconds).length > 1 ?timeLeft.seconds: "0" +timeLeft.seconds}</p>
              <p>seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisHero;
