import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { HeaderButton } from './Components/HeaderButton'
import { COLORS } from './constants'

import Home from './pages/Home'
import Levels from './pages/Levels'
import Create from './pages/Create'

const AppStack = createStackNavigator()

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen options={{ headerShown: false }} name="Home" component={ Home } />
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
                        },
                        headerRight: () => (<HeaderButton goTo="Create" iconName="plus"/>)
                    }}
                />
                <AppStack.Screen 
                    name="Create"
                    component={ Create } 
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: COLORS.primary,
                        },
                        headerTintColor: COLORS.secondary1,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}