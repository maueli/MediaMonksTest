import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Item = ({item})=>{
    const styles = {
        container:{
            width:"100%",
            //height:50,
            flexDirection:"row"
        },
        img:{
            width:"100%",
            height:200
        }
    }

    return(
        <View style={styles.container}>
            <Image 
                source={{uri:item.url} } 
                style={styles.img} />
        </View>
    )
};

export default Item;