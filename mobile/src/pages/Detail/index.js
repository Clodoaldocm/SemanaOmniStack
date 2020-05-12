import React from  'react';
import { View, FlatList, Image, Text, TouchableOpacity, Linking}  from 'react-native';
import { Feather} from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';
import logoImg from '../../assets/logo.png';



export default function Detail(){
   const navigation = useNavigation();
   const message = "Olá APAD, estou entrando em contato para pegar o caso da cadelinha";

   function navigateBack(){
       navigation.goBack();
   }

   function sendMail(){
        MailComposer.composeAsync({
            subject: 'heroi do caso: cadelinha',
            recipients: ['clodoaldo.cm@gmail.com'],
            body: message,
        })
   }
   function sendWhatsApp(){
       Linking.openURL(`whatsapp://send?phone=554891261512?text=${message}`);

   }

    return(
     <View style={styles.container} >

        <View style={styles.header}>
            <Image source={logoImg}/>
            <TouchableOpacity style={styles.datailsButton}
                    onPress={navigateBack} >
                    <Feather name="arrow-left" size={28} color={"#E02043"}/>
            </TouchableOpacity>
        </View>
            <View style={styles.incident}>
                <Text style={[styles.incidentProperty,{ marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD:</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>Cadelinha Atropelada:</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
                
                <View style={styles.contactBox}>
                    <Text style={styles.heroTitle}>Salve o dia!</Text>
                    <Text style={styles.heroTitle}>Seja o heroi de caso.</Text> 

                    <Text style={styles.heroDescription}>Entre em contato</Text> 
                </View>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action}
                        onPress={sendWhatsApp}
                    >
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action}
                        onPress={sendMail}
                    >
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>    

    </View>
    );
}