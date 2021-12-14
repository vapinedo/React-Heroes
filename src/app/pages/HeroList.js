import { getHeroByPublisher } from "@models/HeroModel"
import { HeroCard } from "@components/HeroCard";
import { useMemo } from "react";

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);
    
    return (
        <div className="row row-cols-1 row-cols-md-4 g-3 animate__animated animate__fadeIn">
            {heroes.map(hero => (
                <HeroCard key={hero.id} hero={hero} />
            ))}
        </div>  
    )
}
