import React, { useEffect, useState } from 'react'
import { View, Picker, Text, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import Spinner from 'react-native-loading-spinner-overlay'

import { COLORS } from '../../constants'
import api from '../../services/api'
import styles from './styles'

export default function Home() {
    const navigation = useNavigation()
    const [data, setData] = useState({})
    const [brokers, setBrokers] = useState([])
    const [selectedBroker, setSelectedBroker] = useState("")
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 100000)

    async function getData(){
        if(selectedBroker){        
            if(visible) hideShow()

            const res = await api.get('', {
                params: {action: "getHome", brokerName: selectedBroker}
            })
            
            setData(res.data)
            setLoading(false)
        }
    }

    async function getBrokers(){
        setLoading(true)
        try{
            const res = await api.get('', {params: {action: 'getBrokers'}})
            setBrokers(res.data.brokers)
            setSelectedBroker(res.data.brokers[0])
        } catch(error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getBrokers()
    }, [])

    useEffect(() => {
        getData()
    }, [selectedBroker])

    function navigateToLevels(){
        navigation.navigate('Levels')
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
                <Picker style={styles.picker}
                    selectedValue={selectedBroker}
                    onValueChange={(broker) => {
                        setSelectedBroker(broker)
                        setLoading(true)
                    }}>
                    {brokers.map((broker, index) => {
                        return(<Picker.Item label={broker} value={broker} key={index}/>)
                    })}
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
                    <View style={styles.section}>
                        <View style={styles.balance}>
                            <Text style={styles.txtBalance}>
                                {visible ? data.balance : "Saldo"}
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.btnView} onPress={() => setVisible(!visible)}>
                            <Feather name={visible ? "eye-off" : "eye"} size={22} color={COLORS.primary}/>
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