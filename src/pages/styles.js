import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import { COLORS } from './constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight +20,
        backgroundColor: COLORS.primary
    }
})