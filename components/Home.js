import React from 'react';
import {Text, TouchableOpacity, ImageBackground } from 'react-native';

const Home =({navigation})=>{
    const styles = {
        container:{
            flex:1,
            justifyContent:"space-evenly",
            alignItems:"center",
            flexDirection:"column"
        },
        btnContainer:{
            width:"70%",
            padding:20,
            backgroundColor:"rgba(0,0,0,0.6)",
            borderWidth:1,
            borderColor:"white",
            borderRadius:10,
            justifyContent:"center",
            alignItems:"center"
        },
        btnText:{
            color:"white",
            letterSpacing:1
        }
    }

    return(
        <ImageBackground
            source={require("../img/background.jpg")}
            style={styles.container}>
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => navigation.navigate("Lists", {listContent:"Albums"}) }>
                <Text style={styles.btnText} >
                    Album List
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => navigation.navigate("Lists", {listContent:"Photos"}) }>
                <Text style={styles.btnText} >
                    Photo List
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => navigation.navigate("PhotoList2", {listContent:"Photos"}) }>
                <Text style={styles.btnText} >
                    Photo List 2
                </Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default Home;