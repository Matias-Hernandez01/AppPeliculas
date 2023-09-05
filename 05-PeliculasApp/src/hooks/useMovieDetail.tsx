import { useState, useEffect } from 'react';
import { MovieFull } from '../interfaces/MovieInterface';
import movieDB from '../api/MovieDB';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';

interface MovieDetails {
  isLoading: boolean,
  movieFull?: MovieFull,
  cast: Cast[],
}



export const useMovieDetail = (movieId: number) => {
  
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: []
  })
  
  
  
  const getMovieFull = async () => {
    
    const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);
    
    const [movieDetailsResp, castPromiseResp] = await Promise.all([movieDetailsPromise, castPromise])

    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castPromiseResp.data.cast
    })

  }
  
  useEffect(()=>{
    getMovieFull()
  },[])

  return {
    ...state,
  }
}