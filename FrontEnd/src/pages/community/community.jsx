import { useDispatch, useSelector } from 'react-redux';
import s from './community.module.css'
import { useEffect } from 'react';
import { fetchCommunity } from '../../redux/communitySlice';
import CommunityItem from './communityItem/communityItem';
const Community = () => {

    const {community,status,error} = useSelector(s=>s.community)
    console.log(status);
    
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCommunity())
    }, [dispatch])

    return (
        <>
            <section className={s.community}>
                <div className="container">

                    <div className={s.left}></div>
                    <div className={s.right}></div>
                    <div className={s.block}>
                        {status === "Loading" && <span className="loader"></span>}
                        {error && <h1>{error}</h1>}
                        {!error && status === "succeeded" && <CommunityItem data={community}/>}
                        {/* <div className={s.center}>
                            <div className={s.box}>
                            <h6 className={s.title}>community</h6>
                            <p className={s.date}>13 october</p>
                            <a href="" className={s.link}>information</a>
                            <div className={s.circle}><img src="/images/logo.svg" alt=""/></div>
                            </div>
                        </div> */}


                    </div>    
                </div>
            </section>
        </>
      
    );
};

export default Community;