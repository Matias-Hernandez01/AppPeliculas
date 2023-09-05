import { Cast } from "../interfaces/creditsInterface"
import { View, Text, Image, StyleSheet } from 'react-native';

interface Props {
  actor: Cast,
}

export const ActorItem = ({actor}: Props) => {
  const urlImage = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.cardContainer} >

      {
        actor.profile_path && <Image
          source={{uri: urlImage}} 
          style={{width:50, height:50, borderRadius:10, marginRight: 20}}
        />
      }
       
        <View style={styles.actorInfo} >
          <Text style={{fontSize:20, color:"black", fontWeight:"bold"}} >{actor.name}</Text>
          <Text style={{fontSize:15, color:"black", marginRight:10}} >{actor.character}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer:{
    flexDirection:"row",
    backgroundColor:"white",
    shadowColor: "#000",
    height:60,
    borderRadius:10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    marginLeft:20,
    paddingRight:15,
    paddingTop:6
  },
  actorInfo:{
    marginLeft:10
  }


});