import logo from './logo.svg';
import './App.css';
import { lazy,Suspense } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

var Home = lazy(()=>import('./Component/home'));


function App() {
  return (
    <BrowserRouter>
     <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
