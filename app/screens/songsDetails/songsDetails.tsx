import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image,StatusBar } from 'react-native';
import { TopNavigatorParmsList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack'
import { } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LabelHeader } from '../../components/header'
import AppStyles from '../../config/styles';
import { LoadingComponent } from '../../components/loading';
import styles from './styles'

export interface SongsDetailsProps {
  navigation: StackNavigationProp<TopNavigatorParmsList, 'SongsDetails'>
};

const SongsDetails: React.FC<SongsDetailsProps> = (props: any) => {

  const _goBack = () => {
    props.navigation.goBack();
  }
  
  return (
    <>
      <SafeAreaView style={styles.statusBarColor}>
      <StatusBar
            backgroundColor={AppStyles.colors.COLOR_PRIMARY}
            barStyle="light-content"
          />
        <LabelHeader headerLabel="SONGS" _goBack={() => _goBack()} {...props} />
        <View style={styles.imageContentContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.imageGrid} source={{ uri: props.route.params.item.artworkUrl100 }} />
          </View>
          <Text style={styles.albumName}>
            {props.route.params.item.collectionName}
          </Text>
          <Text style={styles.artistName}>
            Artist Name : {props.route.params.item.artistName}
          </Text>
          <Text style={styles.artistName}>
            Track Name : {props.route.params.item.trackName}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};
export default SongsDetails;