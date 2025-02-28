import { useEffect, useState, useRef } from 'react';
import s from "./home.module.css";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideos } from '../../redux/videoSlice';

const Home = () => {
    const { video = [], status, error } = useSelector((state) => state.video);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideos());
    }, [dispatch]);

    useEffect(() => {
        window.scrollTo(10, 0);
    }, []);

    const [isVideo, setIsVideo] = useState(0);
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        setIsVideo((prevIndex) => {
            const nextIndex = (prevIndex + 1) % (video.length || 1);
            return nextIndex;
        });
    };

    useEffect(() => {
        if (videoRef.current && video.length > 0) {
            videoRef.current.load();
            videoRef.current.play().catch((error) => {
                console.log("Autoplay failed:", error);
            });
        }
    }, [isVideo, video]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    if (!video || video.length === 0) {
        return (
            <div className={s.home}>
                <div className={s.video}>
                    <div className={s.bg_video_placeholder}>Loading video...</div>
                    <section className={s.hero}>
                        <div className="container">
                            <div className={s.info}>
                                <h1>2600 Kyrgyzstan</h1>
                                <p className={s.text}>
                                    We're a hacker community thing. We meet the first Friday of the month at the [___________].
                                </p>
                                <NavLink to="/register" className={`${s.link} text-white`}>Register to the event</NavLink>
                            </div>
                        </div>
                    </section>
                </div>
                <section className={s.list_product}>
                    {/* ... остальной код секции ... */}
                </section>
            </div>
        );
    }

    return (
        <div className={s.home}>
            <div className={s.video}>
                <video
                    ref={videoRef}
                    onEnded={handleVideoEnd}
                    autoPlay
                    muted // Ключевой атрибут для автопроигрывания
                    className={s.bg_video}
                >
                    <source src={video[isVideo].video} type="video/mp4" />
                </video>
                <section className={s.hero}>
                    <div className="container">
                        <div className={s.info}>
                            <h1>2600 Kyrgyzstan</h1>
                            <p className={s.text}>
                                We're a hacker community thing. We meet the first Friday of the month at the [___________].
                            </p>
                            <NavLink to="/register" className={`${s.link} text-white`}>Register to the event</NavLink>
                        </div>
                    </div>
                </section>
            </div>
            <section className={s.list_product}>
                <div className="container">
                    <div className={s.products}>
                        <div className={s.product}>
                            <h4 className={s.title}>
                                <img src="/images/checked.png" alt="checked" />
                                <span>Who we are?</span>
                            </h4>
                            <p className={s.descr}>
                                We are the team of 2600 Qazaqstan. We act in a responsible manner. We don't do illegal things and we don't cause problems for the place we're meeting in.
                            </p>
                        </div>
                        <div className={s.product}>
                            <h4 className={s.title}>
                                <img src="/images/checked.png" alt="checked" />
                                <span>About meetings</span>
                            </h4>
                            <p className={s.descr}>
                                We meet in a public area. Nobody is excluded. There is no admission charge or dues of any sort.
                            </p>
                        </div>
                        <div className={s.product}>
                            <h4 className={s.title}>
                                <img src="/images/checked.png" alt="checked" />
                                <span>Next 2600 Meeting</span>
                            </h4>
                            <p className={s.descr}>
                                Astana, 2/8/24 at 20:00. <br />
                                Place:<a className={s.click} href="https://t.me/ast2600"> click here.</a> <br />
                                <NavLink to="/register" className={s.click}>Call for Papers</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;