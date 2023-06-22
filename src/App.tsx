import MainRoutes from './Routes';
import './styles/style.css';
const background = require('./assets/background.mp4');


function App() {
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
