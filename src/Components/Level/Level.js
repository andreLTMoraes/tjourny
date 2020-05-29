import React from 'react'
import { View, Text, TouchableOpacity, Input, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { COLORS } from '../../constants'
import  styles from './styles'

export const Level = ({
    level = {},
    editing = false,
    editAction = () => {},
    deleteAction = () => {},
}) => {
    return(
        <View style={styles.levelCard}>
            <View style={styles.levelCardHeader}>
                <View style={styles.levelLabel}>
                    <Text style={[styles.label, {marginRight: 15}]}>Nível</Text>
                    <Text style={styles.level}>{ level.level }</Text>
                </View>
                <View>
                    {editing &&
                        <View style={styles.levelBtnEditBox}>
                            <TouchableOpacity 
                                style={styles.levelBtnEdit}
                                onPress={() => editAction()}>
                                <Feather name="edit-3" size={22} color={COLORS.primary}/>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.levelBtnEdit}
                                onPress={() => deleteAction()}>
                                <Feather name="trash-2" size={22} color={COLORS.primary}/>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
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
                        <Text style={styles.txtData}>R$ { level.riscMoney },00</Text>
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
    )
}