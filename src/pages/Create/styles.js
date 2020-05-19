import { StyleSheet } from 'react-native'

import { COLORS, STYLES } from '../../constants'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default StyleSheet.create({
    container: STYLES.container,
    headerBox: {
        width: "100%",
        alignItems: "center",
        marginBottom: 20
    },
    txtHeader: {
        color: COLORS.secondary2,
        fontSize: 24,
        fontWeight: "bold"
    },
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
    input: {
        backgroundColor: COLORS.primaryLighter2,
        borderColor: COLORS.secondary1,
        borderWidth: 1,
        borderRadius: 4,
        height: 36,
        marginBottom: 24,
        paddingHorizontal: 8
    },
    btnPrevLevel: STYLES.btnSecondary,
    btnCreate: STYLES.btnPrimary,
    txtButton: STYLES.txtButton
})