import React, {createContext, useState,useEffect} from 'react';


const WordContext = createContext();

function WordsContextProvider(props){
    const [data, setData] = useState([])

    useEffect(() => {
        return () => {
           fetch('/api/words')
               .then((response)=>response.json())
               .then((data)=> setData(data))
        };
    }, []);


    return (
        <WordContext.Provider>
            {props.children}
        </WordContext.Provider>
    )

}

export {WordsContextProvider, WordContext};


