import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";


export default function Header() {
    return (
        <View style={styles.headerMain}>

            <Text style={styles.headerText}>
                Wallet
            </Text>

            <View style={styles.headerRight}>
                <View style={styles.bellContainer}>
                <Icon name="notifications-outline" size={30} color="#000"/>
                </View>
                <View>
                <Image
                    source={{
                        uri: "https://th.bing.com/th/id/OIP.1pFUrmqjRCsMlgWFWYvf9AHaLG?pid=ImgDet&rs=1"
                    }}
                    style={styles.headerImage}
                />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerMain: {
        flexDirection:'row',
        justifyContent:"space-between",
        paddingHorizontal:8,
        borderColor:"green",
        alignItems:"center",
        paddingVertical:8
    },
    headerText: {
        fontSize:24,
        fontWeight:"bold"
    },
    headerRight: {
        borderColor:"red",
        display:"flex",
        flexDirection:"row",
        gap:10
    },
    headerImage: {
        width:60, 
        height:60,
        borderRadius: 60/2
    },
    bellContainer: {
        width:60, 
        height:60,
        borderRadius: 60/2,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:"#fff",
        backgroundColor:"#FFEBCF"
    },
    bellImage: {
        width:60, 
        height:60,
        borderRadius: 60/2,
        borderColor:"#ffffff",
        borderWidth:1
    }
})