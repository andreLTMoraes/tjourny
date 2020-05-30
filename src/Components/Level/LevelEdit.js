import React, { useRef, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput} from 'react-native'
import { Feather } from '@expo/vector-icons'

import { COLORS } from '../../constants'
import  styles from './styles'

export const LevelEdit = ({
    level = {},
    cancelAction = () => {},
    confirmAction = () => {}
}) => {
    const [levelObj, setLevelObj] = useState(level)

    const lotRef = useRef()
    const opPerDayRef = useRef()
    const minimumRef = useRef()
    const targetRef = useRef()
    const riscPtRef = useRef()
    const riscMoneyRef = useRef()
    const lossDayRef = useRef()
    const surviveDaysRef = useRef()

    return(
        <View style={styles.levelCard}>
            <View style={styles.levelCardHeader}>
                <View style={styles.levelLabel}>
                    <Text style={[styles.label, {marginRight: 15}]}>Nível</Text>
                    <Text style={styles.level}>{ levelObj.level }</Text>
                </View>
                <View>
                    <View style={styles.levelBtnEditBox}>
                        <TouchableOpacity
                            style={styles.levelBtnEdit}
                            onPress={() => cancelAction()}>
                            <Feather name="x" size={22} color={COLORS.primary}/>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.levelBtnEdit}
                            onPress={() => confirmAction()}>
                            <Feather name="check" size={22} color={COLORS.primary}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.levelcardData}>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Lote</Text>
                        <TextInput style={styles.levelInput}
                            autoFocus = {true}
                            ref={lotRef}
                            returnKeyType = "next"
                            keyboardType = "numeric"
                            value = {levelObj.lot}
                            onChange={e => {
                                const val = e.target.val
                                setLevelObj(prevState => {
                                    return {...prevState, lot: val}
                                })
                            }}
                            onSubmitEditing={() => opPerDayRef.current.focus()}
                            blurOnSubmit = {false}
                        />
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Operações/Dia</Text>
                        <TextInput style={styles.levelInput}
                            ref={opPerDayRef}
                            returnKeyType = "next"
                            keyboardType = "numeric"
                            value = {levelObj.opPerDay}
                            onChange={e => {
                                const val = e.target.val
                                setLevelObj(prevState => {
                                    return {...prevState, opPerDay: val}
                                })
                            }}
                            onSubmitEditing={() => minimumRef.current.focus()}
                            blurOnSubmit = {false}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Mínimo(R$)</Text>
                        <TextInput style={styles.levelInput}
                            ref={minimumRef}
                            returnKeyType = "next"
                            keyboardType = "numeric"
                            value = {levelObj.minimum}
                            onChange={e => {
                                const val = e.target.val
                                setLevelObj(prevState => {
                                    return {...prevState, minimum: val}
                                })
                            }}
                            onSubmitEditing = {() => targetRef.current.focus()}
                            blurOnSubmit = {false}
                        />
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Meta(R$)</Text>
                        <TextInput style={styles.levelInput}
                            ref={targetRef}
                            returnKeyType = "next"
                            keyboardType = "numeric"
                            value = {levelObj.target}
                            onChange={e => {
                                const val = e.target.val
                                setLevelObj(prevState => {
                                    return {...prevState, target: val}
                                })
                            }}
                            onSubmitEditing = {() => riscPtRef.current.focus()}
                            blurOnSubmit = {false}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Loss(pt)</Text>
                        <TextInput style={styles.levelInput}
                            ref={riscPtRef}
                            returnKeyType = "next"
                            keyboardType = "numeric"
                            value = {levelObj.riscPt}
                            onChange={e => {
                                const val = e.target.val
                                setLevelObj(prevState => {
                                    return {...prevState, riscPt: val}
                                })
                            }}
                            onSubmitEditing = {() => riscMoneyRef.current.focus()}
                            blurOnSubmit = {false}
                        />
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Loss(R$)</Text>
                        <TextInput style={styles.levelInput}
                            ref={riscMoneyRef}
                            returnKeyType = "next"
                            keyboardType = "numeric"
                            value = {levelObj.riscMoney}
                            onChange={e => {
                                const val = e.target.val
                                setLevelObj(prevState => {
                                    return {...prevState, riscMoney: val}
                                })
                            }}
                            onSubmitEditing = {() => lossDayRef.current.focus()}
                            blurOnSubmit = {false}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={[styles.label, {textAlign:"center"}]}>Loss diário(R$)</Text>
                        <TextInput style={styles.levelInput}
                            ref={lossDayRef}
                            returnKeyType = "next"
                            keyboardType = "numeric"
                            value = {levelObj.lossDay}
                            onChange={e => {
                                const val = e.target.val
                                setLevelObj(prevState => {
                                    return {...prevState, lossDay: val}
                                })
                            }}
                            onSubmitEditing = {() => surviveDaysRef.current.focus()}
                            blurOnSubmit = {false}
                        />
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Dias restantes</Text>
                        <TextInput style={styles.levelInput}
                            ref={surviveDaysRef}
                            returnKeyType = "done"
                            keyboardType = "numeric"
                            value = {levelObj.surviveDays}
                            onChange={e => {
                                const val = e.target.val
                                setLevelObj(prevState => {
                                    return {...prevState, surviveDays: val}
                                })
                            }}
                            onSubmitEditing = {() => {}}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}