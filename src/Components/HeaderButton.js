import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { COLORS } from '../constants'

export const HeaderButton = ({
    onPress = () => {},
    iconName = ""
}) => {
    return(
        <TouchableOpacity 
            style={{
                backgroundColor: COLORS.secondary1,
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 3,
                marginHorizontal: 11,
                width: 40,
                height: 40,
                borderRadius: 20
            }}
            onPress={onPress}>
            <Feather name={iconName} size={22} color={COLORS.primary}/>
        </TouchableOpacity>
    )
}