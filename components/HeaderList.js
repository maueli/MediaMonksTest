import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const HeaderList = (props)=>{
    const navigation = useNavigation();
    const styles = {
        container:{
            backgroundColor:"green",
            width:"100%",
            height:50,
            flexDirection:"row"
        },
        btnContainer:{
            justifyContent:"center",
            alignItems:"center",
            flex:1
        },
        textContainer:{
            flex:5,
            justifyContent:"center",
            alignItems:"center"
        }
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={()=>navigation.goBack()} >
                <Text>
                    &#8592;
                </Text>
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text>
                    {props.title}
                </Text>
            </View>
        </View>
    )
};

export default HeaderList;