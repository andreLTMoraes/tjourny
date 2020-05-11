import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Levels from './pages/Levels'

const AppStack = createStackNavigator()

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={ Home } />
                <AppStack.Screen name="Levels" component={ Levels } />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}