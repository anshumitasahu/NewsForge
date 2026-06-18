import React, { useState, useEffect } from 'react';
import './Home.css';

export default function Tech() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?category=technology&apiKey=6097f6cb4ee845e38468604b491f2e0b")
            .then(response => response.json())
            .then(data => {
                setArticles(data.articles);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <h1 className='heading'>News Related To <span>Technology</span></h1>
            <div className="news-card">
                {articles.map((article, index) => (
                    <div className="news-container" key={article.url}>
                        <div className='news-img'>
                            <img src={article.urlToImage} alt={article.title} />
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