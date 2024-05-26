import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  //state variables

  const [input, setInput] = useState(""); // to save input data
  const [recentPrompt, setRecentPrompt] = useState(""); // to save recent prompt
  const [previousPrompt, setPreviousPrompt] = useState([]); // to save previous prompt, input history
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false); // to save loading state
  const [resultData, setResultData] = useState(""); // to display result data

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const onSent = async (input) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    setPreviousPrompt((prev) => [...prev, input]); //input is stored in previousPrompt

    const response = await run(input); //response is stored in response

    let responseArray = response.split("**");
    let newResponse ="";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    let newResponse2 = newResponse.split("*").join("<br");

    let newResponseArray2 = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray2.length; i++) {
      //const nextWord = newResponseArray2[i]

      delayPara(i, newResponseArray2[i] + " ");
    }
    setLoading(false);
    setInput("");
  };

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
    onSent,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
