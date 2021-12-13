import React from 'react'
import { HeroList } from '@pages/HeroList'

export const DcPage = () => {
    return (
        <div>
            <h3>Dc Comics</h3>
            <hr />

            <HeroList publisher={"DC Comics"} />
        </div>
    )
}
