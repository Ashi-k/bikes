import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Bikes from './components/Bikes';
import { Route, Routes } from 'react-router-dom';
import Bikesview from './components/Bikesview';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Bikes></Bikes>} />
        <Route path='/view-bikes/:id' element={<Bikesview></Bikesview>} ></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
