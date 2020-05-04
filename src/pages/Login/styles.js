import {StyleSheet} from 'react-native'

export default StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 100,
    },
    logotext:{
        fontSize: 80,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#8f5de8',
    },

    descriptionText:{
        paddingHorizontal: 36,
        paddingVertical: 40,
        lineHeight: 20,
        fontSize: 15,
        color: '#c4c4c4',

    },

    buttonMain:{
        backgroundColor: '#FF6400',
        height: 60,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 200,
        marginHorizontal: 100,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,

    },
    
    buttonStrava:{
        color: "#ffffff",
        fontSize: 20,
        fontWeight: 'bold',
    },

    buttonSecond:{
        backgroundColor: '#ffffff',
        marginVertical: 30,
        paddingHorizontal: 10,
        height: 30,
        width: 170,
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    
    buttonOthers:{
        color: '#5F6368',
    }
});