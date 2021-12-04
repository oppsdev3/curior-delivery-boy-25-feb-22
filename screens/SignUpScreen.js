import { useNavigation } from '@react-navigation/core';
import React, {useState} from 'react'
import { Dimensions, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";
import { RalewayBold, RalewaySemiBold } from '../components/fonts';

const {width, height} = Dimensions.get("window")

const SignUpScreen = () => {

    const navigation = useNavigation();
    const [num, setNum] = useState("");
    const [email, setEmail] = useState("");

    const submitHandler=()=>{
        navigation.navigate("Register", {"number": num, "email": email})
    }

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={{fontSize:40, color:"white", fontFamily:RalewayBold}}>Postman 365</Text>
            </View>
            <View style={styles.content}>
                <Text style={{fontSize:22, color:"gray", fontFamily:RalewaySemiBold, marginBottom:20}}>Sign In With Phone Number</Text>
                <View style={{width:"90%"}}>
                    <View style={{marginVertical:20}}>
                        <Text style={{fontFamily:RalewayBold, fontSize:22, color:"black", marginBottom:10}}>Email Address</Text>
                        <TextInput
                        placeholder="Enter Email Address"
                        placeholderTextColor="gray"
                        value={email}
                        onChangeText={(text)=>setEmail(text)}
                        keyboardType="email-address"
                        style={{borderBottomWidth:1, borderBottomColor:"gray", paddingBottom:10, fontSize:20, color:"black", fontFamily:RalewaySemiBold}}
                        />
                    </View>
                </View>
                <View style={{width:"90%"}}>
                    <View style={{marginVertical:20}}>
                        <Text style={{fontFamily:RalewayBold, fontSize:22, color:"black", marginBottom:10}}>Phone Number</Text>
                        <TextInput
                        placeholder="Enter Phone Number"
                        placeholderTextColor="gray"
                        value={num}
                        onChangeText={(text)=>setNum(text)}
                        keyboardType="number-pad"
                        style={{borderBottomWidth:1, borderBottomColor:"gray", paddingBottom:10, fontSize:20, color:"black", fontFamily:RalewaySemiBold}}
                        />
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={styles.button}
                    onPress={submitHandler}>
                        <Text style={{fontSize:20, color:"white", fontFamily:RalewaySemiBold}}>Confirm</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize:15, color:"gray", textAlign:"center", fontFamily:RalewaySemiBold}}>We'll Send an OTP for Verification!</Text>
                </View>
            </View>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:"#fdb916"
    },
    header:{
        marginVertical: 30,
        alignItems:"center"
    },
    content:{
        backgroundColor:"white",
        alignItems:"center",
        borderTopLeftRadius:20,
        flex:1,
        padding:10,
    },
    button:{
        backgroundColor:"#fdb916",
        alignItems:"center",
        padding:20,
        width:"100%",
        borderTopLeftRadius:20,
        borderBottomRightRadius:20,
        marginVertical:15
    }
})
