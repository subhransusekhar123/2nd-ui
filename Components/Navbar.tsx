import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Navbar() {
    const buttonsList : string[] = ["Protein", "Cooked Veggies", "Row Veggies"];
    const [dark, setDark ] = useState(0);

    const pressHandler = (prop:any) => { 
        setDark(prop);
        }


  return (
    <View style={styles.navbar}>
        {
            buttonsList.map((item, index)=>(
                <TouchableOpacity style={[styles.navbarBox,dark == index ? styles.navItemStyle : styles.navItemSimple]} onPress={()=>pressHandler(index)} key={index}>
                    <Text style={[styles.navbarText, dark === index ? styles.textBold : styles.simpleText ]}>{item}</Text>
                </TouchableOpacity>
            ))
        }
    </View>
  )
}

const styles = StyleSheet.create({
    navbar:{
        height:60,
        flexDirection:"row",
        paddingHorizontal:8,
        justifyContent:"space-between",
        alignItems:"stretch",
    },
    navbarText:{
        fontSize:18,
        fontWeight:"400",
    },
    navbarBox:{
        justifyContent:"center",
        
    },

    navItemStyle:{
        borderBottomWidth:4,
        fontWeight:"bold"
    },

    navItemSimple:{
        
    },
    textBold:{
        fontWeight:"bold"
    },
    simpleText:{}
})