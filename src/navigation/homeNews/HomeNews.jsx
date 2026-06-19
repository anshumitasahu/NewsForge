import newsImage from '/home/rem/Desktop/learn/react/newsapp/newsForge/src/img/news(breakingnewz).avif';
import React, { useState, useEffect } from 'react';
import Spinner from '/home/rem/Desktop/learn/react/newsapp/newsForge/src/navigation/components/loadingSpinner.jsx';

export default function HomeNews() {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);

        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=6097f6cb4ee845e38468604b491f2e0b&page=${page}&pageSize=8`)
            .then(response => response.json())
            .then(data => {
                setArticles(data.articles);
                setTotalResults(data.totalResults);
                setLoading(false);

            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    }, [page]);

    const pageSize = 8;
    const totalPages = Math.ceil(totalResults / pageSize);
    // console.log(totalPages);
    // console.log(totalResults)

    const handlePrevClick = () => {
        console.log("previous");
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const handleNxtClick = () => {
        console.log("next");
        setPage(page + 1);
    }

    // const { articles } = data;
    // console.log(articles)
    // console.log(articles[0].title)
    // console.log(articles[0].urlToImage)

    if (loading) {
        return (
            <div className="spinner-container">
                <Spinner />
            </div>
        );
    }

    return (
        <>
            <h1 className='heading'>Top <span>Headlines</span></h1>
            <div className="news-card">
                {articles.map((article) => (
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
            <div className="buttons-page">
                <button disabled={page === 1} className='page-btn prev-btn' onClick={handlePrevClick}>← Previous</button>
                <p>Page {page} of {totalPages}</p>
                <button disabled={page >= totalPages} className='page-btn nxt-btn' onClick={handleNxtClick}>Next →</button>
            </div>
        </>
    )
}