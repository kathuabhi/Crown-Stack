import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, FlatList, } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppStyles from '../config/styles';
import { BackArrow } from '../config/svg'
// Declaring type of props value

export interface LabelHeaderProps {
  headerLabel: string,
  _goBack?: any
};


//Custom  Header Component 

export const LabelHeader: React.FC<LabelHeaderProps> = (props: any) => {
  return (
    <View style={styles.main}>
      {props?.route?.name !== 'Home' ?
        <TouchableOpacity onPress={() => { props._goBack() }}>
          <BackArrow size={15} color={AppStyles.colors.COLOR_WHITE} />
        </TouchableOpacity> : <View />
      }
      <Text
        numberOfLines={1}
        style={styles.labelText}>
        {props.headerLabel}
      </Text>

      <View />

    </View>
  );
}


const styles = StyleSheet.create({
  main: {
    height: 35,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: AppStyles.colors.COLOR_PRIMARY,
    paddingHorizontal: 10
  },
  labelText: {
    fontSize: 14,
    color: AppStyles.colors.COLOR_WHITE,
    fontFamily: 'System'
  }
});

