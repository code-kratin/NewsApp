import React, {useState} from 'react' //rcc or rce or rcep
import {
    Link
  } from "react-router-dom";

const Navbar=(props)=>{
  // constructor(){
  //   super()
  //   this.state={
  //     search: ""
  //   }
  // }
  const searching=()=>{
    let searchh=document.querySelector('#search');
    props.setSearch(searchh);
    // console.log(search.value);
  }
  // const [searchval, setsearchval] = useState('')
  const changetext=()=>{
    props.setSearch('/'+ document.querySelector('#search').value);
  }



  // changeSearch=(event)=>{
  //   this.setState({
  //     search: event.target.value
  //   })
  // }
        return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{backgroundColor: "#7700e0"}}>
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            <img src="https://pluspng.com/img-png/abc-news-talk-png-file-abc-news-now-logo-png-541.png" alt="" width="90" height="30"/>
            {/* NowNews */}
        </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/technology">Technology</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/sports">Sports</Link>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" id="search" onChange={changetext} placeholder="Search" aria-label="Search"/>
              <button type="button" className="btn btn-light btn-outline-dark"onClick={searching}>
                <Link className="nav-link active" to={props.getSearch()}>Search</Link>
              </button>
              {/* <button className="btn btn-outline-light"  onClick={this.searching}>Search</button> */}
            </form>
          </div>
        </div>
      </nav>

    )
}

export default Navbar