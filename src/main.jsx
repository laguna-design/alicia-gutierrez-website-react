/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx'
import './styles/main.scss'


import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';



createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<App />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/project/:slug" element={<ProjectPage />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
)*/


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/main.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);