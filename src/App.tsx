import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import { Profile } from "./components/Profile/Profile";

let SomeComponent = () => <Dialogs />;

function App() {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Routes>
                    {/* Передаем JSX-элемент SomeComponent вместо компонента как функции */}
                    <Route path="/dialogs" element={<SomeComponent />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;