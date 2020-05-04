import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
const AppStack = createStackNavigator();

import Login from './pages/Login'
import Feed from './pages/Feed'

export default function Routes(){
    return(
        <NavigationContainer>
           <AppStack.Navigator screenOptions={{headerShown: false}}>
               <AppStack.Screen name="Login" component={Login} />
               <AppStack.Screen name="Feed" component={Feed} />
           </AppStack.Navigator> 
        </NavigationContainer>
    )
}