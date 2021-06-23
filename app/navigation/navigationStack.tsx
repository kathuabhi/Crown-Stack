import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home/homeView';
import SongsDetails from '../screens/songsDetails/songsDetails'
import { createStackNavigator } from '@react-navigation/stack';
const MainStack = createStackNavigator();

const MainNavigator: React.FC = () => {
    const { Navigator, Screen } = MainStack
    return (
        <Navigator headerMode="none">
            <Screen name="Home" component={Home} />
            <Screen name="SongsDetails" component={SongsDetails} />
        </Navigator>
    )
}
export default MainNavigator
