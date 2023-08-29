import React from "react";
import {Text, Button, Image, TouchableOpacity, View, StyleSheet} from 'react-native';

function Home({navigation}) {
    return (
        <>
        <View style={styles.container}>
            <View>
                <Text 
                    style={styles.title}>hi</Text>
            </View>

        </View>
        </>

    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E4E4E4'
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

export default Home