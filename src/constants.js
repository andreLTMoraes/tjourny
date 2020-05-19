import React from 'react'
import Constants from 'expo-constants'

export const COLORS = {
    primary: "#0F1020",
    primaryDarker1: "#070715",
    primaryLighter1: "#1B1C2B",
    primaryLighter2: "#2D2E3C",
    complement: "#EBAE00",
    secondary1: "#61039E",
    secondary2: "#009186",
}

export const STYLES = {
    containerForNavBar: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: COLORS.primary
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: COLORS.primary
    },
    label:{
        color: COLORS.primaryLighter2,
        fontSize: 22,
        fontWeight: "bold"
    },
    loadingTxt: {
        color: COLORS.secondary2
    },
    txtData:{
        color: COLORS.secondary2,
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "flex-end"
    },
    btnPrimary:{
        backgroundColor: COLORS.secondary2,
        height: 36,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 12
    },
    btnSecondary:{
        backgroundColor: COLORS.secondary1,
        height: 36,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 12
    },
    txtButton:{
        color: COLORS.primary,
        fontSize: 16,
        fontWeight: "bold"
    }
}