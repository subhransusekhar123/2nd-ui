import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";

export default function NavigationBar() {
    return (
        <View style={styles.navigationBar}>
            <View style={styles.navigationView}>
                <Icon name="mail-open" size={30} color="#000" />
                <Text style={styles.navText}>Home</Text>
            </View>
            <View style={styles.navigationView}>
                <Icon name="wallet-outline" size={30} color="#000" />
                <Text style={styles.navText}>Wallet</Text>
            </View>      
            <View style={styles.navigationView}>
                <FeatherIcon name="pie-chart" size={30} color="#000" />
                <Text style={styles.navText}>Chart</Text>
            </View>      
            <View style={styles.navigationView}>
                <Icon name="settings-outline" size={30} color="#000" />
                <Text style={styles.navText}>Setting</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navigationBar: {
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:16,
        marginVertical:6

    },
    navText:{
        fontWeight:"500",
        color:"#000"
    },
    navigationView:{
        justifyContent:"center",
        alignItems:"center",
        gap:5
    }
})