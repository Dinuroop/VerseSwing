import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUPclick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success ");
    }
    const handleLWclick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success ");
    }
    const handleINclick=()=>{
        let word = text.split(" ");
        let newText = '';
        for(let i=0;i<word.length;i++){
            if (i===word.length-1){
                newText += word[i].charAt(0).toUpperCase()+word[i].slice(1); 
            }
            else{
                newText += word[i].charAt(0).toUpperCase()+word[i].slice(1)+" ";
            }
        }
        setText(newText);
        props.showAlert("Converted to Title Case!","success ");
    }
    const handleclearclick=()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text is cleared!","success ");
    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed!","success ");
    }
    const handleCopy=()=>{
        var newText = document.getElementById("TextBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to clipboard!","success ");
    }
    const handleONchange=(event)=>{
        setText(event.target.value);
        handleCount(event.target.value);
    }
    const [c,setC] = useState(0);
    const handleCount= (text) =>{
        const splitted = text.split(" ");
        let c = 0;
        for(let i=0;i<splitted.length;i++){
            if(splitted[i]===''){
                ;
            }else{
                c++;
            }
        }
        setC(c);
    }
  const [text,setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <div className="mb-3">
        <label for="TextBox" className="form-label"><h3>{props.heading}</h3></label>
        <textarea className="form-control" value={text} onChange={handleONchange} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} id="TextBox" rows="8"/>
    </div>
        <button className="btn btn-primary mx-1" onClick={handleUPclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLWclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleINclick}>Title Case</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleclearclick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your text Summary</h3>
        <p>{c} words and {text.length} characters</p>
        <p>{0.008*c} Minutes to read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:'Enter something in the text box to preview it'}</p>
    </div>
    </>
  )
}
