import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react'
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from 'react/cjs/react.development';
import {useDispatch} from "react-redux"
import { add_user } from '../redux/userAction';
import ImagePicker from 'react-native-image-crop-picker';
import { RalewayBold, RalewaySemiBold } from '../components/fonts';


const {width, height} = Dimensions.get("window")

const RegisterScreen = () => {

    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [aadhaar, setAadhaar] = useState("");
    const dispatch = useDispatch();
    const route = useRoute();
    const [image, setImage]=  useState("");

    // const photoHandler=()=>{
    //     ImagePicker.openPicker({
    //         width: 400,
    //         height: 400,
    //         cropping: true
    //       }).then(image => {
    //         setImage(image.path)
    //       });
    // }

    const aadhaarCardHandler=()=>{
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
          }).then(image => {
            setAadhaar(image.path)
          });
    }

    const cameraHandler=()=>{
        ImagePicker.openCamera({
            width: 400,
            height: 400,
            cropping: true,
          }).then(image => {
            setImage(image.path)
          });
    }


    const submitHandler=()=>{
        dispatch(add_user({
            name: name,
            email: route.params.email,
            number: route.params.number,
            imageUrl: image
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
                <Text style={{fontSize:20, color:"white", fontFamily:RalewayBold}}>Register</Text>
            </View>
            <View style={styles.content}>
                <View style={{marginTop:"-8%",width:"80%",flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                    {/* <TouchableOpacity activeOpacity={0.8}
                    onPress={photoHandler}
                    >
                        <FontAwesome
                        name="photo"
                        size={30}
                        color="#fcb000"
                        />
                    </TouchableOpacity> */}
                    <View>

                    </View>
                    {image ? 
                    <Image
                    source={{uri: image}}
                    style={{height:100, width:120, resizeMode:"contain", borderRadius:100}}
                    />
                    :
                    <Ionicons
                    name="person-circle"
                    size={100}
                    color="gray"
                    />
                    }
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={cameraHandler}
                    >
                        <Entypo
                        name="camera"
                        size={30}
                        color="#fdb916"
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{width:"90%"}}>
                    <View style={{alignItems:"flex-start"}}>
                        <View style={{borderBottomColor:"gray", borderBottomWidth:1, width:"100%"}}>
                            <Text style={{fontSize:20, fontFamily:RalewayBold, color:"black"}}>Full Name</Text>
                            <TextInput
                            placeholderTextColor="gray"
                            placeholder="Enter Full Name"
                            value={name}
                            onChangeText={(text)=>setName(text)}
                            keyboardType="default"
                            style={{fontSize:20, color:"black", fontFamily:RalewaySemiBold}}
                            />
                        </View>
                        <View style={{borderBottomColor:"gray", borderBottomWidth:1, width:"100%", marginVertical:20}}>
                            <Text style={{fontSize:20, fontFamily:RalewayBold, color:"black"}}>Email Address</Text>
                            <Text
                            style={{fontSize:20, color:"gray", paddingVertical:10, fontFamily:RalewaySemiBold}}
                            >{route.params.email}</Text>
                        </View>
                        <View style={{width:"100%", marginBottom:20}}>
                            <Text style={{fontSize:20, fontFamily:RalewayBold, color:"black", marginBottom:5}}>Aadhaar Card</Text>
                            {aadhaar ? <Image source={{uri:aadhaar}} style={{height:100, width:"100%", resizeMode:"contain", borderRadius:20}}/>
                            :<TouchableOpacity activeOpacity={0.8} onPress={aadhaarCardHandler} style={{backgroundColor:"white",elevation:5, borderRadius:10, padding:5, paddingHorizontal:10}}>
                                <Text style={{fontSize:16, color:"gray", paddingVertical:5, fontFamily:RalewaySemiBold}}>Choose Photo From Gallery</Text>
                            </TouchableOpacity>
                            }
                        </View>
                        <View style={{borderBottomColor:"gray", borderBottomWidth:1, width:"100%"}}>
                            <Text style={{fontSize:20, fontFamily:RalewayBold, color:"black"}}>Phone Number</Text>
                            <Text
                            style={{fontSize:20, color:"gray", paddingVertical:10, fontFamily:RalewaySemiBold}}
                            >{route.params.number}</Text>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity activeOpacity={0.8} style={styles.button}
                onPress={submitHandler}>
                    <Text style={{fontSize:20, color:"white", fontFamily:RalewaySemiBold}}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:"#fdb916"
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
        backgroundColor:"#fdb916",
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
