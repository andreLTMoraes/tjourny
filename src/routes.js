import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { COLORS } from './constants'

import Home from './pages/Home'
import Levels from './pages/Levels'

const AppStack = createStackNavigator()

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown:false }}>
                <AppStack.Screen name="Home" component={ Home } />
                <AppStack.Screen 
                    name="Levels" 
                    component={ Levels } 
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: COLORS.primary,
                        },
                        headerTintColor: COLORS.secondary1,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        }
                    }}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}