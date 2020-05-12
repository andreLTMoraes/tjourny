import React, { useEffect, useState } from 'react'
import { View, Image, Picker, Text, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import Spinner from 'react-native-loading-spinner-overlay'

import { COLORS } from '../../constants'
import api from '../../services/api'
import styles from './styles'

export default function Home() {
    const navigation = useNavigation()
    const [data, setData] = useState({})
    const [visible, setVisible] = useState(false)
    const [balance, setBalance] = useState("")
    const [icon, setIcon] = useState("eye")
    const [loading, setLoading] = useState(false)

    async function getData(){
        if(loading){
            return
        }

        setLoading(true)

        const res = await api.get('', {
            params: {action: "getHome", brokerName: "ModalMais"}
        })

        console.log(res.data);
        

        setData(res.data)
        setLoading(false)
    }
    
    useEffect(() => {
        getData()
    }, [])

    function navigateToLevels(){
        navigation.navigate('Levels')
    }

    function hideShow(){
        setVisible(!visible)
        if(visible){
            setIcon("eye-off")
            setBalance(data.balance)
        } else {
            setIcon("eye")
            setBalance("")
        }
    }

    return(
        <View style={styles.container}>
            <Spinner
                visible={loading}
                textContent={'Carregando...'}
                textStyle={styles.loading}
                color={COLORS.secondary2}
                cancelable={true}
            />
            <View style={styles.counterContainer}>
                <View style={styles.leftCircle}></View>
                <View style={styles.rightCircle}></View>
                <Text style={styles.txtLevel}>{data.level}</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.slider}>
                    <View style={styles.fullBar}></View>
                    <View style={[styles.bar, {width: data.target}]}></View>
                    <View style={styles.levels}>
                        <Text style={styles.actualLevel}>{data.level}</Text>
                        <Text style={styles.nextLevel}>{data.level + 1}</Text>
                    </View>
                </View>
                <Picker style={styles.picker}>
                    <Picker.Item label="ModalMais" value="modalmais" />
                </Picker>
                <View style={styles.section}>
                    <View style={styles.dataBox}>
                        <Text style={styles.label}>Dias operados</Text>
                        <Text style={styles.txtData}>{data.days}</Text>
                    </View>
                    <View style={styles.dataBox}>
                        <Text style={styles.label}>Taxa de acerto</Text>
                        <Text style={styles.txtData}>{data.rate}</Text>
                    </View>
                </View>
                <View style={styles.balanceBox}>
                    <Text style={styles.label}>Saldo</Text>
                    <View style={styles.section}>
                        <View style={styles.balance}>
                            <Text style={styles.txtBalance}>
                               {balance}
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.btnView} onPress={() => hideShow()}>
                            <Feather name={icon} size={22} color={COLORS.primary}/>
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