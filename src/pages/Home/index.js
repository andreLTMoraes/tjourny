import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from '../styles'

export default function Home() {
    return(
        <View style={styles.container}>
            <Text>Teste Página Home</Text>
        </View>
    )
}