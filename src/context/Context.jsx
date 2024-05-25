import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context= createContext();

const ContextProvider = (props) => {

    //state variables

    const [input, setInput] = useState(""); // to save input data
    const [recentPrompt, setRecentPrompt] = useState(""); // to save recent prompt
    const [previousPrompt, setPreviousPrompt] = useState([]); // to save previous prompt, input history
    const [showResult, setShowResult] = useState(false); 
    const [loading, setLoading] = useState(false); // to save loading state
    const [resultData, setResultData] = useState("") // to display result data

    const onSent = async (prompt) => {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)

       const response =  await run(input) //response is stored in response
       setResultData(response)//response is stored in resultData
       setLoading(false)
         setInput("")
    }

    //onSent("what is react")

    const contextValue = {
        //to pass the state variables to the components
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        previousPrompt,
        setPreviousPrompt,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData,
        onSent

    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider