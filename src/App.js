import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/home';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import Contact from './pages/contact/contact';
import Suit from './pages/suits/suit';
import Agbada from './pages/agbada/agbada';
import Kaftan from './pages/kaftan/kaftan';
import Registration from './pages/registration/reg';
import About from './pages/about/about';
import ViewPage from './pages/view/view';
import Error from './pages/404page/404';
import Signup from './pages/signup/signup';
import Dash from './components/dashboard/dash';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/nav' element={<Nav/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/suit' element={<Suit/>}/>
      <Route path='/agbada' element={<Agbada/>}/>
      <Route path='/kaftan' element={<Kaftan/>}/>
      <Route path='/reg' element={<Registration/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/view' element={<ViewPage/>}/>
      <Route path='/dash' element={<Dash/>}/>
      <Route path='/*' element={<Error/>}/>
    </Routes>
  );
}

export default App;