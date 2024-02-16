import React, {useState} from 'react'

export default function TextForm(props) {

    const[text, setText] = useState('');

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case", "success")
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case", "success")

    }

    const handleOnChange= (event)=>{
        setText(event.target.value);
    }

    const handleClear=()=>{
        setText("")
        props.showAlert("Text cleared", "success")

    }

    const handleCapitalize = ()=>{
        let firstLet = text.charAt(0).toUpperCase();
        let newText = firstLet + text.substring(1);
        setText(newText)
        props.showAlert("Capitalized", "success")
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard.", "success")

    }

    const handleExtraSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space has removed.", "success")

    }


  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>

        <h1>{props.heading}</h1>

        <div className="mb-3 form-check " >
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}}  id="myBox" rows = "8" />
        </div>

        <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleLowClick}>Convert to lowercase</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleCapitalize}>Capitalize</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleClear}>Clear text</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy text</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter somthing for preview."}</p>
    </div>
    </>

  )
}
