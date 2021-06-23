import HomeView from './homeView';
import {StyleSheet} from 'react-native';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
    statusBarColor: {
        flex: 1,
        backgroundColor: AppStyles.colors.COLOR_PRIMARY
      },
      contentContainer: {
        flex: 1,
        backgroundColor: AppStyles.colors.COLOR_LIGHT_BACKGROUND
      }
  
})

export default styles;