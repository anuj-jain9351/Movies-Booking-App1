import React, { useEffect, useState } from 'react';
import {AppBar,Autocomplete , Toolbar,TextField, Tabs,Tab, IconButton} from '@mui/material';
import {Box} from '@mui/system';
import MovieIcon from '@mui/icons-material/Movie';
import { getAllMovies } from '../api-helpers/api-helpers';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminActions,userActions } from '../store';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const isAdminLogegdIn = useSelector((state)=>state.admin.isLogegdIn);
  const isUserLogegdIn = useSelector((state)=>state.user.isLogegdIn);
   const [value,setValue] = useState(0);
   const [movies,setMovies] = useState([]);
  
   useEffect(()=>{
    getAllMovies()
    .then((data)=> setMovies(data.movies))
    .catch((err)=>console.log(err));
   },[]);
   const logout = (isAdmin)=>{
    dispatch(isAdmin ? adminActions.logout():userActions.logout());
   };
   const handleChange = (e,val)=>{
    const movie = movies.find((m)=>m.title === val);
    if(isUserLogegdIn){
      navigate(`/booking/${movie._id}`);
    }
   }
  return ( 
    <AppBar position="sticky" sx={{bgcolor:"#2b2d42" }}>
    <Toolbar>
      <Box width={'20%'}>
        <IconButton LinkComponent={Link} to="/">
        <MovieIcon/>
        </IconButton>
      </Box>
      <Box width={'30%'} margin={"auto"}>
      <Autocomplete
      onChange={handleChange}
        freeSolo
        options={movies && movies.map((option) => option.title)}
        renderInput={(params) => 
          <TextField
          sx={{input : {color:"white"}}} variant='standard'{...params} placeholder="search Acroos Multiple Movies" />}
      />
      </Box>
      <Box display={'flex'}>
         <Tabs textColor='inherit' indicatorColor='secondary' value={value} onChange={(e, val)=> setValue(val)}>
            <Tab label="Movies" LinkComponent={ Link } to="/movies" />
            {!isAdminLogegdIn && !isUserLogegdIn && (
            <>
              <Tab label="Admin" LinkComponent={ Link } to="/Admin"/>
              <Tab label="Auth" LinkComponent={ Link } to="/Auth"/>
            
            </>
            )}
          {isUserLogegdIn &&( 
            <>
              <Tab label="Profile" LinkComponent={ Link } to="/user"/>
              <Tab onClick={()=>logout(false)} label="Logout" LinkComponent={ Link } to="/"/>
          </>
          )}
          {isAdminLogegdIn &&( 
            <>
              <Tab label="Add Movie" LinkComponent={ Link } to="/add"/>
              <Tab label="Profile" LinkComponent={ Link } to="/user-admin"/>
              <Tab onClick={()=>logout(true)}
               label="Logout" LinkComponent={ Link } to="/"/>
          </>
          )}
         </Tabs>
      </Box>
    </Toolbar>
  </AppBar>
  )
};


export default Header;