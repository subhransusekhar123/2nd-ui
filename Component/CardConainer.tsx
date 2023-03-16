import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Buttons from './Buttons'
import NavigationBar from './NavigationBar'

export default function CardConainer() {
    return (
        <View style={styles.mainCardContainer}>
            <Buttons />
            <View style={styles.cardsContainer}>
                <View style={styles.card}>
                    <View style={styles.cardImageContainer}>
                    <Image
                        source={{
                            uri: "https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/ZJZZK5B2ZNF25LYQHMUTBTOMLU.png"
                        }}
                        style={styles.cardImage}
                    />
                    </View>
                    <View style={styles.firstTextContainer}>
                        <Text style={styles.firstTextContainerHeading}>Ethereum</Text>
                        <Text style={styles.cardAboutText}>29.74% ($28,015)</Text>
                    </View>

                    <View style={styles.secondTextContainer}>
                        <Text style={styles.secondTextContainerHeading}>79.006 ETH</Text>
                        <Text style={styles.cardAboutText}>$100,000.00</Text>
                    </View>
                </View>

                <View style={styles.card}>
                <View style={styles.cardImageContainer}>
                    <Image
                        source={{
                            uri: "data:image/png;base64,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"
                        }}
                        style={styles.cardImage}
                    />
                    </View>
                    <View style={styles.firstTextContainer}>
                        <Text style={styles.firstTextContainerHeading}>Binance</Text>
                        <Text style={styles.cardAboutText}>15.36% ($28,015)</Text>
                    </View>

                    <View style={styles.secondTextContainer}>
                        <Text style={styles.secondTextContainerHeading}>107.006 BNB</Text>
                        <Text style={styles.cardAboutText}>$30,812.00</Text>
                    </View>
                </View>

                <View style={styles.card}>
                <View style={styles.cardImageContainer}>
                    <Image
                        source={{
                            uri: "https://static.crypto.com/token/icons/tether/color_icon.png"
                        }}
                        style={styles.cardImage}
                    />
                    </View>
                    <View style={styles.firstTextContainer}>
                        <Text style={styles.firstTextContainerHeading}>Tether USD</Text>
                        <Text style={styles.cardAboutText}>29.74% ($28,015)</Text>
                    </View>

                    <View style={styles.secondTextContainer}>
                        <Text style={styles.secondTextContainerHeading}>50.006 ETH</Text>
                        <Text style={styles.cardAboutText}>$100,000.00</Text>
                    </View>
                </View>
            </View>
            <NavigationBar/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainCardContainer: {
        marginHorizontal: 8,
        marginVertical:10,
        borderRadius: 16,
        gap:10,
        backgroundColor:"#fff"
    },
    cardsContainer: {
        paddingHorizontal:20,
        gap:20
    },
    card: {
        flexDirection: "row",
        height:80,
        gap: 20
    },
    cardImage: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
    },
    cardImageContainer:{
        justifyContent:"center",
        alignItems:"center"
    },
    cardText: {
        color:"#000000"
    },
    firstTextContainer: {

        flex: 2,
        justifyContent:"center"
    },
    secondTextContainer: {
        
        flex: 2,
        alignItems: "flex-end",
        justifyContent:"center"
    },
    firstTextContainerHeading: {
        color:"#000",
        fontSize: 16,
        fontWeight: "bold"
    },
    secondTextContainerHeading: {
        color:"#000",
        fontWeight:"600"
    },
    cardAboutText: {
        color:"#000",
        fontSize: 12,
        fontWeight: "500"
    },
})