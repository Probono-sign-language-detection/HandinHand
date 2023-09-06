import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Home from '../screens/Home';
import New from '../screens/New';
import Profile from '../screens/Profile';

const Nav = createBottomTabNavigator();

function MainTabNavigator() {
    return(
        <>
            <Nav.Navigator initialRouteName='Home'>
                <Nav.Screen name = "Home" component={Home} 
                            options={{title: '홈 화면', headerShown: false }}/>
                <Nav.Screen name = "New" component={New} 
                            options={{title: '새로운 대화', headerShown: false }}/>
                <Nav.Screen name = "Profile" component={Profile} 
                            options={{title: '프로필', headerShown: false }}/>
            </Nav.Navigator>
        </>
    )
}

export default MainTabNavigator;

const styles = StyleSheet.create({
    text:{
        fontSize: 20
    }
})