import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom'; // Используем HashRouter для GitHub Pages

type PostType = {
    id: number;
    message: string;
    likesCount: string;
};

type DialogType = {
    id: number;
    name: string;
};

type  MessageType = {
    id: number;
    message: string;
};


const posts: PostType[] = [
    { id: 1, message: "Hi, how are you?", likesCount: "12" },
    { id: 2, message: "It's my first post", likesCount: "23" },
];

let dialogsData: DialogType[] = [
    { id: 1, name: "Александр" },
    { id: 2, name: "Борис" },
    { id: 3, name: "Ирина" },
    { id: 4, name: "Елена" },
    { id: 5, name: "Иван" },
    { id: 6, name: "Алексей" },
];


let messageData: MessageType[] = [
    { id: 1, message: "Привет" },
    { id: 2, message: "Как дела?" },
    { id: 3, message: "Йо" },
    { id: 4, message: "Йо" },
    { id: 5, message: "Йо" },
];

// Создаем корневой элемент для рендеринга
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// Рендерим приложение
root.render(
    <React.StrictMode>
        <HashRouter> {/* Оборачиваем приложение в HashRouter */}
            <App
                posts={posts}
                dialogsData={dialogsData}
                messageData={messageData}
            />
        </HashRouter>
    </React.StrictMode>
);

// Отчет о производительности (опционально)
reportWebVitals();