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
    levelCard: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 10,
        marginTop: 10,
        borderColor: COLORS.primaryLighter2,
        borderWidth: 2,
        borderRadius: 10,
    },
    levelCardHeader: {
        paddingLeft: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.primaryLighter1,
        paddingBottom: 20
    },
    levelLabel:{
        flexDirection: "row",
        alignItems: "center",
    },
    levelBtnEditBox:{
        flexDirection: "row"
    },
    levelBtnEdit:{
        backgroundColor: COLORS.secondary1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    label: STYLES.label,
    level:{
        color: COLORS.complement,
        fontSize: 42,
        fontWeight: "bold",
        alignSelf: "center"
    },
    levelcardData: {
        paddingTop: 15,
    },
    row:{
        flexDirection: "row",
        justifyContent: "space-around"
    },
    column: {
        alignItems: "center",
        width: 120,
        marginVertical: 10,
    },
    txtData: {
        color: COLORS.secondary2,
        fontSize: 22,
        fontWeight: "bold",
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
        height: 2
    },
    addBtn: {
        backgroundColor: COLORS.secondary1,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 3,
        marginHorizontal: 11,
        width: 40,
        height: 40,
        borderRadius: 20,
        position: "absolute",
        top: 5,
        right: -10
    }
})