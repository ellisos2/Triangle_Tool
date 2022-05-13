import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, TrigRatios, DrawTriangles } from './pages';
import Navigation from './components/Navigation';

const App = () => {

    return (
        <React.StrictMode>
            <Router>
                <Navigation></Navigation>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/TrigRatios" element={<TrigRatios />} />
                    <Route path="/DrawTriangles" element={<DrawTriangles />} />
                </Routes>
            </Router>
        </React.StrictMode>
    );
};

ReactDOM.render(<App />, document.getElementById('root'))