import React from 'react'
import { StyleSheet,View, Text, TouchableOpacity, TextInput} from 'react-native'
import { useSelector } from 'react-redux'
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/core';


const ContactScreen = () => {

    const navigation = useNavigation();
    const user = useSelector((state)=>state.user.user); 

    const submitHandler=()=>{

    }

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
                    <AntDesign
                    name="arrowleft"
                    size={24}
                    color="white"
                    />
                </TouchableOpacity>
                <Text style={{fontWeight:"bold", fontSize:24, color:"white", marginTop:10}}>Contact Us</Text>
            </View>
            <View style={styles.content}>
                <Text style={{fontSize:20, fontWeight:"bold", color:"black", marginBottom:20}}>Let us know your feedback, queries or issue regarding app or features.</Text>
                <View style={{}}>
                    <View style={{borderBottomColor:"gray", borderBottomWidth:1, width:"100%"}}>
                        <Text style={{fontSize:20, fontWeight:"bold", color:"black"}}>Full Name</Text>
                        <Text
                        style={{fontSize:20, color:"gray", paddingVertical:10}}
                        >{user.name}</Text>
                    </View>
                    <View style={{borderBottomColor:"gray", borderBottomWidth:1, width:"100%", marginVertical:20}}>
                        <Text style={{fontSize:20, fontWeight:"bold", color:"black"}}>Phone Number</Text>
                        <Text
                        style={{fontSize:20, color:"gray", paddingVertical:10}}
                        >{user.number}</Text>
                    </View>
                    <View style={{borderBottomColor:"gray", borderBottomWidth:1, width:"100%", marginVertical:10}}>
                        <Text style={{fontSize:20, fontWeight:"bold", color:"black"}}>Your Message</Text>
                        <TextInput
                        placeholderTextColor="gray"
                        placeholder="Enter your message"
                        keyboardType="default"
                        style={{fontSize:20, color:"black"}}
                        />
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.button}
                onPress={submitHandler}>
                    <Text style={{fontSize:20, color:"white", fontWeight:"bold"}}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ContactScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#fcb000",
        flex:1
    },
    header:{
        padding:20
    },
    content:{
        backgroundColor:"white",
        borderTopLeftRadius:20,
        flex:1,
        padding:20,
        paddingHorizontal:30
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
        bottom:0,
        alignSelf:"center"
    },
})
