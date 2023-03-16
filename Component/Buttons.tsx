import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Buttons() {
    return (
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.button, styles.buttonLeft]}>
                <Text style={styles.buttonText}>My Assets</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonRight]}>
                <Text style={[styles.buttonText,styles.buttonRightWhite]}>My Transactions</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection:"row",
    },
    buttonText:{
        fontWeight:"600",
        color:"#000"
    },
    button:{
        borderWidth:1,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:15,
    },
    buttonLeft:{
        borderWidth:0,
        borderRadius:16
    },
    buttonRight:{
        borderWidth:0,
        borderRadius:14,
        backgroundColor:"#D56841",

    },
    buttonRightWhite:{
        color:"#fff"
    }
})