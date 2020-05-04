import React, {useEffect, useState} from 'react'

import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native'
import {Feather} from '@expo/vector-icons' 

import styles from './styles'
import api from '../../services/api'


export default function Feed () {
    const [feed, setFeed] = useState([]);
    async function loadFeed(){
        const response = await api.get('/').then(response =>
        response.data.map(response => ({
          ...response,
          date: new Date(response.date * 1000).toLocaleTimeString("pt-br")
        }))
      )
  
      setFeed(response)
    }


    useEffect(() => {
        loadFeed()
    }, [])


    return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textHeader}>Riderize</Text>

            <TouchableOpacity onPress={() => {}} style={styles.notifications}>
            <Feather name="search" size={24} color="#8f5de8" style={styles.buttons}/>
            <Feather name="send" size={24} color="#8f5de8" style={styles.buttons}/>
            </TouchableOpacity>
            
        </View>
       

        <View style={styles.pages}>
            <Text style={styles.pagePrincipal}>Seguindo</Text>
            <Text style={styles.pageOthers}>Clubes</Text>
            <Text style={styles.pageOthers}>Marcas</Text>
        </View>

        <View style={styles.createPub}>
            <TouchableOpacity onPress={() => {} }
                              style={styles.buttonCreate}>
                <Text style={styles.buttonText}>Criar nova publicação <Feather name="plus-circle" size={20} color="#ffffff"/></Text>        
            </TouchableOpacity>
        </View>

        <FlatList 
            style={styles.feedPubs}
            data={feed}
            keyExtractor={feed => String(feed.id)}
            showsVerticalScrollIndicator={false}
            renderItem={ ({item: feed}) => (
                
            <View> 
                    
            <View style={styles.feedInfos}>
                <View style={styles.imgprof}>
                    <Image style={styles.boxImg} source={{uri: `${feed.image_profile}`}}/>
                </View>

                <View style={styles.name_date}>
                    <Text style={styles.profileName}>{feed.name}</Text>
                    <Text style={styles.datePub}>às {feed.date}</Text>
                </View>    

                    <Text style={styles.showMore}>...</Text>
            </View>

            <View style={styles.feedContent}>
                <Image style={styles.imgPost} source={{uri: `${feed.image_post}`}}/>
            </View>

            <View style={styles.feedOptions}>
                <Text><Feather name="heart" size={28} color="#8f5de8"/></Text>
                <Text><Feather name="message-square" size={28} color="#8f5de8"/></Text>
                <Text><Feather name="share-2" size={28} color="#8f5de8"/></Text>
            </View>
        </View>
                
            )}
        />

        <View style={styles.footer}>
            <Text style={styles.selectedOption}><Feather name="list" size={30} color="#8f5de8"/></Text>
            <Text style={styles.othersOption}><Feather name="user" size={30} color="#CACACA"/></Text>
            <View style={styles.bgButton}>
                <Text style={styles.buttonR}>R</Text>
            </View>
            <Text style={styles.othersOption}><Feather name="search" size={30} color="#CACACA"/></Text>
            <Text style={styles.othersOption}><Feather name="compass" size={30} color="#CACACA"/></Text>
        </View>

        
    </View>
    )}


    