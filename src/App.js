import './App.css';
import Home from './Components/Home/Home';
import Background from './Components/Layout/Background';
import Header from './Components/Layout/Header';

function App() {
  return (
    <>
      <Background/>
      <Header/>
      <main>
        <Home/>
      </main>
    </>
  );
}

export default App;
