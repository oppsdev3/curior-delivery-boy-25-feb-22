import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react'
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from 'react/cjs/react.development';
import {useDispatch} from "react-redux"
import { add_user } from '../redux/userAction';

const {width, height} = Dimensions.get("window")

const RegisterScreen = () => {

    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [aadhaar, setAadhaar] = useState("");
    const dispatch = useDispatch();
    const route = useRoute();


    const submitHandler=()=>{
        dispatch(add_user({
            name: name,
            email: route.params.email,
            number: route.params.number
        }))
        navigation.navigate("Verification", {"number": route.params.number})
        
    }

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
                <AntDesign
                name="arrowleft"
                size={24}
                color="white"
                style={{alignSelf:"flex-start"}}
                />
                </TouchableOpacity>
                <Text style={{fontSize:20, color:"white", fontWeight:"bold"}}>Register</Text>
            </View>
            <View style={styles.content}>
                <View style={{marginTop:"-10%",width:"80%",flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <FontAwesome
                        name="photo"
                        size={30}
                        color="#fcb000"
                        />
                    </TouchableOpacity>
                    <Ionicons
                    name="person-circle"
                    size={100}
                    color="gray"
                    />
                    <TouchableOpacity activeOpacity={0.8}
                    >
                        <Entypo
                        name="camera"
                        size={30}
                        color="#fcb000"
                        />
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:"flex-start", width:"90%"}}>
                    <View style={{borderBottomColor:"gray", borderBottomWidth:1, width:"100%"}}>
                        <Text style={{fontSize:20, fontWeight:"bold", color:"black"}}>Full Name</Text>
                        <TextInput
                        placeholderTextColor="gray"
                        placeholder="Enter Full Name"
                        value={name}
                        onChangeText={(text)=>setName(text)}
                        keyboardType="default"
                        style={{fontSize:20, color:"black"}}
                        />
                    </View>
                    <View style={{borderBottomColor:"gray", borderBottomWidth:1, width:"100%", marginVertical:20}}>
                        <Text style={{fontSize:20, fontWeight:"bold", color:"black"}}>Email Address</Text>
                        <Text
                        style={{fontSize:20, color:"gray", paddingVertical:10}}
                        >{route.params.email}</Text>
                    </View>
                    <View style={{borderBottomColor:"gray", borderBottomWidth:1, width:"100%", marginBottom:20}}>
                        <Text style={{fontSize:20, fontWeight:"bold", color:"black"}}>Aadhaar Card</Text>
                        <TextInput
                        placeholderTextColor="gray"
                        placeholder="Enter Aadhar Card Number"
                        value={aadhaar}
                        onChangeText={(text)=>setAadhaar(text)}
                        keyboardType="default"
                        style={{fontSize:20, color:"black"}}
                        />
                    </View>
                    <View style={{borderBottomColor:"gray", borderBottomWidth:1, width:"100%"}}>
                        <Text style={{fontSize:20, fontWeight:"bold", color:"black"}}>Phone Number</Text>
                        <Text
                        style={{fontSize:20, color:"gray", paddingVertical:10}}
                        >{route.params.number}</Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.button}
                onPress={submitHandler}>
                    <Text style={{fontSize:20, color:"white", fontWeight:"bold"}}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:"#fcb000"
    },
    header:{
        marginVertical: 30,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:30,
        width:"100%"
    },
    content:{
        backgroundColor:"white",
        alignItems:"center",
        borderTopLeftRadius:20,
        flex:1,
        padding:10,
        width:"100%"
    },
    button:{
        backgroundColor:"#fcb000",
        alignItems:"center",
        padding:20,
        width:"100%",
        borderTopLeftRadius:20,
        borderBottomRightRadius:20,
        marginVertical:15,
        position:"absolute",
        bottom:0
    },

})
