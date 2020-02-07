import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/MySkills/Skills";
import Works from "./Components/MyWorks/Works";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
            <div className="wrapper">


                <div className='content'>
                    <Header/>
                    <Route path='/about' component={About}/>
                    <Route path='/skill' component = {Skills}/>
                    <Route path='/works' component = {Works}/>
                    <Route path='/contact' component = {Contact}/>
                </div>
                <div className='footer'>
                    <Footer />
                </div>
            </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
