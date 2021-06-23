import React from 'react';
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import AppStyles from '../config/styles';

// Declaring type of props value

export interface LoadingProps {
    // headerLabel:any
  };
  
//Custom  Loading Component 

export const LoadingComponent: React.FC<LoadingProps> = (props:any) => {
    return (
        <View style={styles.main}>
           <ActivityIndicator size={'large'}/>
          </View>
    );
  }


const styles = StyleSheet.create({
    main: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:AppStyles.colors.COLOR_WHITE
      },
});

