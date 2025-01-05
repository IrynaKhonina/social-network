import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom'; // Используем HashRouter для GitHub Pages

// Создаем корневой элемент для рендеринга
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// Рендерим приложение
root.render(
    <React.StrictMode>
        <HashRouter> {/* Оборачиваем приложение в HashRouter */}
            <App />
        </HashRouter>
    </React.StrictMode>
);

// Отчет о производительности (опционально)
reportWebVitals();