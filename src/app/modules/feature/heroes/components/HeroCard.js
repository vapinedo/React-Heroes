
import { Link } from "react-router-dom";

export const HeroCard = ({ hero }) => {

    const imagePath = `/assets/${hero.id}.jpg`;
    
    return (

        <div className="col-md-4 animate__animated animate__fadeIn">
            <div className="card h-100">
                <img src={imagePath} className="card-img" alt={hero.superhero} />

                <div className="card-body">
                    <h5 className="card-title">{hero.superhero}</h5>
                    <p className="card-text">{hero.alter_ego}</p>

                    {
                        (hero.alter_ego !== hero.characters) && 
                        <p className="text-muted">{ hero.characters }</p>
                    }

                    {
                        <p className="card-text">
                            <small className="text-muted">{hero.first_appearance}</small>
                        </p>
                    }

                    <Link to={`/hero/${hero.id}`} >See more</Link>

                </div>
            </div>
        </div>
    )
}
