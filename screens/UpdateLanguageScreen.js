import React, { useState } from 'react'
import {useNavigation} from "@react-navigation/core"
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import { RalewayBold, RalewaySemiBold } from '../components/fonts';

const UpdateLanguageScreen = () => {

    const navigation = useNavigation();
    const [lang, setLang] = useState("English");

    const submitHandler=()=>{
        console.log(`Language is ${lang}`)
        navigation.goBack()
    }

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={{fontSize:20, color:"white", fontFamily:RalewayBold}}>Select Language</Text>
            </View>
            <View style={styles.content}>
                <Text style={{fontSize:18, color:"gray", fontFamily:RalewaySemiBold}}>Select Language</Text>
                <TouchableOpacity activeOpacity={0.8} style={styles.box}
                onPress={()=>setLang("English")}
                >
                    <Text style={{fontSize:18, fontFamily:RalewayBold, color:"black"}}>English</Text>
                    <FontAwesomeIcon
                    name={(lang==="English") ? "dot-circle-o":"circle-o"}
                    size={24}
                    color={(lang==="English") ? "#fdb916":"gray"}
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.box}
                onPress={()=>setLang("Hindi")}
                >
                    <Text style={{fontSize:18, fontFamily:RalewayBold, color:"black"}}>हिंदी</Text>
                    <FontAwesomeIcon
                     name={(lang==="Hindi") ? "dot-circle-o":"circle-o"}
                    size={24}
                    color={(lang==="Hindi") ? "#fdb916":"gray"}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}
            onPress={submitHandler}
            >
                <Text style={{fontSize:20, color:"white", fontFamily:RalewaySemiBold}}>Update</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UpdateLanguageScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:"lightgray"
    },
    header:{
        backgroundColor:"#fdb916",
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
        backgroundColor:"#fdb916",
        alignItems:"center",
        padding:20,
        borderRadius:10,
        bottom:0,
        position:"absolute",
        width:"100%"
    }
})
