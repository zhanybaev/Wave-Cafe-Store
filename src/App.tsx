import { useEffect } from 'react';
import MainRoutes from './Routes';
import './styles/style.css';
import { useDispatch } from 'react-redux';
import { authListener } from './store/actions/auth.action';
const background = require('./assets/background.mp4');

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    authListener(dispatch)
  }, [])
  
  return (
    <div className="App">
      <video id="background-video" autoPlay loop muted>
        <source src={background} type="video/mp4"/>
      </video>
      <main>
        <MainRoutes/>
      </main>
    </div>
  );
}

export default App;
