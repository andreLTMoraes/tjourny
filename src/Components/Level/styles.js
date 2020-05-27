import React from 'react'
import { StyleSheet } from 'react-native'

import { COLORS, STYLES } from '../../constants'

export default StyleSheet.create({
    label: STYLES.label,
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
        alignContent:"center",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.primaryLighter1,
        paddingBottom: 20,
    },
    levelLabel:{
        flexDirection: "row",
        alignItems: "center",
    },
    levelBtnEditBox:{
        flexDirection: "row",
    },
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
        justifyContent: "flex-end",
        width: 120,
        marginVertical: 10,
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
    txtData: {
        color: COLORS.secondary2,
        fontSize: 22,
        fontWeight: "bold",
    },
    levelInput: {
        width: 100,
        textAlign: "center",
        borderBottomWidth: 2,
        borderBottomColor: COLORS.primaryLighter1,
        color: COLORS.secondary2,
        fontSize: 22,
        fontWeight: "bold"
    }
})