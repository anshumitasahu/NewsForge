import newsImage from '/home/rem/Desktop/learn/react/newsapp/newsForge/src/img/news(breakingnewz).avif';
import React, { useState, useEffect } from 'react';


export default function HomeNews() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=6097f6cb4ee845e38468604b491f2e0b")
            .then(response => response.json())
            .then(data => {
                setArticles(data.articles);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    // const { articles } = data;
    // console.log(articles)
    // console.log(articles[0].title)
    // console.log(articles[0].urlToImage)
    return (
        <>
            <h1 className='heading'>Top <span>Headlines</span></h1>
            <div className="news-card">
                {articles.map((article, index) => (
                    <div className="news-container" key={article.url}>
                        <div className='news-img'>
                            <img src={article.urlToImage || newsImage} alt={article.title} />
                        </div>
                        <div className="news-content">
                            <div className="headline">
                                <h1>{article.title}</h1>
                            </div>
                            <div className="description">
                                <p>{article.description}</p>
                            </div>
                            <div className='button-area'>
                                <a
                                    className="read-btn"
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Read Full Story
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}