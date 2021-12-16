import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

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
            backgroundColor:"blue",
            borderWidth:1,
            borderColor:"black",
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
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => navigation.navigate("Albums") }>
                <Text style={styles.btnText} >
                    Albums
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => navigation.navigate("Photos") }>
                <Text style={styles.btnText} >
                    Photos
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;