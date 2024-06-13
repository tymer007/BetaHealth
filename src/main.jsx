import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage'
import './index.css'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import HomeReader from './pages/home2/HomeReader'
import HomeExpert from './pages/Home3/HomeExpert'
import LogInPage from './pages/login/LogInPage'
import ApplicationFirstPage from './pages/signUpExpert1/ApplicationFirstPage'
import ApplicationSecondPage from './pages/signUpExpert2/ApplicationSecondPage'
import SignUpReader from './pages/signUpReader/signUpReader'
import LoginDashboard from './pages/login/LoginDashboard'
import WriterProfile from './pages/WriterProfile/WriterProfile'
import ProfileReaderView from './pages/profileReaderView/ProfileReaderView'
import DashboardWriteArticle from './dashboard/DashboardWriteArticle'
import DashboardConsultation from './dashboard/DashboardConsultations'




ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Routes>
  <Route path='/' element={<HomePage />}/>
  <Route path='/HomeReader' element ={< HomeReader/>}/>
  <Route path='/HomeExpert' element ={< HomeExpert/>}/>
  <Route path='/Login' element={< LogInPage/>}/>
  <Route path='/LoginExpert' element={< LoginDashboard/>}/>
  <Route path='/SignUpExpert1' element={< ApplicationFirstPage/>}/>
  <Route path='/SignUpExpert2' element={< ApplicationSecondPage/>}/>
  <Route path='/SignUpReader' element={< SignUpReader/>}/>
  <Route path='/HomeExpert' element ={< HomeExpert/>}/>
  <Route path='/ProfileE' element ={< WriterProfile/>}/>
  <Route path='/ProfileR' element ={< ProfileReaderView/>}/>
  <Route path='/WriteArticle' element ={< DashboardWriteArticle/>}/>
  <Route path='/Consultation' element ={< DashboardConsultation/>}/>
  
</Routes>
</BrowserRouter>
)
