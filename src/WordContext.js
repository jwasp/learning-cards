import React, {createContext, useState,useEffect} from 'react';


const WordContext = createContext();

function WordsContextProvider(props){
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] =useState(false);
    const [error, setError] = useState("")
    useEffect(() => {
            setIsLoading(true);
        fetch('/api/words')
            .then((response) => {
                if (response) return response.json()
                else {
                    throw new Error('Something went wrong ...');
                }
            })
               .then((data)=> {setData(data); setIsLoading(false)})
            .catch(error=> {setError(error)})
    }, []);

    if(isLoading) return <h5>is loading...</h5>
    if(error) return <p>{error.message}</p>
    return (
        <WordContext.Provider value={{data, setData}}>
            {props.children}
        </WordContext.Provider>
    )

}

export  {WordsContextProvider, WordContext};


