import React, { useEffect, useState } from 'react'
import { View, Image, Picker, Text, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import Spinner from 'react-native-loading-spinner-overlay'

import { COLORS } from '../../constants'
import api from '../../services/api'
import styles from '../Levels/styles'

export default function Levels() {
    const [levels, setLevels] = useState([])
    const [loading, setLoading] = useState(false)

    async function getLevels(){
        if(loading){
            return
        }

        setLoading(true)

        const res = await api.get('', {
            params: {action: "getLevels"}
        })

        setLevels([...res.data.levels])
        setLoading(false)
    }
    
    useEffect(() => {
        getLevels()
    }, [])

    return(
        <View style={styles.container}>
            <Spinner
                visible={loading}
                textContent={'Carregando...'}
                textStyle={styles.loading}
                color={COLORS.secondary2}
                cancelable={true}
            />
            <FlatList
                data={levels}
                keyExtractor={level => String(level.level)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: level }) => (
                    <View style={styles.levelCard}>
                        <View style={styles.levelBox}>
                            <Text style={styles.label}>Nível</Text>
                            <Text style={styles.level}>{ level.level }</Text>
                        </View>
                        <View style={styles.dataBox}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={styles.label}>Lote</Text>
                                    <Text style={styles.txtData}>{ level.lot }</Text>
                                </View>
                                <View style={styles.column}>
                                    <Text style={styles.label}>Operações/Dia</Text>
                                    <Text style={styles.txtData}>{ level.opPerDay }</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={styles.label}>Meta</Text>
                                    <Text style={styles.txtData}>R$ {level.target},00</Text>
                                </View>
                                <View style={styles.column}>
                                    <Text style={styles.label}>Loss/Operação</Text>
                                    <Text style={styles.txtData}>{ level.riscPt } pts</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={styles.label}>Loss diário</Text>
                                    <Text style={styles.txtData}>R$ {level.lossDay },00</Text>
                                </View>
                                <View style={styles.column}>
                                    <Text style={styles.label}>Dias restantes</Text>
                                    <Text style={styles.txtData}>{ level.surviveDays }</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}