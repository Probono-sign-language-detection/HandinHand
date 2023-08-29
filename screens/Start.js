import React, {Dimensions} from "react";
import {Text, Button, Image, TouchableOpacity, View, StyleSheet} from 'react-native';

function Start({navigation}) {
    return (
        <>
        <View style={styles.container}>
            <View>
                <View style={styles.case1}>
                    <Text style={styles.header}>소통에</Text>
                    <Text style={styles.header}>경계가 사라지다</Text>
                </View>
                <View style={styles.case2}>
                    <Image
                        source={require('../assets/logo.png')}
                        style={{width: 240, height: 245, marginBottom: 20}}
                    />
                    <Image
                        source={require('../assets/logotitle.png')}
                        style={{width: "63%", height: "9%" }}
                        resizeMode="stretch" 
                    />
                </View>
                <View style={styles.case3}>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.buttonText}> 로그인 </Text>    
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.buttonText}> 회원가입 </Text>    
                    </TouchableOpacity>
                </View>
            </View>

        </View>
        </>

    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 130,
        alignItems: 'center',        

    },
    case1: {
        flex: 0.9,
        width: 330
    },
    header: {
        fontSize: 35,
        color: "#7500B9"
    },
    case2: {
        flex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    case3: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonContainer:{
        width: 283,
        height: 55,
        backgroundColor: '#9046CF',
        borderRadius: 20,
        marginBottom: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...Platform.select({
            ios: {
              shadowColor: "#555555",
              shadowOffset: {
                width: 0,
                height: 5,
                blur: 6,
              },
              shadowOpacity: 0.5,
              shadowRadius: 5,
            },
            android: {
              elevation: 20,
            },
          }),        
        },
    buttonText:{
        fontSize: 25,
        color: '#fff'
    }
})

export default Start