import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";
import { View, Text, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { RootStackParams } from "../navigation/Navigation";

import { useMovieDetail } from "../hooks/useMovieDetail";
import { MovieDetails } from '../components/MovieDetails';
const boton = require("../images/atras.png");

const screenHeight = Dimensions.get("screen").height;

interface Props extends StackScreenProps<RootStackParams,"Detail">{}

export const DetailScreen = ({route, navigation}: Props)  => {
  
  const movie = route.params;
  const urlImage = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`

  const {isLoading, cast, movieFull} = useMovieDetail(movie.id)
  

  return (
    <ScrollView>
      <View style={styles.imageContainer} >
        <View style={styles.imageRadius} >
        <Image  
          source={{uri: urlImage}}
          style={styles.posterImage}
          />
        </View>
      </View>
      <View style={styles.descriptionContainer} >
        <Text style={styles.subtitle} >{movie.original_title}</Text>
        <Text style={styles.title} >{movie.title}</Text>
      </View>
        {
          isLoading ? <ActivityIndicator size={35} color="grey" style={{marginTop:20}}
          /> : <MovieDetails movieFull={movieFull!} cast={cast} />
        }
        <View style={styles.btnBack} >
          <TouchableOpacity  onPress={()=>{navigation.pop()}} > 
            <Image 
              source={boton}
              style={{width:60, height:60}}
              />
          </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer:{
    height:screenHeight * 0.7,
    width:"100%",
    shadowColor: "#000",
    borderRadius:18,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 2,
  },
  imageRadius:{
    flex:1,
    overflow:"hidden",
    borderBottomEndRadius:25,
    borderBottomStartRadius:25,
    resizeMode:"cover",
  },
  posterImage:{
    flex:1,
  },
  descriptionContainer:{
    marginHorizontal:20,
    marginTop:20,
  },
  subtitle:{
    fontSize:16,
    color: "gray"
  },
  title:{
    color:"black",
    fontSize:20,
    fontWeight:"bold",
  },
  btnBack: {
    position: "absolute",
    top: 20, 
    left: 10,
  },
});