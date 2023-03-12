import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from './Navbar'

export default function Receipt() {
    return (
        <View style={styles.main}>
            <View style={styles.Home}>
                <Image
                    source={require("../Assets/menu.png")}
                    style={styles.burgerImage}
                />
                <Text style={styles.headerText}>Receipts</Text>
            </View>
            <Navbar/>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        borderBottomWidth:2,
    },
    Home: {
        paddingHorizontal: 8
    },

    burgerImage: {
        height: 50,
        width: 50,
        Color: "green"
    },
    headerText: {
        fontSize: 24,
        fontWeight:"bold"
    }
})