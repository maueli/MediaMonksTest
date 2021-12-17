import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';


const LoadList = (props)=>{
    if(props.load){
        return(
            <View style={{justifyContent:"center", alignItems:"center", flex:1, height:"100%"}}>
                <ActivityIndicator size="large" color="red" />
            </View>
        )
    }
    else{
        return(
                <FlatList
                    style={{width:"100%"}}
                    data={props.list}
                    numColumns={3}
                    columnWrapperStyle={{flexWrap:"wrap"}}
                    renderItem={props.renderItem}
                    keyExtractor={(item)=>item.id} 
                    initialNumToRender={5}
                    windowSize={3}
                    maxToRenderPerBatch={10}/>
        )
    }
}

export default LoadList;