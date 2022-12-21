
import './App.css';
import LandingPage from './Pages/LandingPage';
import NavBar from './Components/NavBar';
import FeaturedProperty from './Components/FeaturedProperty';
import PropertyList from './Components/PropertyList';
import Property from './Components/Property';
import {Routes, Route } from 'react-router-dom';
import SingleProperty from './Pages/SingleProperty';
import UnderMaintainence from './Pages/UnderMaintainence';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <>
    <div className='divide-y divide-white'>
    <NavBar/>
    <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route exactpath="/featured" element={<FeaturedProperty/>}/>
    <Route path="/propertylist" element={<PropertyList/>}/>
    <Route path="/properties" element={<Property/>}/>
    <Route path="/propertydesc/:id" element={<SingleProperty/>}/>
    <Route path="/a" element={<UnderMaintainence/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </div>
    </>
  );
}

export default App;
