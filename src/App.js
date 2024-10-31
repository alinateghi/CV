import './App.css';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="app">
      <div className='nav'>
        <Nav />
      </div>
      <div className='header'>
        <Header />
      </div>
      <div className='jobs'>
        <Experience />
      </div>
      <div className='edj'>
        <Education />
      </div>
    </div>
  );
}

export default App;
