import React, { useEffect, useState } from 'react'
import { View, Image, Picker, Text, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../constants'
import { Feather } from '@expo/vector-icons'

import styles from './styles'

export default function Home() {
    const navigation = useNavigation()

    function navigateToLevels(){
        navigation.navigate('Levels')
    }

    return(
        <View style={styles.container}>
            <View style={styles.counterContainer}>
                <View style={styles.leftCircle}></View>
                <View style={styles.rightCircle}></View>
                <Text style={styles.txtLevel}>1</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.slider}>
                    <View style={styles.fullBar}></View>
                    <View style={styles.bar}></View>
                    <View style={styles.levels}>
                        <Text style={styles.actualLevel}>1</Text>
                        <Text style={styles.nextLevel}>2</Text>
                    </View>
                </View>
                <Picker style={styles.picker}>
                    <Picker.Item label="ModalMais" value="modalmais" />
                </Picker>
                <View style={styles.section}>
                    <View style={styles.dataBox}>
                        <Text style={styles.label}>Dias operados</Text>
                        <Text style={styles.txtData}>4</Text>
                    </View>
                    <View style={styles.dataBox}>
                        <Text style={styles.label}>Taxa de acerto</Text>
                        <Text style={styles.txtData}>56%</Text>
                    </View>
                </View>
                <View style={styles.balanceBox}>
                    <Text style={styles.label}>Saldo</Text>
                    <View style={styles.section}>
                        <View style={styles.balance}>
                            <Text style={styles.txtBalance}>R$ 468,00</Text>
                        </View>
                        <TouchableOpacity style={styles.btnView}>
                            <Feather name="eye" size={22} color={COLORS.primary}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigateToLevels()}
                >
                    <Text style={styles.txtButton}>Níveis</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}