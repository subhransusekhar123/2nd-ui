import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Feather";



export default function BalanceSection() {
    return (
        <View style={styles.balanceMain}>
            <View>
                <Text style={styles.balanceHeader}>$23,868</Text>
                <Text style={styles.balanceParagraph}>Wallet id: 2765400000051 <Icon name='copy'/></Text>
            </View>
            <View style={styles.buttonGroup}>
                <View style={styles.button}>
                   <Icon name="arrow-down-left" size={40} color="#000"/>
                </View>
                <View style={styles.button}>
                <Icon name="arrow-up-right" size={40} color="#000"/>
                </View>
                <View style={styles.button}>
                <Icon name="refresh-ccw" size={40} color="#000"/>
                </View>
                <View style={styles.button}>
                <Icon name="plus" size={40} color="#000"/>
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    balanceMain: {

    },
    balanceHeader: {
        fontSize: 74,
        fontWeight: "400",
        textAlign: "center",
        color:"#FFEDC9"
    },
    balanceParagraph: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"

    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical:24
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#EFC56D"
    }
})