import React, { Component } from 'react';

import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
const styles = StyleSheet.create({
  statusBarColor: {
    flex: 1,
    backgroundColor: AppStyles.colors.COLOR_PRIMARY
  },
  contentContainer: {
    flex: 1,
    backgroundColor: AppStyles.colors.COLOR_LIGHT_BACKGROUND,
    // justifyContent:'space-around',
    alignItems: 'center'
  },
  imageContentContainer: {
    flex: 1.5,
    backgroundColor: AppStyles.colors.COLOR_LIGHT_BACKGROUND,
    justifyContent: 'center', alignItems: 'center',
    paddingHorizontal: 10
  },
  imageContainer: {
    height: '50%',
    width: '80%',
    borderRadius: 25,
    backgroundColor: AppStyles.colors.COLOR_PRIMARY,
    justifyContent: 'center', 
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowColor: AppStyles.colors.COLOR_GREY,
    shadowRadius: 4,
    shadowOpacity: 1
  },
  imageGrid: {
    height: '100%',
    width: '100%',
    borderRadius: 25,
    backgroundColor: AppStyles.colors.COLOR_PRIMARY,

  },
  albumName: { 
    color: AppStyles.colors.COLOR_DARK_GREY, 
    fontWeight: 'bold', 
    fontSize: 18, 
    marginTop: 15 
  },
  artistName:{ 
    color: AppStyles.colors.COLOR_GREY, 
    marginTop: 5, 
    fontSize: 12 
  }
})

export default styles;