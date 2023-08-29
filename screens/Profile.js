import React from "react";
import {Text, Button, Image, TouchableOpacity, View, StyleSheet} from 'react-native';

function Profile({navigation}) {
    return (
        <>
        <View style={styles.container}>
            <Image
                source={require('../assets/pori.png')}
                style={{width: 400, height: 400}}
            />
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Layout')}>
                <Text style={styles.buttonTest}> Go To Profile </Text>    
            </TouchableOpacity>

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

export default Profile