import React, {useState, useEffect, useCallback} from 'react';
import Card from "./../Card";
import './CardContainer.css';
import next from '../../assets/images/svg/next.svg';
import prev from '../../assets/images/svg/prev.svg';
import {cards} from "../../data";
import classNames from "classnames";

function CardContainer(props) {
    const [count, setCount] = useState(1);
    const [learnedCount, setLearnedCount] = useState(0);
    const totalCount = cards.length;

    const addLearned = useCallback(
        ()=> {
            setLearnedCount(learnedCount+1)
        }, [learnedCount]
    )
    const nextCard = () => {
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
        setLearnedCount(0)
        console.log(count)
    };

    return (
        <div className={"container"}>
            <div className={"container-card_buttons"}>
                <button className={"table-button"} onClick={PrevCard}><img className={prevBtnClass} src={prev} alt="prev"/>
                </button>
                <Card key={`${cards[count-1].english}`}
                      english={cards[count-1].english}
                      transcription={cards[count-1].transcription}
                      russian={cards[count-1].russian}
                      addLearned={addLearned}/>
                <button className={"table-button"} onClick={nextCard}><img className={nextBtnClass} src={next} alt="next"/>
                </button>
            </div>
            <div className={"count"}>{count}/{totalCount}</div>
            <div className={"learnedCount"}>сколько слов выучено-{learnedCount}</div>
        </div>
    )
}

export default CardContainer;