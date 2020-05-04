import {StyleSheet} from 'react-native'

export default StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: '#E5E5E5',

    },

    header:{  
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 30,
        paddingVertical: 40,
    },

    textHeader:{
        color: "#8f5de8",
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },

    notifications:{
        flexDirection: 'row',
    },

    buttons:{
        paddingLeft: 15,
    },

    pages:{
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingHorizontal: 30,
        backgroundColor: '#FFFFFF',
    },
    
    pagePrincipal:{
        color: '#8f5de8',
        fontSize: 16,
        fontWeight: 'bold',
        borderBottomColor: '#8f5de8',
        borderBottomWidth: 2,
    },

    pageOthers:{
        color: '#8f5de8',
    },

    createPub:{
        alignItems: 'center',
        paddingVertical: 30,
        backgroundColor: '#ffffff',
    },

    buttonCreate:{
        backgroundColor: '#8f5de8',
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },

    buttonText:{
        color: '#FFFFFF',
        fontSize: 15,
    },

  

    feedInfos:{
        backgroundColor: '#ffffff',
        paddingVertical: 20,
        flexDirection: 'row',
        marginTop: 10
    },

    boxImg:{
        backgroundColor: '#C4C4C4',
        height: 60,
        width: 60,
        borderRadius: 400,
    },

    imgprof:{
        paddingLeft: 20,
    },

   name_date:{
        paddingHorizontal: 20,
        marginTop: 10,
   },

    profileName:{
        color: '#8f5de8',
        fontSize: 14,
        fontWeight: 'bold',
    
    },
    
    datePub:{
        color: '#8f5de8',
        fontSize: 11,
        

    },

    showMore:{
        color: '#C4C4C4',
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: 110,
    },

    feedContent:{
        backgroundColor: '#c4c4c4',
    },

    feedOptions:{
        backgroundColor: '#ffffff',
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    imgPost:{
        height: 350,
    },

    footer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#FFFFFF',
    },

    bgButton:{
        backgroundColor: '#8f5de8',
        height: 60,
        width: 60,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 200,
    },
    buttonR:{
        
        color: 'white',
        fontSize: 26,
        fontStyle: 'italic',
        fontWeight: 'bold'
        
    }
});