import { StyleSheet } from 'react-native'

import { COLORS, STYLES } from '../../constants'

export default StyleSheet.create({
    container: STYLES.container,
    loading: STYLES.loadingTxt,
    levelCard: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 20,
        flexDirection: "row",
        borderColor: COLORS.primaryLighter1,
        borderWidth: 2,
        borderRadius: 10,
    },
    levelBox: {
        justifyContent: "center",
        borderRightWidth: 2,
        borderRightColor: COLORS.primaryLighter1,
        marginRight: 10,
        paddingRight: 20
    },
    label: STYLES.label,
    level:{
        color: COLORS.complement,
        fontSize: 42,
        fontWeight: "bold",
        alignSelf: "center"
    },
    dataBox: {
        flex: 1
    },
    row:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    column: {
        width: "50%",
        marginVertical: 4,
        alignItems: "center"
    },
    txtData: {
        color: COLORS.secondary2,
        fontSize: 22,
        fontWeight: "bold",
    }
})