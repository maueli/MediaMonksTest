import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

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

export default Home;