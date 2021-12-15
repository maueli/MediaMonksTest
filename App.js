import React from 'react';
import { View, Text } from 'react-native';


const App = ()=>{
    const styles = {
        contaner:{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }
    }
    return(
        <View style={styles.contaner}>
            <Text>
                Starting...
            </Text>
        </View>
    )
}
export default App;
