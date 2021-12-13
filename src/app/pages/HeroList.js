import { getHeroByPublisher } from "@models/HeroModel"
import { HeroCard } from "@components/HeroCard";

export const HeroList = ({ publisher }) => {

    const heroes = getHeroByPublisher(publisher);
    
    return (
        <div className="row row-cols-1 row-cols-md-4 g-3">
            {heroes.map(hero => (
                <HeroCard key={hero.id} hero={hero} />
            ))}
        </div>  
    )
}
