import React from "react"
import {BrowserRouter as Router ,Routes , Route } from 'react-router-dom';
import Header from './componets/Header';
import Home from './componets/Home';
import Footer from "./componets/Footer";

function App() {
  return(
    <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />

            </Routes>
            <Footer />
    </Router>
  )
}

export default App
