import React from 'react';
import './App.css';
import Profile from './profile/profile';
import tomas from "./profile/tomas.jpg";

function App() {
  const moi={fname: "tomas", bio : "nothing", profesion: "no"}
  const handelname=(name)=>{alert(name)}
  return (
    <div className="App" style={{textAlign:"center", color:"red"}}>
      <Profile>
     <img src={tomas} alt="T.cheleby"/>
     
    </Profile>
    {/* <Profile fullName={moi.fname} bio={moi.bio} profession={moi.profesion} myfunc={handelname}>
     <img src={tomas} alt="T.cheleby"/>
     
    </Profile> */}
    </div>
  );
}

export default App;
