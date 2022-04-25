import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, TrigRatios } from './pages';
import Navigation from './components/Navigation';

const App = () => {

    return (
        <React.StrictMode>
            <Router>
                <Navigation></Navigation>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/TrigRatios" element={<TrigRatios />} />
                </Routes>
            </Router>
        </React.StrictMode>
    );
};

ReactDOM.render(<App />, document.getElementById('root'))