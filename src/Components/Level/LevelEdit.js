import React, { useRef } from 'react'
import { View, Text, TouchableOpacity, TextInput} from 'react-native'
import { Feather } from '@expo/vector-icons'

import { COLORS } from '../../constants'
import  styles from './styles'

export const LevelEdit = ({
    level = {},
    cancelAction = () => {},
    confirmAction = () => {}
}) => {
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
                    <Text style={styles.level}>{ level.level }</Text>
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
                            value = {level.lot}
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
                            value = {level.opPerDay}
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
                            value = {level.minimum}
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
                            value = {level.target}
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
                            value = {level.riscPt}
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
                            value = {level.riscMoney}
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
                            value = {level.lossDay}
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
                            value = {level.surviveDays}
                            onSubmitEditing = {() => {}}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}