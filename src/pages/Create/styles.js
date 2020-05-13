import { StyleSheet } from 'react-native'

import { COLORS, STYLES } from '../../constants'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default StyleSheet.create({
    container: STYLES.container,
    input: {
        backgroundColor: COLORS.primaryLighter2,
        borderColor: COLORS.secondary1,
        borderWidth: 1
    },
})