import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from "../interfaces/MovieInterface";
import currencyFormater from "currency-formatter";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { ActorItem } from "./ActorItem";

interface Props {
  movieFull: MovieFull,
  cast: Cast[],
}

export const MovieDetails = ({movieFull, cast} : Props) => {
 
  const movieRating = Math.floor(movieFull.vote_average) > 6;
  const adult = movieFull.adult;

  return (
    <View style={{marginHorizontal:20, flexDirection:"column"}} >
      <View style={{flexDirection:"row"}} >
        <Text style={{...styles.descriptions , color: (movieRating) ? "green" : "red"}}>☆{Math.floor(movieFull.vote_average)}</Text>
        <Text style={styles.descriptions} >{movieFull.release_date}</Text>
        <Text style={{...styles.descriptions, fontSize: 15, color: adult ? "red": "green"}} >{adult ? "🔞" : "【Any age】"}</Text>
      </View>
      <View style={{flexDirection:"row"}} >
        {
          <Text style={{...styles.genres}}>
            {movieFull.genres.map(item => item.name).join(",")}
          </Text>
        }
      </View>

      <View style={{flexDirection:"column", marginTop:10}} >
        <Text style={{fontSize:23, fontWeight:"bold", color: "black"}} >History</Text>
      </View>
      <Text style={{fontSize:16, color:"black"}} >{movieFull.overview}</Text>

      <Text style={{fontSize:23, color:"black", fontWeight:"bold", marginTop:10}}>Budget</Text>
      <Text style={{color: "black", fontSize:18}} >{currencyFormater.format(movieFull.budget, {code: "USD"})}</Text>

      <View style={{marginTop:10, marginBottom:70}} >
        <Text style={{color:"black", fontSize:23, fontWeight:"bold"}} >Actores</Text>
        {/* {
          cast && <ActorItem actor={cast[0]}/>
        } */}
        <FlatList 
          data={cast}
          keyExtractor={(item)=> item.id.toString()}
          renderItem={({item})=> <ActorItem actor={item}/> }
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop:10, height:70, marginHorizontal: -20 }}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    descriptions:{
      fontWeight:"bold",
      marginRight:5,
      fontSize:15
    },
    genres: {
      color: "lightslategray",
      marginRight: 5,
      fontSize:15,
      fontWeight:"bold"
    }
});