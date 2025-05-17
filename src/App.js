import './App.css';
import Alert from './components/Alert';
import CustomerInfoForm from './components/CustomerInfoForm';
import NavaBar from './components/NavBar';
import React, {useState} from 'react'

function App() {

  const [mode, setMode] = useState("light");    //States in Reacts
  const[alert, setAlert] = useState(null);
  const setAlertProperties = (msg, type) =>{
      setAlert({
        msg : msg ,
        type : type
      });
      setTimeout(() => {
          setAlert(null);
      },2000);
  }
  const HandleSetMode =() =>{
    if(mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor='white';
      console.log(mode);
      setAlertProperties("Light Mode Enabled!","success");
      document.title = "Suryawanshi Construction - Light";
    }
    else{
      setMode("dark");
      console.log(mode);
      document.body.style.backgroundColor='black';
      setAlertProperties("Dark Mode Enabled!","success");
      document.title =  "Suryawanshi Construction - Dark";
    }
  }
  return (
    <div className="App">
      <NavaBar title = "Suryawanshi Construction" HandleSetMode = {HandleSetMode} mode = {mode} />
      <Alert alert = {alert}/>
      <div className = "container">
        <CustomerInfoForm mode = {mode} setAlertProperties = {setAlertProperties}/>
      </div>
      
    </div>
    // <Router>
    // <div className="App">
    //   <NavaBar title = "Suryawanshi Construction" HandleSetMode = {HandleSetMode} mode = {mode} />
    //   <Alert alert = {alert}/>
    // </div>
    // <Routes>
    //   <Route exact path="/about" element = {<About /> } />
    //   <Route exact path="/addCustomer" 
    //     element = { 
    //                 <div className = "container">
    //                   <CustomerInfoForm mode = {mode} setAlertProperties = {setAlertProperties}/>
    //                 </div> 
    //     } /> 
    //   <Route exact path="/" 
    //     element = { 
    //                 <div className = "container">
    //                   <CustomerInfoForm mode = {mode} setAlertProperties = {setAlertProperties}/>
    //                 </div> 
    //     } /> 
    // </Routes>
    // </Router>
  );
}

export default App;
