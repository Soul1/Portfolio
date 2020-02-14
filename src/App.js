import React from 'react';
import './App.css';
import {HashRouter, Route} from "react-router-dom";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/MySkills/Skills";
import Works from "./Components/MyWorks/Works";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <HashRouter>
            <div className="App">

            <div className="wrapper">
                <Header/>
                <div className='content'>
                    <Route exact path='/' component={About}/>
                    <Route path='/skill' component = {Skills}/>
                    <Route path='/works' component = {Works}/>
                    <Route path='/contact' component = {Contact}/>
                </div>
                <div className='footer'>
                    <Footer />
                </div>
            </div>
            </div>
        </HashRouter>
    );
}

export default App;
