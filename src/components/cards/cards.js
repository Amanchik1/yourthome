import React from 'react'
import css from './cards.module.css'
import Card from "../card/card";

const Cards = props =>{
    let arr= [1,2,3,4,5]
    let apartments = arr.map((item)=>{
        return(<Card/>)
    })


    return(
        <div className={css.cardsWrapper}>
            <div >
                <div>
                    <h3 className={css.whereBuy}>Приобрести квартиру на
                        вторичном рынке</h3>
                    <div className={css.cardWrapper}>
                        {apartments}
                    </div>
                </div>
            </div>
            <div>
                <h3 className={css.whereBuy}>Приобрести квартиру в новостройках</h3>
                <div className={css.cardWrapper}>
                    {apartments}

                </div>
            </div>
        </div>
    )
}

export default Cards;