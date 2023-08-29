import React from "react";
import {Text, Button, Image, TouchableOpacity, View, StyleSheet} from 'react-native';

function History({navigation}) {
    return (
        <>
        <View style={styles.container}>
            <Text>history</Text>
        </View>
        </>

    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb'
    },
    buttonContainer:{
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 10,
        margin: 20
        },
    buttonTest:{
        fontSize: 20,
        color: '#fff'
    }
})

export default History