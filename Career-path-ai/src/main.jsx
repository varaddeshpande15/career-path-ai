import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider ,createRoutesFromElements,Route} from 'react-router-dom';
import App from './App';
import Home from './Pages/Home';
import Features  from './Pages/Features';
import Solutions from './Pages/Solution';
import ContactUs from './Pages/ContactUs';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import './index.css';
import Layout from './Pages/Layout';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='ContactUs' element={<ContactUs />} />
      <Route path='Login' element={<Login />} />
      <Route path='SignUp' element={<SignUp />} />
      <Route path='Features' element={<Features />} />
      <Route path='Solutions' element={<Solutions />} />

        
      
      {/* <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} /> */}
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
