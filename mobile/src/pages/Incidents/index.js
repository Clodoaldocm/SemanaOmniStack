import React, { useState, useEffect } from  'react';
import { View, FlatList, Image, Text, TouchableOpacity}  from 'react-native';
import { Feather} from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import api from '../../services/api';

import styles from './styles';

export default function Incidents(){
    const [incidents, setIncidents] = useState([]);
    const navigation = useNavigation();

    function navigateToDatail(){
        navigation.navigate('Detail');
    }
    async function loadIncidents(){
        const response = await api.get('incidents');
        setIncidents(response.data);
    }
    useEffect(() => {
        loadIncidents();
    }, []);

    return(
        <View style={styles.container} >

            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem-Vindo!</Text>
            <Text styke={styles.description}>Escolha um dos casoa abaixo e save uma vida</Text>
            <FlatList
            data={incidents}
            style={styles.incidentList}
            keyExtractor={incident => String(incident.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: incident}) =>(
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>{incident.name}:</Text>

                    <Text style={styles.incidentProperty}>Caso:</Text>
                    <Text style={styles.incidentValue}>{incident.title}:</Text>

                    <Text style={styles.incidentProperty}>Valor:</Text>
                    <Text style={styles.incidentValue}>{incident.value}</Text>
                    <TouchableOpacity style={styles.datailsButton}
                        onPress={navigateToDatail}
                    >
                        <Text style={styles.datailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color={"#E02043"}/>
                    </TouchableOpacity>

                </View>

            )}   
            />       
        </View>

    );
}
