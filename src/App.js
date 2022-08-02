import './App.css';
import { Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Login />}>
      </Route>
      <Route path='/home' element={<Home />}>
      </Route>
    </Routes>
    </>
  );
}

export default App;
