import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox= (props) => {
    return(
        <View style={[styles.boxes,{ backgroundColor:(props.bg)}]}>
          <Text style={{ color:'white'}}>{(props.colorName)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    boxes:{
        padding:10,
        marginTop: 5,
        alignItems:'center'
    },
})

export default ColorBox;