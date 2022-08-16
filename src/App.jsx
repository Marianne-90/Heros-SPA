import './App.css';
import {HeroesApp} from './HeroesApp.jsx';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <HeroesApp/>
      </BrowserRouter>
      
    </>
  )
}
