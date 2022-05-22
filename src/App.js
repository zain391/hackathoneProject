import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/homepage/Homepage.component';
import Hats from '../src/components/Hats/Hats'
import Shop from './components/Shop/Shop.component';
import Header from './components/header/Header.component';
import CollectionPreview from './components/collection-preview/CollectionPreview'
import SingInAndSignUp from './components/sign-in-and-sign-up/Sign-in-and-sign-up.component'
import Contact from './pages/contact/Contact';
import SingUp from './pages/signup/SingUp';
import Login from './pages/login/Login';
import Footer from './components/footer/Footer';
const hatpage=()=>{
  return(
    <div>
      <h1>i am another page</h1>
    </div>
  )
}
function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/Hats' element={<Hats/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/singup' element={<SingUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/CollectionPreview' element={<CollectionPreview/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/zain391/crwn-web.git
// git push -u origin main
// 
// -----------------token ---------------------
// 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
