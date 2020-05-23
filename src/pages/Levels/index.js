import React, { useEffect, useState } from 'react'
import { View, Image, Picker, Text, TouchableOpacity, FlatList, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import Spinner from 'react-native-loading-spinner-overlay'

import { Level } from '../../Components/Level/Level'
import { Shower } from '../../Components/Shower'
import { COLORS } from '../../constants'
import api from '../../services/api'
import styles from '../Levels/styles'

export default function Levels() {
    const navigation = useNavigation()
    const [emptyLevel, setEmptyLevel] = useState({})
    const [addingLevel, setAddingLevel] = useState(false)
    const [levels, setLevels] = useState([])
    const [loading, setLoading] = useState(false)
    const [btnHeaderIcon, setbtnHeaderIcon] = useState("edit-3")
    const [editBtnView, setEditBtnView] = useState(false)

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

    function editLevels(){
        setEditBtnView(!editBtnView)
        editBtnView ? setbtnHeaderIcon("edit-3") : setbtnHeaderIcon("x")
    }

    function addLevel(index){
        var level = {
            level: index + 2,
            lossDay: 0,
            lot: 0,
            minimum: 0,
            opPerDay: 0,
            riscMoney: 0,
            riscPt: 0,
            surviveDays: 0,
            editing: true
        }

        var newLevels = levels
        var headLevels = newLevels.slice(0, index + 1)

        headLevels.push(level)
        
        var tailLevels = newLevels.slice(index + 1, newLevels.length)
                    .map(function(l){
                        l.level = l.level + 1
                        return l
                    });

        setLevels(headLevels.concat(tailLevels))
        
        setAddingLevel(true)
        setEditBtnView(false)
        setbtnHeaderIcon("edit-3")
        setEmptyLevel(level)
    }

    function addLevelCancel(index){
        var newLevels = levels
        
        var newLevel = 1

        newLevels.splice(index, 1)

        newLevels = newLevels.map(function(l){
            l.level = newLevel
            newLevel++
            return l
        })

        setLevels(newLevels)

        setAddingLevel(false)
    }

    function addLevelConfirm(index){

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
                    disabled={addingLevel}
                    style={[styles.levelBtnEdit,{backgroundColor: COLORS.secondary2}]}
                    onPress={() => editLevels()}>
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
                    renderItem={({ item: level , index}) => (
                            <View>
                                <Level 
                                    key = {index} 
                                    level = {level}
                                    editing = {editBtnView}
                                />
                                <Shower visible={editBtnView}>
                                    <View style={styles.addBtnContainer}>
                                        <View style={styles.addLine}></View>
                                        <TouchableOpacity 
                                            style={styles.addBtn}
                                            onPress={() => addLevel(index)}>
                                            <Feather name="plus" size={22} color={COLORS.primary}/>
                                        </TouchableOpacity>
                                    </View>
                                </Shower>
                            </View>
                        )
                    }
                />
            </View>
        </View>
    )
}