import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Route, Routes  } from "react-router-dom";
import { Profile } from "./components/Profile/Profile";

function App() {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs" element={<Dialogs />} />
                    <Route path="/profile" element={<Profile />} />

                </Routes>
            </div>
        </div>
    );
}

export default App;