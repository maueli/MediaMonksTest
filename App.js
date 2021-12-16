import React from 'react';
import { View, ActivityIndicator} from 'react-native';
import {store, persistor} from './store/store.js'
import { Provider } from 'react-redux'
// Redux-Persist (LOCAL STORAGE)
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home.js';
//import Albums from './components/Albums.js';
//import Photos from './components/Photos.js';
import Lists from './components/Lists.js';
import PhotoList from './components/photoList2/PhotoList.js';

const Stack = createNativeStackNavigator();

const Loading = ()=>{
    return(
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <ActivityIndicator size="large" color="red" />
        </View>
    )
}

const App = ()=>{

    return( 
        <Provider store={store}>
            <PersistGate 
                persistor={persistor}
                loading={ <Loading/> }>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen
                            name="Home" 
                            component={Home}
                            options={{headerShown:false}} />
                        <Stack.Screen
                            name="Lists" 
                            component={Lists}
                            options={{headerShown:false}} />
                        <Stack.Screen
                            name="PhotoList2" 
                            component={PhotoList}
                            options={{headerShown:false}} />
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    )
}
export default App;

/*
<Stack.Screen
name="Albums" 
component={Albums}
options={{headerShown:true}} />
<Stack.Screen
name="Photos" 
component={Photos}
options={{headerShown:true}} />*/
