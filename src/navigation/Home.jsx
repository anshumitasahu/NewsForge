import HomeNews from './homeNews/HomeNews.jsx'
import './Home.css';
import newsImage from '/home/rem/Desktop/learn/react/newsapp/newsForge/src/img/news(breakingnewz).avif';


export default function Home(props) {
    return (
        <>
            <div className='news-card'>
                <HomeNews></HomeNews>
            </div>
        </>
    )
}