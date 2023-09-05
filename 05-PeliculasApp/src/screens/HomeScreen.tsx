import React, { useEffect, useState } from "react"
import {View, ActivityIndicator, Dimensions, ScrollView} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel from 'react-native-snap-carousel';


import { UseMovies } from "../hooks/useMovies";
import { MovieCard } from "../components/MovieCard";
import { FlatListComponents } from "../components/FlatListComponents";
import { GradientBackground } from "../components/GradientBackground";
import {getImageColors} from "../helpers/getColores";


const {width: windowWidth} = Dimensions.get("window");

export const HomeScreen = () => {


  const {nowPlaying,popular,topRated, upcoming, isLoading} = UseMovies();
  const {top} = useSafeAreaInsets()

  const getPosterColors = async (index: number) => {

    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary, secondary] = await getImageColors(uri)

    console.log(primary)
  }
  


  if(isLoading){
    return <View style={{flex:1, justifyContent:"center", alignItems:"center"}} >
      <ActivityIndicator color="red" size={100} />
    </View>
  }


  return (
    <GradientBackground  >

     <ScrollView>

      <View style={{marginTop:top + 20}} >
      
       <View style={{height:440}} >
          <Carousel 
            vertical={ false }
            data={nowPlaying}
            renderItem={({item}:any)=> <MovieCard movie={item}/>  }
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
            onSnapToItem={index => getPosterColors(index)}
           />
        </View>
        
            <FlatListComponents title="Popular" data={popular}/>
            <FlatListComponents title="Top Rated" data={topRated}/>
            <FlatListComponents title="Upcoming" data={upcoming}/>
        
        </View>
      </ScrollView>
    </GradientBackground>
  )
}