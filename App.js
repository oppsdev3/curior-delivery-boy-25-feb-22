import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import LanguageScreen from './screens/LanguageScreen';
import SignUpScreen from './screens/SignUpScreen';
import RegisterScreen from './screens/RegisterScreen';
import VerificationScreen from './screens/VerificationScreen';
import DeliveriesScreen from './screens/DeliveriesScreen';
import Entypo from "react-native-vector-icons/Entypo"
import Fontisto from "react-native-vector-icons/Fontisto"
import ProfileScreen from './screens/ProfileScreen';
import WalletScreen from './screens/WalletScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ContactScreen from './screens/ContactScreen';
import TermsAndConditions from './screens/TermsAndConditions';
import ProfileDetailScreen from './screens/ProfileDetailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App(){

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        >
          <Stack.Screen name="Language" component={LanguageScreen}/>
          <Stack.Screen name="SignUp" component={SignUpScreen}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>
          <Stack.Screen name="Verification" component={VerificationScreen}/>
          <Stack.Screen name="Custom" component={CustomNavigator}/>
          <Stack.Screen name="Contact" component={ContactScreen}/>
          <Stack.Screen name="T&C" component={TermsAndConditions}/>
          <Stack.Screen name="ProfileDetails" component={ProfileDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

function CustomNavigator(){
  return(
    <Tab.Navigator
    screenOptions={{
      headerShown:false
    }}
    >
      <Tab.Screen name="New Deliveries" component={DeliveriesScreen}
      options={{
        tabBarShowLabel:false,
        tabBarIcon:({focused})=>(
          <Entypo
          name="home"
          size={28}
          color={focused ? "#fcb000": "black"}
          />
        )}
      }
      />
      <Tab.Screen name="Wallet" component={WalletScreen}
      options={{
        tabBarShowLabel:false,
        tabBarIcon:({focused})=>(
          <Entypo
          name="wallet"
          size={28}
          color={focused ? "#fcb000": "black"}
          />
        )}
      }
      />
      <Tab.Screen name="Profile" component={ProfileScreen}
      options={{
        tabBarShowLabel:false,
        tabBarIcon:({focused})=>(
          <Fontisto
          name="person"
          size={28}
          color={focused ? "#fcb000": "black"}
          />
        )}
      }
      />
    </Tab.Navigator>
  )
}


export default App;
