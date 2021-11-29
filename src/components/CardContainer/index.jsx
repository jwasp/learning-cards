import React, {useState, useEffect} from 'react';
import Card from "./../Card";
import './CardContainer.css';
import next from '../../assets/images/svg/next.svg';
import prev from '../../assets/images/svg/prev.svg';
import {cards} from "../../data";
import classNames from "classnames";

function CardContainer(props) {
    const [count, setCount] = useState(1);
    const totalCount = cards.length;

    const NextCard = () => {
        if(count < totalCount) {
            setCount(count + 1);
        }
    };

    const prevBtnClass = classNames("img", {
        disabled: count === 1
    });

    const nextBtnClass = classNames("img", {
        disabled: count === totalCount
    });

    const PrevCard = () => {
        if(count > 1) {
            setCount(count - 1);
        }
        console.log(count)
    };

    return (
        <div className={"container"}>
            <div className={"container-card_buttons"}>
                <button className={"table-button"} onClick={PrevCard}><img className={prevBtnClass} src={prev} alt="prev"/>
                </button>
                <Card key={`${cards[count-1].english}`} english={cards[count-1].english}
                      transcription={cards[count-1].transcription} russian={cards[count-1].russian}/>
                <button className={"table-button"} onClick={NextCard}><img className={nextBtnClass} src={next} alt="next"/>
                </button>
            </div>
            <div className={"count"}>{count}/{totalCount}</div>
        </div>
    )
}

export default CardContainer;