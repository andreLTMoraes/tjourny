import React, { useEffect, useState } from 'react'
import { View, Image, Picker, Text, TouchableOpacity, FlatList, KeyboardAvoidingView, TextInput } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import Spinner from 'react-native-loading-spinner-overlay'

import { Shower } from '../../Components/Shower'
import { COLORS } from '../../constants'
import api from '../../services/api'
import styles from '../Create/styles'

export default function Levels() {
    const route = useRoute();
    const level = route.params.lastLevel
    const [prevLevelVisible, setprevLevelVisible] = useState(false)
    const [loading, setLoading] = useState(false)

    console.log(level);
    

    return(
        <KeyboardAvoidingView  style={styles.container}>
            <View style={styles.headerBox}>
                <Text style={styles.txtHeader}>Cadastrar novo nível</Text>
            </View>
            <Shower visible={prevLevelVisible}>
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
            </Shower>
            <View>
                <TextInput
                    placeholder="Número de contratos"
                    style={styles.input}
                    placeholderTextColor={COLORS.primary}
                />
                <TextInput
                    placeholder="Saldo mínimo"
                    style={styles.input}
                    placeholderTextColor={COLORS.primary}

                />
                <TextInput
                    placeholder="Meta"
                    style={styles.input}
                    placeholderTextColor={COLORS.primary}
                />
                <TextInput
                    placeholder="Operações por dia"
                    style={styles.input}
                    placeholderTextColor={COLORS.primary}
                />
                <TextInput
                    placeholder="Risco por operação"
                    style={styles.input}
                    placeholderTextColor={COLORS.primary}
                />
                <TextInput
                    placeholder="Loss diário"
                    style={styles.input}
                    placeholderTextColor={COLORS.primary}
                />
                <TextInput
                    placeholder="Dias restantes"
                    style={styles.input}
                    placeholderTextColor={COLORS.primary}
                />
            </View>
            <TouchableOpacity 
                style={styles.btnPrevLevel}
                onPress={() => setprevLevelVisible(!prevLevelVisible)}
            >
                <Text style={styles.txtButton}>Ver nível anterior</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.btnCreate}
            >
                <Text style={styles.txtButton}>Cadastrar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}