import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import { COLORS } from './constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight +20,
        backgroundColor: COLORS.primary
    },
    counterContainer:{
        flex: 1,
        position: "relative",
        justifyContent: "center",
        maxHeight: "50%"
    },
    infoContainer:{
        
    },
    txtLevel: {
        color: COLORS.complement,
        fontSize: 200,
        fontWeight: "bold",
        zIndex: 10,
        alignSelf: "center"
    },
    leftCircle:{
        backgroundColor: COLORS.primaryLighter1,
        height: 264,
        width: 132,
        borderTopLeftRadius: 132,
        borderBottomLeftRadius: 132,
        position: "absolute",
        right: "50%"
    },
    rightCircle:{
        backgroundColor: COLORS.primaryDarker1,
        height: 264,
        width: 132,
        borderTopRightRadius: 132,
        borderBottomRightRadius: 132,
        position: "absolute",
        left: "50%"
    },
    slider:{
        position: "relative"
    },
    fullBar:{
        backgroundColor: COLORS.primaryDarker1,
        borderRadius: 8,
        height: 8,
        width: "100%"
    },
    bar:{
        backgroundColor: COLORS.secondary1,
        borderRadius: 8,
        height: 8,
        width: "80%",
        position: "absolute",
        top: 0
    },
    levels:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    actualLevel: {
        color: COLORS.primaryLighter2,
        fontSize: 22,
        fontWeight: "bold",
    },
    nextLevel:{
        color: COLORS.primaryLighter2,
        fontSize: 22,
        fontWeight: "bold"
    },
    picker:{
        marginTop: 12,
        height: 36,
        width: "100%",
        borderRadius: 4,
        backgroundColor: COLORS.primaryLighter2,
    },
    section:{
        flexDirection: "row",
    },
    dataBox:{
        width: "50%",
        paddingHorizontal: 24,
        paddingVertical: 16,
        marginRight: 10,
        marginVertical: 16,
        borderColor: COLORS.primaryLighter1,
        borderWidth: 2,
        borderRadius: 10,
    },
    txtData:{
        color: COLORS.secondary2,
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "flex-end"
    },
    label:{
        color: COLORS.primaryLighter2,
        fontSize: 22,
        fontWeight: "bold"
    },
    balanceBox:{
        marginBottom: 16,
    },
    balance:{
        flex: 1,
        height: 36,
        backgroundColor: COLORS.primaryLighter2,
        borderRadius: 4,
        justifyContent: "center",
        paddingLeft: 12,
        marginRight: 16,
        marginTop: 12
    },
    txtBalance: {
        color: COLORS.primary,
        fontSize: 16,
        fontWeight: "bold"
    },
    btnView: {
        height: 36,
        width: 36,
        borderRadius: 18,
        backgroundColor: COLORS.secondary2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12
    },
    button:{
        backgroundColor: COLORS.secondary2,
        height: 36,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center"
    },
    txtButton: {
        color: COLORS.primary,
        fontSize: 16,
        fontWeight: "bold"
    }
})