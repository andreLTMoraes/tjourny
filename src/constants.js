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
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight,
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
    }
}