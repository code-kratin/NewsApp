import './App.css';

import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
const App=()=> {
  // setProgress(){
 
  // } Cant use this. in this function use arrow function for that
  let apiKey='9356d640a49043b7a867925bc11d52b6'
  const [progress, setprogress] = useState(0);
  const [searchval, setsearchval] = useState("");
  // const [s, sets] = useState(false);

  // let changes=(bool)=>{
  //   sets(bool);
  //   console.log("changed", bool);
  // }

  let setProgress=(progress)=>{
    setprogress(progress);
  }
  let setSearch=(ele)=>{
    setsearchval(ele);
  }
  let getSearch=()=>{
    return searchval;
  }
    return (
      <Router>
        <div>
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
          />
          <Navbar setSearch={setSearch} getSearch={getSearch}/>
          <Switch>
          <Route exact path="/">
            <News setProgress={setProgress} apiKey={apiKey} key={"general"} pageSize={6} category={"general"} country={"in"}/>
          </Route>
          <Route exact path="/business">
            <News setProgress={setProgress} apiKey={apiKey} key={"business"} pageSize={6} category={"business"} country={"in"}/>
          </Route>
          <Route exact path="/entertainment">
            <News setProgress={setProgress} apiKey={apiKey} key={"entertainment"} pageSize={6} category={"entertainment"} country={"in"}/>
          </Route>
          <Route exact path="/health">
            <News setProgress={setProgress} apiKey={apiKey} key={"health"} pageSize={6} category={"health"} country={"in"}/>
          </Route>
          <Route exact path="/science">
            <News setProgress={setProgress} apiKey={apiKey} key={"science"} pageSize={6} category={"science"} country={"in"}/>
          </Route>
          <Route exact path="/technology">
            <News setProgress={setProgress} apiKey={apiKey} key={"technology"} pageSize={6} category={"technology"} country={"in"}/>
          </Route>
          <Route exact path="/sports">
            <News setProgress={setProgress} apiKey={apiKey} key={"sports"} pageSize={6} category={"sports"} country={"in"}/>
          </Route>
          <Route exact path={searchval}>
            <News apiKey={apiKey} key={"search"} pageSize={6} country={"in"} q={searchval}/>
          </Route>
        </Switch>
          {/* <News setProgress={setProgress} apiKey={apiKey} pageSize={6} category={"general"} country={"in"}/> 
          Here it dont automatically changes the component by the buttons as all the components are the same so it thinks why to change if the component is the same but we want to re render the components as they have different props so use unique key props to make compiler understand to re render the components*/}
        </div>
      </Router>
    )
}
//9356d640a49043b7a867925bc11d52b6
export default App