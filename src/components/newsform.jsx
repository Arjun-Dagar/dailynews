import React, { useState, useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Newsitem from "./newsitem";
import Spinner from "./spinner";

export default function Newsform(props) {
  const [page_number, setPage_number] = useState(1);
  const [total_results, settotal_results] = useState(0);
  const [articles, setArticles] = useState([]);
  const [loader, setloader] = useState(false);

  async function getnews(pg) {

    setloader(true);

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&pageSize=9&page=${pg}&apiKey=bcfe20d0cffe42979160182daa051947`;
    let data = await fetch(url);
    let parseddata = await data.json();
    
    setPage_number(pg);
    setArticles(parseddata.articles);
    settotal_results(parseddata.totalResults);

    setloader(false);
    document.title = `${capitalizefirstword(props.category)}-NewsDog`;
  }

  function capitalizefirstword(s)
  {
    return s[0].toUpperCase() + s.slice(1);
  }

  async function fetchMoreData()
  {
    let pg = page_number + 1;
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&pageSize=9&page=${pg}&apiKey=bcfe20d0cffe42979160182daa051947`;
    let data = await fetch(url);
    let parseddata = await data.json();
    
    setPage_number(pg);
    setArticles(articles.concat(parseddata.articles));
  }

  useEffect(() => {
    getnews(1);
  }, []);

  return (
    <>
      <h1 className="newstitle">Top {capitalizefirstword(props.category)} News</h1>
      {loader && <Spinner/>}

      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={total_results > articles.length}
          loader={ <Spinner/> }
          endMessage={
            <p style={{ textAlign: 'center', fontSize: '2rem' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
        <div className="newsform">
          {articles ? (
            articles.map((element) => {
              return (
                <Newsitem
                  key={element.url}
                  title={element.title}
                  description={element.description}
                  imageurl={element.urlToImage}
                  url={element.url}
                  date = {element.publishedAt}
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
      </InfiniteScroll>
    </>
  );
}
