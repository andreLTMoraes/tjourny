import React from 'react'
import { View } from 'react-native'

export const Shower = ({
    children = "",
    visible = true
}) => {
    if({visible}){
        return(
            <View>
                {children}
            </View>
        )
    }
    return
}