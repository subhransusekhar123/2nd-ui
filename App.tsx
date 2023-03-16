import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Component/Header'
import BalanceSection from './Component/BalanceSection'
import Buttons from './Component/Buttons'
import CardConainer from './Component/CardConainer'
import NavigationBar from './Component/NavigationBar'

export default function App() {
  return (
    <View style={styles.heightView}>
      <ScrollView >
        <Header />
        <BalanceSection />
        <CardConainer />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  heightView:{
    flex:1,
   backgroundColor:"#D56841"
  }
})