
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, ImageCon, Profile } from '../screens';

// import { Home } from '../screens/Home';
// import { Profile } from '../screens/Profile';

const Tap = createBottomTabNavigator();

export const Nav = () => {
    return (
        <Tap.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'pink'
            }}
            tabBarOptions={{
                activeTintColor: '#fff',
                activeBackgroundColor: 'black',
                inactiveBackgroundColor: 'black',
                // inactiveTintColor: 'lightgray',
                // style: {
                //       backgroundColor: '#CE4418',
                //     //   paddingBottom: 3
                // }
            }}
        >
            <Tap.Screen name="Home" component={Home} />
            <Tap.Screen name="Profile" component={Profile} />
            <Tap.Screen name="Image" component={ImageCon} />
        </Tap.Navigator>
    )
}