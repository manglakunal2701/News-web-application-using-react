import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";


export default class App extends Component {

  render() {
    return (
      <div>
         <Router>
          <NavBar/>
          <div  className="container my-3 ">
              <Routes>
                  < Route exact path="/" element={<News key="general" country="in" pagesize={5} category="general"/>}/>
                  < Route exact path="/general" element={<News key="general" country="in" pagesize={5} category="general"/>}/>
                  < Route exact path="/business"  element={<News key="business" country="in" pagesize={5} category="business"/>}/>
                  < Route exact path="/entertainment"  element={<News key="entertainment"country="in" pagesize={5} category="entertainment"/>}/>
                  < Route exact path="/health"  element={<News  key="health" country="in" pagesize={5} category="health"/>}/>
                  < Route exact path="/science" element={<News key="science"  country="in" pagesize={5} category="science"/>}/>
                  < Route exact path="/sports" element={<News key="sports" country="in" pagesize={5} category="sports"/>}/>
                  < Route exact path="/technology" element={<News key="technology" country="in" pagesize={5} category="technology"/>}/>
              </Routes>
          </div>
         </Router>
      </div>
    )
  }
}
