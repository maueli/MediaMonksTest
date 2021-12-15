import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

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

export default Photos;