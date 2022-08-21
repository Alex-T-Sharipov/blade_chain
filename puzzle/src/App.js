import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../src/Pages/Home'
import Profile from '../src/Pages/Profile'
import Navbar from '../src/Components/Navbar'
import NotFound from '../src/Components/NotFound'
import Quests from '../src/Pages/Quests'
import Quest from '../src/Components/Quest'
import Market from  '../src/Pages/Market'
import {styled} from '@mui/material'
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './utils/PrivateRoute' 
import Login from '../src/Pages/Login'
import Register from '../src/Pages/Register'

const StyledBox = styled('div')({
  display: 'flex',
  flexFlow: 'column',
  minHeight: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
})
const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '90vh',
  flexGrow: '1',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80%',
  gap: '40px',
  overflowY: 'hidden',
  overflowX: 'auto',
  scrollBehavior: 'smooth'

})


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <StyledBox>
      <Navbar/>
      <Container>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        {/* <Route path="profile" element={<Profile />} />
        <Route path="quests" element={<Quests />} />
        <Route path="quests/:questId" element={<Quest />} />
        <Route path="market" element={<Market />} /> */}
        {/* <PrivateRoute path="profile" element={<Profile/>}/> */} 
        {/* <Route path="profile" element= {<PrivateRoute/>}>
          <Route path="profile" element={<Profile/>}/>
        </Route>
        {/* <PrivateRoute path="quests" element={<Quests/>}/> */}
        <Route path="quests" element= {<PrivateRoute/>}>
          <Route path="quests" element={<Quests/>}/>
        </Route>
        {/* <PrivateRoute path="quests/:questId" element={<Quest/>}/> */}
        <Route path="quests/:questId" element= {<PrivateRoute/>}>
          <Route path="quests/:questId" element={<Quest/>}/>
        </Route>
        {/* <PrivateRoute path="market" element={<Market/>}/> */}
        <Route path="market" element= {<PrivateRoute/>}>
          <Route path="market" element={<Market/>}/>
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </Container>
      </StyledBox>  
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
