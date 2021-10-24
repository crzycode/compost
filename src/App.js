
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from './Pages/Home'
import NavigationBar from './Pages/Header'
import Slider from './Pages/Slider';
import Slick from './Pages/Slick'
import './css/index.css'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
   <>
   <NavigationBar />
   
   <Slick />
   <Home />
   </>
  );
}

export default App;
