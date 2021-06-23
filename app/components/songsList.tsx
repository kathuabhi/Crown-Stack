import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import AppStyles from '../config/styles';

// Declaring type of props value

export interface SongListProps {
  item: any,
  onPress: any
};

//Custom  songs list Component 

export const SongsListComponent: React.FC<SongListProps> = (props: any) => {
  return (
    <TouchableOpacity activeOpacity={.9} style={{ height: 120, width: '100%' }} onPress={() => { props.onPress() }}>
      
      <View style={{ marginTop: .4, backgroundColor: 'white', flexDirection: 'row',margin:4,borderRadius:10}}>
      <View style={{
        flex: 1, padding: 15, shadowOffset: {
          width: 0,
          height: 2
        },
        shadowColor: AppStyles.colors.COLOR_GREY,
        shadowRadius: 3,
        shadowOpacity: 1
      }}>
        <Image style={{ height: '100%', width: '100%', borderRadius: 10, }} source={{ uri: props.item.artworkUrl100 }} />

      </View>
      <View style={{ flex: 2, padding: 10,justifyContent:'center' }}>

        <Text style={{ color: AppStyles.colors.COLOR_PRIMARY ,fontWeight:'bold'}} numberOfLines={3}>
          {props.item.collectionName}
        </Text>
        <Text style={{ color: AppStyles.colors.COLOR_PRIMARY, marginTop: 2, fontSize: 10 }}>
          Artist Name : {props.item.artistName} 
        </Text>
      </View>
      <View style={{ flex: .5, padding: 10,justifyContent:'center' }}>
      <Text style={{color: 'grey',fontSize:10 ,fontWeight:'bold'}}>{props.item.collectionPrice}</Text>
      </View>
      </View>

    </TouchableOpacity>);
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppStyles.colors.COLOR_WHITE
  },
});

