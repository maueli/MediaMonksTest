import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const HeaderList = (props)=>{
    const navigation = useNavigation();
    const styles = {
        container:{
            backgroundColor:"black",
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
            flex:8,
            justifyContent:"center",
            alignItems:"center"
        },
        text:{
            color:"white",
            fontWeight:"bold",
            fontSize:15,
            letterSpacing:2
        }
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={()=>navigation.goBack()} >
                <Text style={styles.text}>
                    &#8592;
                </Text>
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {props.title}
                </Text>
            </View>
        </View>
    )
};

export default HeaderList;