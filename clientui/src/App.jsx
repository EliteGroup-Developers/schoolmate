import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './Register';
import Login from './Login'
import MainPage from './MainPage'
import CourseRegistration from './CourseRegistration';

import DashBoard from './DashBoard'

import Developers from './Developers'

import Nav from './Home/Nav'
import Hero from './Home/Hero'



function App() {

  return (
    <main className="App mt-0">
      <BrowserRouter>
      <Routes>

        <Route index element={<MainPage/>}/>
        <Route path='/home' element={<MainPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/coursereg' element={<CourseRegistration/>}/>
        <Route path='/developer' element={<Developers/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
      {/* <Nav/>
      <Hero/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <CourseRegistration/> */}

      </Routes>
      
      
      </BrowserRouter>
    </main>
  );
}

export default App;