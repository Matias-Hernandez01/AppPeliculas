import { Text, View, FlatList, StyleSheet } from 'react-native';

import { MovieCard } from './MovieCard';
import { Movie } from '../interfaces/MovieInterface';

interface Props{
  title?: string,
  data?: Movie[],
  heigthCard?: number,
  widthCard?: number,
  showHorizontal?: boolean,
  horizontal?: boolean,
}

export const FlatListComponents = ({title, data}: Props) => {
  return (
    <View style={{height: (title) ? 260 : 220 }} >
      {title && <Text style={styles.title}>{title}</Text> }
      <FlatList 
        data={data}
        renderItem={({item}: any) => <MovieCard movie={item} width={140} height={200} /> }
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    marginLeft:10,
    fontSize:30,
    color: "gray",
    fontFamily:"Sans-serif", 
    fontWeight:"bold",
    textShadowColor: "black",
    textShadowRadius: 3,
    textShadowOffset:{
      width:1,
      height:1
    }
  }
});