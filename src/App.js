import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
            <div className="wrapper">


                <div className='content'>
                    <Header/>
                    <Route path='/about' component={About}/>
                    {/*<Route path='/skill' component = {MySkills}/>*/}
                    {/*<Route path='/works' component = {MyWorks}/>*/}
                    {/*<Route path='/contact' component = {Contacts}/>*/}
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