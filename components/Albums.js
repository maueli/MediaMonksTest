import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const  Albums=()=>{
    const styles = {
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    },[]);

    return(
        <View style={styles.container}>
            <Text>
                Albums
            </Text>
        </View>
    )
}

export default Albums;