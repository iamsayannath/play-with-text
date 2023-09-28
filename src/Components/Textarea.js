import { useState } from "react";
import React from "react";

export default function Textarea() {
  const [text, setText] = useState("");
  //const [PreviewText, setPreviewText] = useState("Enter something in textbox above to preview it here");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    //setPreviewText(newText);
  };

  const handleClearClick = () => {
    let clearText = "";
    setText(clearText);
    //setPreviewText("")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    //setPreviewText(newText);
  };

  //listening the text from keyboard press
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // const speak = () => {
  //   let msg = new SpeechSynthesisUtterance();
  //   msg.text = text;
  //   window.speechSynthesis.speak(msg);
  // };

  // const pause = () => {
  //   let msg = new SpeechSynthesisUtterance();
  //   msg.text = text;
  //   window.speechSynthesis.pause(msg);
  // };

  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    setText(newText);
    //setPreviewText(newText);
  };

  const handleReverse = () => {
    let strArr = text.split("");
    strArr = strArr.reverse();
    let newText = strArr.join("");
    setText(newText);
    //setPreviewText(newText);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges(); 
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    //setPreviewText(newText);
  };

  return (
    <>
      <div className="m-4">
        <h1 className="">Text Playground Below </h1>
        <textarea
          className="form-control border border-3 border-light rounded-end"
          id="my-box"
          rows={10}
          value={text}
          onChange={handleOnChange}
        />
      </div>
      <div className="container my-2">
        <button
          className="btn btn-light mx-2 my-2 rounded-pill "
          onClick={handleClearClick}
          disabled={text.length === 0}>
          Clear
        </button>
        {/* 
        <button className="btn btn-secondary mx-2" onClick={speak}>
          Speak
        </button>

        <button className="btn btn-secondary mx-2 " onClick={pause}>
          Pause
        </button> */}
        <button
          className="btn btn-light mx-2 my-2 rounded-pill justify-content-md-end"
          onClick={handleCopy}
          disabled={text.length === 0}>
          Copy
        </button>

        <button
          className="btn btn-light mx-1.5 my-2"
          onClick={handleUpClick}
          disabled={text.length === 0}>
          UpperCase
        </button>

        <button
          className="btn btn-light mx-1.5 mx-2 "
          onClick={handleLoClick}
          disabled={text.length === 0}>
          LowerCase
        </button>

        <button
          className="btn btn-light mx-1.5 mx-2 "
          onClick={handleCapitalize}
          disabled={text.length === 0}>
          Capitalize
        </button>

        <button
          className="btn btn-light mx-1.5 mx-2 "
          onClick={handleReverse}
          disabled={text.length === 0}>
          Reverse
        </button>
        <button
          className="btn btn-light mx-1.5 mx-2 my-2 "
          onClick={handleExtraSpaces}
          disabled={text.length === 0}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-4 border border-3 border-white rounded">
        <h1>Your Text Summery </h1>
        <h3>
          Word :{" "}
          {
            //regular expression
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
        </h3>
        <h3>Characters : {text.length}</h3>
        <h3>Reading Time : {0.008 * text.split(" ").length - 0.008}</h3>
      </div>

      <div className="container my-4 border border-3 border-white rounded">
        <h1> Live Preview </h1>
        {/* <h5>{PreviewText}</h5> */}
        
        <h5>{text}</h5>
      </div>
    </>
  );
}
