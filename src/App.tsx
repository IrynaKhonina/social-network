import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import { Profile } from "./components/Profile/Profile";

type PostType = {
    id: number;
    message: string;
    likesCount: string;
};

type DialogType = {
    id: number;
    name: string;
};

type MessageType = {
    id: number;
    message: string;
};

type AppStateType = {
    profilePage: {
        posts: PostType[];
    };
    messagesPage: {
        dialogsData: DialogType[];
        messageData: MessageType[];
    };
};

type AppProps = {
    state: AppStateType;
};

const App: React.FC<AppProps> = ({ state }) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Routes>
                    <Route
                        path="/dialogs"
                        element={<Dialogs
                            dialogsData={state.messagesPage.dialogsData}
                            messageData={state.messagesPage.messageData}
                        />}
                    />
                    <Route
                        path="/profile"
                        element={<Profile posts={state.profilePage.posts} />}
                    />
                </Routes>
            </div>
        </div>
    );
};

export default App;