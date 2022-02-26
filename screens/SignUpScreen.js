import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Dimensions, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch } from 'react-redux';
import { RalewayBold, RalewayLight, RalewaySemiBold } from '../components/fonts';
import { add_user } from '../redux/userAction';
import { useSelector } from 'react-redux';


const {width, height} = Dimensions.get("window")

const SignUpScreen = () => {

    const navigation = useNavigation();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const user = useSelector((state)=>state.user.user);
    const dispatch = useDispatch()

    useEffect(()=>{
        if(user.length!==0){
            navigation.navigate("Custom");
        }
        else{
            console.log("No user");
        }
    },[user])

    const submitHandler=()=>{
        axios.post("https://delivery-boy-api.herokuapp.com/user/login",
        {
            "email": email,
            "password": password
        }
        )
        .then((res)=>{
            dispatch(add_user({
                name: res.data.user.name,
                id: res.data.user._id,
                email: res.data.user.email,
                number: res.data.user.phoneNo,
                imageUrl: res.data.user.profileImg,
                aadhaar: res.data.user.adharImg,
                vehicleType:res.data.user.vehicleType,
                token: res.data.access_token
            }))
            navigation.navigate("Custom");
        })
        .catch(err=>console.log(err))
    }

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={{fontSize:40, color:"white", fontFamily:RalewayBold}}>Your Postman 24</Text>
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
                        <Text style={{fontFamily:RalewayBold, fontSize:22, color:"black", marginBottom:10}}>Password</Text>
                        <TextInput
                        placeholder="Enter a Password"
                        placeholderTextColor="gray"
                        value={password}
                        onChangeText={(text)=>setPassword(text)}
                        keyboardType="default"
                        secureTextEntry={true}
                        style={{borderBottomWidth:1, borderBottomColor:"gray", paddingBottom:10, fontSize:20, color:"black", fontFamily:RalewaySemiBold}}
                        />
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={styles.button}
                    onPress={submitHandler}>
                        <Text style={{fontSize:20, color:"white", fontFamily:RalewaySemiBold}}>Confirm</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize:15, color:"gray", textAlign:"center", fontFamily:RalewaySemiBold}}>We'll Send an OTP for Verification!</Text>
                    <View>
                        <Text style={{fontFamily:RalewaySemiBold, color:"gray", marginVertical:10, textAlign:"center", fontSize:15}}>Or</Text>
                        <Text style={{fontFamily:RalewaySemiBold, color:"gray", textAlign:"center", fontSize:15}}>Don't have an Account? Please click the button below</Text>
                        <TouchableOpacity activeOpacity={0.8} style={styles.button}
                        onPress={()=>navigation.navigate("Register")}
                        >
                            <Text style={{fontSize:20, color:"white", fontFamily:RalewaySemiBold}}>Register</Text>
                        </TouchableOpacity>
                    </View>
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