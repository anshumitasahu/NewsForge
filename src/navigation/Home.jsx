import newsImage from '../img/news(breakingnewz).avif';
import './Home.css';

export default function Home() {
    return (
        <>
            <div className="news-card">
                <div className="news-container">
                    <div>
                        <img src={newsImage} alt="" />
                    </div>
                    <div className="headline">
                        <h1>"BBL sell off gets the go-ahead from cricket powerbrokers, but it comes with conditions"</h1>
                    </div>
                    <div className="description">
                        <p>State associations have reached an “in-principle” agreement with the governing body over the Big Bash League, but four key requirements need to be met.</p>
                    </div>
                    <div>
                        author: Bikas Chada
                    </div>
                </div>
                <div className="news-container">
                    <div>
                        <img src={newsImage} alt="" />
                    </div>
                    <div className="headline">
                        <h1>"BBL sell off gets the go-ahead from cricket powerbrokers, but it comes with conditions"</h1>
                    </div>
                    <div className="description">
                        <p>"State associations have reached an “in-principle” agreement with the governing body over the Big Bash League, but four key requirements need to be met."</p>
                    </div>
                    <div>
                        author:BIkas Chada
                    </div>
                </div>
                <div className="news-container">
                    <div>
                        <img src={newsImage} alt="" />
                    </div>
                    <div className="headline">
                        <h1>"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com"</h1>
                    </div>
                    <div className="description">
                        <p>"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com"</p>
                    </div>
                    <div>
                        author:BIkas Chada
                    </div>
                </div>
                <div className="news-container">
                    <div>
                        <img src={newsImage} alt="" />
                    </div>
                    <div className="headline">
                        <h1>HEADLINES</h1>
                    </div>
                    <div className="description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cupiditate eum provident consequatur asperiores facilis odio nesciunt explicabo fugit numquam itaque ex atque cum, eius excepturi tempore hic. Debitis, tenetur.</p>
                    </div>
                    <div>
                        author:BIkas Chada
                    </div>
                </div>
                <div className="news-container">
                    <div>
                        <img src={newsImage} alt="" />
                    </div>
                    <div className="headline">
                        <h1>HEADLINES</h1>
                    </div>
                    <div className="description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cupiditate eum provident consequatur asperiores facilis odio nesciunt explicabo fugit numquam itaque ex atque cum, eius excepturi tempore hic. Debitis, tenetur.</p>
                    </div>
                    <div>
                        author:BIkas Chada
                    </div>
                </div>
                <div className="news-container">
                    <div>
                        <img src={newsImage} alt="" />
                    </div>
                    <div className="headline">
                        <h1>HEADLINES</h1>
                    </div>
                    <div className="description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cupiditate eum provident consequatur asperiores facilis odio.</p>
                    </div>
                    <div>
                        author:BIkas Chada
                    </div>
                </div>
            </div>
        </>
    )
}