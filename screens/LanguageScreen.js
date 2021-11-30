import React, { useState } from 'react'
import {useNavigation} from "@react-navigation/core"
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"

const LanguageScreen = () => {

    const navigation = useNavigation();
    const [lang, setLang] = useState("English");

    const submitHandler=()=>{
        console.log(`Language is ${lang}`)
        navigation.navigate("SignUp")

    }

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={{fontSize:20, color:"white", fontWeight:"bold"}}>Select Language</Text>
            </View>
            <View style={styles.content}>
                <Text style={{fontSize:18, color:"gray"}}>Select Language</Text>
                <TouchableOpacity activeOpacity={0.8} style={styles.box}
                onPress={()=>setLang("English")}
                >
                    <Text style={{fontSize:18, fontWeight:"bold", color:"black"}}>English</Text>
                    <FontAwesomeIcon
                    name={(lang==="English") ? "dot-circle-o":"circle-o"}
                    size={24}
                    color={(lang==="English") ? "#fcb000":"gray"}
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.box}
                onPress={()=>setLang("Hindi")}
                >
                    <Text style={{fontSize:18, fontWeight:"bold", color:"black"}}>हिंदी</Text>
                    <FontAwesomeIcon
                     name={(lang==="Hindi") ? "dot-circle-o":"circle-o"}
                    size={24}
                    color={(lang==="Hindi") ? "#fcb000":"gray"}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}
            onPress={submitHandler}
            >
                <Text style={{fontSize:20, color:"white", fontWeight:"bold"}}>Confirm</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LanguageScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:"lightgray"
    },
    header:{
        backgroundColor:"#fcb000",
        alignItems:"center",
        padding:20
    },
    content:{
        backgroundColor:"lightgray",
        padding:10
    },
    box:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:20,
        backgroundColor:"white",
        borderRadius:10,
        marginVertical:10
    },
    button:{
        backgroundColor:"#fcb000",
        alignItems:"center",
        padding:20,
        borderRadius:10,
        bottom:0,
        position:"absolute",
        width:"100%"
    }
})
