import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getAllMovies } from '../../api-helpers/api-helpers';
import MoviesItem from "./MoviesItem";

const Movie = () => {
    
        const [movies, setMovies] = useState();
        useEffect(()=>{},[])
        getAllMovies().then((data)=>setMovies(data.movies)).catch(err=>console.log(err))
      return <Box margin={"auto"} marginTop={4}>
        <Typography margin={"auto"} variant='h4' padding={2} width="40%" textAlign="center" bgcolor={"#900c3f"} color="white" >
            All Movies</Typography>
            <Box width={"100%"} margin="auto" marginTop={5} display={'flex'} justifyContent="flex-start" flexWrap={"wrap"}>
                {movies && movies.map((movie,index)=><MoviesItem key={index} id={movie._id} posterUrl={movie.posterUrl} releaseDate={movie.releaseDate} title={movie.title}/>)} </Box>
    </Box>
}

export default Movie;