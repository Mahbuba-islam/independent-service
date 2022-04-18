
import {Route, Routes} from 'react-router-dom';
import './App.css';
import About from './Pages/About/About/About';

import Blogs from './Pages/Blogs/Blogs/Blogs';

import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';

import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';



function App() {
 return(
    <>
     <Header></Header>
      <Routes>
        <Route path = '/' element ={<Home></Home>}></Route>
        <Route path = '/home' element ={<Home></Home>}></Route>
        <Route path= '/About' element = {<About></About>}></Route>
       <Route path= '/Login' element = {<Login></Login>}></Route>
        <Route path= '/register' element = {<Register></Register>}></Route>
        <Route path= '/Blogs' element = {<Blogs></Blogs>}></Route>
        <Route path= '/serviceDetails' element = {
          <RequireAuth>
            <ServiceDetails></ServiceDetails>
          </RequireAuth>
        }></Route>
     </Routes>
        <Footer></Footer> 
    </>
  )
}

  
  


export default App;
