import React, { useEffect, useState } from 'react'
import { View, Image, Picker, Text, TouchableOpacity, FlatList, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import Spinner from 'react-native-loading-spinner-overlay'

import { HeaderButton } from '../../Components/HeaderButton'
import { Shower } from '../../Components/Shower'
import { COLORS } from '../../constants'
import api from '../../services/api'
import styles from '../Levels/styles'

export default function Levels() {
    const navigation = useNavigation()
    const [levels, setLevels] = useState([])
    const [loading, setLoading] = useState(false)
    const [btnHeaderIcon, setbtnHeaderIcon] = useState("edit-3")
    const [addBtnView, setAddBtnView] = useState(false)

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

    function addLevel(){
        if(addBtnView){
            setAddBtnView(false)
            setbtnHeaderIcon("edit-3")
        } else {
            setAddBtnView(true)
            setbtnHeaderIcon("x")
        }
    }

    useEffect(() => {
        getLevels()
    }, [])

    return(
        <View style={styles.containerForNavBar}>
            <View style={styles.navBar}>
                <TouchableOpacity 
                    style={[styles.levelBtnEdit, {backgroundColor: "none"}]}
                    onPress={() => {navigation.goBack()}}>
                    <Feather name="arrow-left" size={22} color={COLORS.secondary2}/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.levelBtnEdit,{backgroundColor: COLORS.secondary2}]}
                    onPress={() => addLevel()}>
                    <Feather name={btnHeaderIcon} size={22} color={COLORS.primary}/>
                </TouchableOpacity>
            </View>
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
                        <View>
                            <View style={styles.levelCard}>
                                <View>
                                    <View style={styles.levelCardHeader}>
                                        <View style={styles.levelLabel}>
                                            <Text style={[styles.label, {marginRight: 15}]}>Nível</Text>
                                            <Text style={styles.level}>{ level.level }</Text>
                                        </View>
                                        <Shower visible={addBtnView}>
                                            <View style={styles.levelBtnEditBox}>
                                                <TouchableOpacity 
                                                    style={styles.levelBtnEdit}
                                                    onPress={() => {}}>
                                                    <Feather name="edit-3" size={22} color={COLORS.primary}/>
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                    style={styles.levelBtnEdit}
                                                    onPress={() => {}}>
                                                    <Feather name="trash-2" size={22} color={COLORS.primary}/>
                                                </TouchableOpacity>
                                            </View>
                                        </Shower>
                                    </View>
                                    <View style={styles.levelcardData}>
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
                                                <Text style={styles.label}>Mínimo</Text>
                                                <Text style={styles.txtData}>R$ {level.minimum},00</Text>
                                            </View>
                                            <View style={styles.column}>
                                                <Text style={styles.label}>Meta</Text>
                                                <Text style={styles.txtData}>R$ { level.target },00</Text>
                                            </View>
                                        </View>
                                        <View style={styles.row}>
                                            <View style={styles.column}>
                                                <Text style={styles.label}>Loss(pt)</Text>
                                                <Text style={styles.txtData}>{ level.riscPt } pts</Text>
                                            </View>
                                            <View style={styles.column}>
                                                <Text style={styles.label}>Loss(R$)</Text>
                                                <Text style={styles.txtData}>R$ { level.lossDay },00</Text>
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
                            </View>
                            <Shower visible={addBtnView}>
                                <View style={styles.addBtnContainer}>
                                    <View style={styles.addLine}></View>
                                    <TouchableOpacity 
                                        style={styles.addBtn}
                                        onPress={() => {}}>
                                        <Feather name="plus" size={22} color={COLORS.primary}/>
                                    </TouchableOpacity>
                                </View>
                            </Shower>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}