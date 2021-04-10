import './App.css';
import axios from 'axios'
import {useState} from 'react'
function App() {

  const [url,setUrl]=useState('')
  const [title,setTitle]=useState('')
  const [content,setContent]=useState('')  

  const handleSubmit=()=>{
    // console.log('hey')
    var data = JSON.stringify({"url":url,"title":title,"content":content});

    var config = {
      method: 'post',
      url: '/fakebox/check',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <label>URL</label>
      <input type="text"  onChange={(e)=>setUrl(e.target.value)} >
        </input>
      <br></br><br></br>
      <input  onChange={(e)=>setTitle(e.target.value)}  type="text">
        </input>
      <br></br><br></br>
      <input onChange={(e)=>setContent(e.target.value)} type="text" className="content">
        
        </input>
      <br></br><br></br>

      <div className = "Button">
        <button onClick={handleSubmit}>Submit</button>
      </div>

    </div>

    
    
  );
}

export default App;