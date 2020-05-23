import { StyleSheet } from 'react-native'

import { COLORS, STYLES } from '../../constants'

export default StyleSheet.create({
    containerForNavBar: STYLES.containerForNavBar,
    navBar:{
        height: 62,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: COLORS.primaryDarker1,
        borderBottomWidth: 1
    },
    container: STYLES.container,
    loading: STYLES.loadingTxt,
    levelBtnEdit:{
        backgroundColor: COLORS.secondary1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    addBtnContainer:{
        width: "100%",
        height: 50,
        justifyContent: "center",
        position: "relative"
    },
    addLine:{
        backgroundColor: COLORS.primaryLighter2,
        width: "99%",
        height: 2,
    },
    addBtn: {
        backgroundColor: COLORS.secondary1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 11,
        width: 40,
        height: 40,
        borderRadius: 20,
        position: "absolute",
        top: 5,
        right: -10
    }
})