import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {store, persistor} from './store/store.js'
import { Provider } from 'react-redux'
// Redux-Persist (LOCAL STORAGE)
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


const Home =({navigation})=>{
    const styles = {
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate("Albums");
                }}>
                <Text>
                    Albums
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate("Photos");
                }}>
                <Text>
                    Photos
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const  Albums=()=>{
    const styles = {
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }
    }
    return(
        <View style={styles.container}>
            <Text>
                Albums
            </Text>
        </View>
    )
}
const Photos =()=>{
    const styles = {
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }
    }
    return(
        <View style={styles.container}>
            <Text>
                Photos
            </Text>
        </View>
    )
}
const App = ()=>{

    return( 
        <Provider store={store}>
            <PersistGate 
                persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen
                            name="Home" 
                            component={Home}
                            options={{headerShown:true}} />
                        <Stack.Screen
                            name="Albums" 
                            component={Albums}
                            options={{headerShown:true}} />
                        <Stack.Screen
                            name="Photos" 
                            component={Photos}
                            options={{headerShown:true}} />
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    )
}
export default App;
