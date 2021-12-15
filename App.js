import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {store, persistor} from './store/store.js'
import { Provider } from 'react-redux'
// Redux-Persist (LOCAL STORAGE)
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home.js';
import Albums from './components/Albums.js';
import Photos from './components/Photos.js';

const Stack = createNativeStackNavigator();

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
