import React from 'react'
import {useNavigation} from '@react-navigation/native'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './styles'

export default function Login (){

    const navigation = useNavigation();

    function navigateToFeed() {
        navigation.navigate('Feed');
    }

    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text style={styles.logotext}>R</Text>
            </View>

            <View style={styles.description}>
                <Text style={styles.descriptionText}>
                    Para ter acesso a todas as funcionalidades, recomendamos que conecte seu Strava!
                </Text>
            </View>
                <TouchableOpacity 
                        style={styles.buttonMain}
                        onPress={navigateToFeed}>
                    
                    <Text style={styles.buttonStrava}>Conectar Strava</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonSecond}
                    onPress={navigateToFeed}>
                    <Text style={styles.buttonOthers}>Outras opções de login</Text>    
                </TouchableOpacity>
           



        </View>
    )
}