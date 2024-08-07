import {useDispatch, useSelector} from 'react-redux';
import { Route, Routes } from "react-router-dom";
import Admin from "./Components/Auth/Admin";
import Auth from "./Components/Auth/Auth";
import Header from "./Components/Header";
import HomePage from "./Components/movies/HomePage";
import Movie from "./Components/movies/Movie";
import { useEffect } from 'react';
import { adminActions, userActions } from './store';
import Booking from './Components/Bookings/Booking';
import UserProfile from './profile/UserProfile';
import AddMovie from './Components/movies/AddMovie';
import AdminProfile from './profile/AdminProfile';

function App() {
  const dispatch = useDispatch();
  const isAdminLogegdIn = useSelector((state)=>state.admin.isLogegdIn);
  const isUserLogegdIn = useSelector((state)=>state.user.isLogegdIn);
  console.log("isAdminLogegdIn",isAdminLogegdIn);
  console.log("isUserLogegdIn",isUserLogegdIn);
 useEffect(()=>{
  if(localStorage.getItem("userId")){
 dispatch(userActions.login());
  }else if(localStorage.getItem("adminId")){
    dispatch(adminActions.login());
  }
 },[dispatch])
  return (
   <div>
  <Header/>
    <section>
      <Routes>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/movie" element={<Movie/>}/>
      { !isUserLogegdIn && !isAdminLogegdIn && (
        <>
         {" "}
         <Route path="/admin" element={<Admin/>}/>
        <Route path="/auth" element={<Auth/>}/>
        </>
      )}
        { isUserLogegdIn && !isUserLogegdIn &&(
         <>
         {" "}
          <Route path="/user" element={<UserProfile/>}/>
        <Route path="/booking/:id" element={<Booking/>}/>
        </>
        
        )}

        { isAdminLogegdIn && !isUserLogegdIn &&(
           <>
            {" "}
        <Route path="/add" element={<AddMovie/>}/>
        <Route path="/user-admin" element={<AdminProfile/>}/> {" "}
        </>
      )}
        
      </Routes>
      </section>
    
  </div>
  );
  }

  export default App;