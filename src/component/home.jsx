

import '../App.css'
import ApiData from '../API/ApiData.json';

export default function Home() {
    const cards = ApiData;

    return (
        <div className="col-lg-12 mb-4">
            <ul>
                {cards.map((card) => (
                    <li key={card.id} >
                        <div className="img_box">
                            <img src={card['img_url']} width='50%' /> 
                        </div>
                        <div className="movie_about">
                            <h2>Name: {card.name}</h2>
                            <h4>Rating: {card.rating}</h4>
                            <h5>Genre: {card.genre.join(', ')}</h5> 
                            <p>{card.description}</p>
                            <a href={card.watch_url} target="_blank" rel="noopener noreferrer"> 
                                <button>Watch Now</button>
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
