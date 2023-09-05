import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Movie } from "../interfaces/MovieInterface";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  movie: Movie,
  height?: number,
  width?: number,
}

export const MovieCard = ({movie, height= 400, width= 300}: Props) => {
  const urlImage = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`

  const navigation: any = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.8}
     style={{width, height, marginHorizontal: 2, paddingBottom:20, paddingHorizontal:5}}
     onPress={() => navigation.navigate("Detail", movie)} >
      <View style={styles.imageContainer} >
        <Image source={{uri: urlImage}} style={styles.image}></Image>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  image:{
    flex:1,
    borderRadius: 18,
  },
  imageContainer:{
    flex:1,
    shadowColor: "#000",
    borderRadius:18,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    
    elevation: 9,
  }
});