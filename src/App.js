
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
/* import About from './components/About';*/
 import TextForm from './components/TextForm';  
 import React, {useState} from 'react';

function App() {

  const [mode, setMode] = useState('light'); // dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1500)
  }

  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode enabled.", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled.", "success")

    }
  }

  return (
    <>
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className = "container my-3" mode = {mode} >
          <TextForm showAlert= {showAlert} heading = "Enter the text" />
          {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
