import React from "react";
import {Text, Button, Image, TouchableOpacity, View, StyleSheet} from 'react-native';

function History({navigation}) {
    return (
        <>
        <View style={styles.container}>
            <View style={styles.case1}>
                <Text style={styles.header}>대화 기록</Text>
            </View>
            <View style={styles.case2}>
                <View style={styles.box}>
                    <Text style={styles.msg}>아직 대화 기록이 없습니다!</Text>
                </View>
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
    header: {
        fontSize: 35,
        fontWeight: "bold",
        marginLeft: 30
    },
    case1: {
        width: "90%",
        flex: 1,
        justifyContent: "center",
    },
    case2: {
        flex: 5,
    },
    msg: {
        fontSize: 15,
        color: "#979797",
    },
    box: {
        width: 290,
        height: 120,
        borderColor: "#DADADA",
        borderWidth: "1",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    }

})

export default History