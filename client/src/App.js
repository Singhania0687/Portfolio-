import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
