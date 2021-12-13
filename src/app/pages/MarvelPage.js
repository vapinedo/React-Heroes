import React from 'react'
import { HeroList } from '@pages/HeroList'

export const MarvelPage = () => {
    return (
        <div>
            <h3>Marvel Comics</h3>
            <hr />

            <HeroList publisher={"Marvel Comics"} />
        </div>
    )
}
