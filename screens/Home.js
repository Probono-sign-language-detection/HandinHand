import React from "react";
import {Text, Button, Image, TouchableOpacity, View, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import History from "../components/History";

function Home({navigation}) {
    return (
        <>
        <View style={styles.container}>
            <View style={styles.case1}>
                <Text>hi</Text>
            </View>
            <View style={styles.case2}>
                <History />
            </View>
            <View style={styles.case3}>
                <Text 
                    style={styles.msg}>대화를 시작해보세요</Text>
                    <AntDesign name="arrowdown" size={24} color="#979797" />
            </View>
        </View>
        </>

    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#E4E4E4'
    },
    case1: {
        flex: 1,
    },
    case2: {
        flex: 5,
    },
    case3: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    msg: {
        fontSize: 20,
        color: "#979797",
        marginBottom: 10
    }
})

export default Home