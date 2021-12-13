import { getHeroByPublisher } from "@models/HeroModel"

export const HeroList = ({ publisher }) => {

    const heroes = getHeroByPublisher(publisher);
    
    return (
        <>
            <h3>Hero List - {publisher}</h3>

            <ul>
                {heroes.map(hero => (
                    <li key={hero.id}>{hero.superhero}</li>
                ))}
            </ul>
        </>
    )
}
