  import './App.css';
  import Home from './Components/Home/Home';
  import Tasks from './Components/Tasks/Tasks';
  import About from './Components/About/About';
  import { Route, Routes } from 'react-router-dom';
  import Navbar from './Components/Navbar/Navbar';

  function App() {
    return (
      <>
      <Navbar />
        {/* <header className="App-header"></header> */}
      <div>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/tasks' element={<Tasks />}></Route>
              <Route path='/about' element={<About />}></Route>
            </Routes>
      </div>
      </>
    );
  }

  export default App;
