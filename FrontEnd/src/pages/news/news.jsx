import { useDispatch, useSelector } from "react-redux";
import css from "./news.module.css";
import { useEffect } from "react";
import { fetchNews } from "../../redux/newsSlice";
import NewsItem from "./newsItem/newsItem";
function News() {
  const dispatch = useDispatch()
  const {news,status,error} = useSelector(state => state.news)
  console.log(news);
  
  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])


  return (
    <section className={css.news}>
      <div className="container">
        <h2 className={css.title}>Новости</h2>
        <div className={css.box}>
          {status === "Loading" && <span className="loader"></span>}
          {error && <h1 className="text-center"> {error} </h1>}
          {!error && status === "succeced" && <NewsItem data={news} />}

        
        </div>
      </div>
    </section>

  );
}

export default News;
