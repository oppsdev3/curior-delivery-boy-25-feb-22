import { useNavigation, useRoute } from '@react-navigation/core';
import React, {useState} from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, Modal, ScrollView } from 'react-native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { RalewayBold, RalewayLight, RalewayRegular, RalewaySemiBold } from '../components/fonts';


const {width, height} = Dimensions.get("window")

const MapScreen = () => {

    const route = useRoute();
    const navigation = useNavigation();
    const [isOpen, setIsOpen] = useState(false);

    const closeHandle=()=>{
        setIsOpen(false);
    }

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
                    <MaterialIcons
                    name="arrow-back-ios"
                    color="#fdb916"
                    size={24}
                    />
                </TouchableOpacity>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginVertical:20}}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Image
                        source={route.params.imgSrc}
                        style={{height:50, width:50, resizeMode:"contain"}}
                        />
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:18, fontFamily:RalewayBold, color:"black"}}>{route.params.title}</Text>
                            <Text style={{fontSize:16, fontFamily:RalewaySemiBold, color:"lightgray"}}>{route.params.type}</Text>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={{marginBottom:10,backgroundColor:"#fdb916", padding:10, borderRadius:5, alignItems:"center"}}>
                        <Text style={{fontSize:15, color:"white", fontFamily:RalewayRegular}}>{route.params.buttonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Image
            source={require("../assets/map.jpg")}
            style={{height:height, width:width,resizeMode:"stretch"}}
            />
            <View style={styles.view}>
                <View style={{marginBottom:10,backgroundColor:"white", padding:10, flexDirection:"row", justifyContent:"space-between", alignItems:"center", width:width-40, marginHorizontal:20, borderRadius:10}}>
                    <View style={{}}>
                        <Text style={{fontFamily:RalewayBold, fontSize:20, color:"black", marginBottom:5}}>Get Direction</Text>
                        <Text style={{fontSize:15, color:"gray", fontFamily:RalewaySemiBold}}>Open google map</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#fdb916", padding:10, borderRadius:20}}>
                        <AntDesign
                        name="caretup"
                        size={20}
                        color="white"
                        />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between",marginBottom:10,marginHorizontal:20, width:width-40,backgroundColor:"white", padding:10, borderRadius:10}}>
                    <View style={{flexDirection:"row",alignItems: "center"}}>
                        <Entypo
                        name="location-pin"
                        size={24}
                        color="#fdb916"
                        />
                        <View style={{marginLeft:10}}>
                            <Text style={{fontFamily:RalewayBold, fontSize:18, color:"black"}}>From: {route.params.from}</Text>
                            <Text style={{fontFamily:RalewayBold, fontSize:18, color:"black"}}>To: {route.params.to}</Text>
                        </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>setIsOpen(true)}>
                            <AntDesign
                            name="upcircle"
                            size={30}
                            color="#fdb916"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={{marginTop:5,backgroundColor:"white", borderColor:"#fdb916", borderWidth:1, padding:5, borderRadius:40}}>
                            <Ionicons
                            name="call"
                            size={20}
                            color="#fdb916"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal
                animationType={"slide"}
                onRequestClose={closeHandle}
                transparent={true}
                visible={isOpen}
                >
                    <View style={{alignItems:"center", marginHorizontal:20, width:"90%", flex:1, justifyContent:"flex-end"}}>
                        <View style={styles.modal}>
                            <View style={{flexDirection:"row", alignItems:"center", marginVertical:10, width:"100%", justifyContent:"center"}}>
                                <Text style={{fontSize:20, color:"black", fontFamily:RalewayBold}}>Courier Details</Text>
                                <TouchableOpacity activeOpacity={0.8} onPress={closeHandle}
                                style={{position:"absolute", right:0}}>
                                    <AntDesign
                                    name="downcircle"
                                    size={30}
                                    color="#fdb916"
                                    />
                                </TouchableOpacity>
                            </View>
                            <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                                <View style={{flexDirection:"row", alignItems: 'center',justifyContent:"space-between"}}>
                                    <View style={{flexDirection:"row", alignItems: 'center'}}>
                                        <Entypo
                                        name="location-pin"
                                        size={26}
                                        color="#fdb916"
                                        />
                                        <View>
                                            <Text style={{fontFamily:RalewayBold, fontSize:20, color:"black", marginLeft:10}}>{route.params.from}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity activeOpacity={0.8} style={{marginTop:5,backgroundColor:"white", borderColor:"#fdb916", borderWidth:1, padding:5, borderRadius:40}}>
                                        <Ionicons
                                        name="call"
                                        size={20}
                                        color="#fdb916"
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:"row", alignItems: 'center',justifyContent:"space-between", borderBottomColor:"gray", borderBottomWidth:1, paddingVertical:20}}>
                                    <View style={{flexDirection:"row", alignItems: 'center'}}>
                                        <AntDesign
                                        name="caretup"
                                        size={25}
                                        color="#fdb916"
                                        />
                                        <View>
                                            <Text style={{fontFamily:RalewayBold, fontSize:20, color:"black", marginLeft:10}}>{route.params.to}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity activeOpacity={0.8} style={{marginTop:5,backgroundColor:"white", borderColor:"#fdb916", borderWidth:1, padding:5, borderRadius:40}}>
                                        <Ionicons
                                        name="call"
                                        size={20}
                                        color="#fdb916"
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={{borderBottomColor:"gray", borderBottomWidth:1, paddingVertical:20}}>
                                    <View style={{flexDirection:"row", alignItems: 'center', justifyContent:"space-between"}}>
                                        <View>
                                            <View style={{marginBottom:20}}>
                                                <Text style={{fontSize:15, color:"gray", fontFamily:RalewaySemiBold}}>Courier Type</Text>
                                                <Text style={{fontSize:18, fontFamily:RalewayBold, color:"black", marginTop:10}}>Box Courier</Text>
                                            </View>
                                            <View>
                                                <Text style={{fontSize:15, color:"gray", fontFamily:RalewaySemiBold}}>Height Weight Length</Text>
                                                <Text style={{fontSize:18, fontFamily:RalewayBold, color:"black", marginTop:10}}>60 x 75 x 124 (cm)</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <View style={{marginBottom:20}}>
                                                <Text style={{fontSize:15, color:"gray", fontFamily:RalewaySemiBold}}>Frangible</Text>
                                                <Text style={{fontSize:18, fontFamily:RalewayBold, color:"black", marginTop:10}}>Yes</Text>
                                            </View>
                                            <View>
                                                <Text style={{fontSize:15, color:"gray", fontFamily:RalewaySemiBold}}>Weight</Text>
                                                <Text style={{fontSize:18, fontFamily:RalewayBold, color:"black", marginTop:10}}>10 kg</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{marginTop:20}}>
                                        <Text style={{fontSize:15, color:"gray", fontFamily:RalewaySemiBold}}>Courier Info</Text>
                                        <Text style={{fontSize:15, fontFamily:RalewaySemiBold, color:"black", marginTop:10}}>Birthday Gift containing flower Vaas. Carry carefully as it is frangible.</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:"row", alignItems: 'center', justifyContent:"space-between", marginVertical:20}}>
                                    <View style={{}}>
                                        <Text style={{fontSize:18, fontFamily:RalewayBold, color:"black", marginBottom:10}}>{route.params.type}</Text>
                                        <Text style={{fontSize:15, color:"gray", fontFamily:RalewaySemiBold}}>{route.params.modeOfPayment}</Text>
                                    </View>
                                    <Text style={{fontFamily:RalewayBold, fontSize:22, color:"black"}}>$ {route.params.price}</Text>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    screen:{
        flex:1
    },
    header:{
        backgroundColor:"white",
        padding:10
    },
    view:{
        position:"absolute",
        bottom:0
    },
    modal:{
        flex:1,
        width:"100%",
        backgroundColor:"white",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginHorizontal:20,
        maxHeight: 500,
        elevation:5,
        padding:20,
        alignItems:"center"
    },
    content:{
        width:"100%",
        marginVertical:20
    },
})
