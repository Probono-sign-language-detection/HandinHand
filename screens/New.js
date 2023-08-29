import React, { useEffect, useState } from "react";
import {Text, Button, Image, TouchableOpacity, View, StyleSheet} from 'react-native';

function New({navigation}) {
    const top = [
        `나의 언어를\n선택해주세요`,
        `상대방의 언어를{"\n"}선택해주세요`
    ]

    const Btn = {
        kor: ["한국어 수어", "한국어"],
        korsub: ["Korean Sign Language", "Korean"],
        eng: ["영어 수어", "영어"],
        engsub: ["English Sign Language", "English"]
    }

    const [pick, setPick] = useState([])

    const [i, setI] = useState(0)
    const onPress = () => {
        setI((prev) => prev + 1)
        if(i==2) {
            setI(0)
            setPick([])
            navigation.navigate("RealTimeImg")
        }
    }
    // useEffect(() => {
    //     alert(i)
    // }, i)

    return (
        <>
        <View style={styles.container}>
            <View style={styles.case1}>
                <Text style={styles.title}>{top[0]}</Text>
            </View>
            <View style={styles.case2}>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => {
                        onPress()
                        setPick(pick => [...pick, Btn.eng[i]])
                    }}>
                    <Text style={styles.buttonTitle}>{Btn.kor[i]}</Text> 
                    <Text style={styles.sub}>{Btn.korsub[i]}</Text>   
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => {
                        onPress()
                        setPick(pick => [...pick, Btn.eng[i]])
                    }}>
                    <Text style={styles.buttonTitle}>{Btn.eng[i]}</Text> 
                    <Text style={styles.sub}>{Btn.engsub[i]}</Text>   
                </TouchableOpacity>
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
        backgroundColor: '#ebebeb'
    },
    case1: {
        flex: 2,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    case2: {
        flex: 3,
        marginTop: 50
    },
    title: {
        fontSize: 35,
        textAlign: "center",
    },
    buttonTitle:{
        fontSize: 25,
        color: '#fff',
        fontWeight: "bold",
        marginBottom: 5
    },
    sub: {
        fontSize: 15,
        color: "#B4B4B4",
        fontWeight: "200"
    }, 
    buttonContainer:{
        backgroundColor: '#9046CF',
        borderRadius: 20,
        padding: 20,
        margin: 20,
        width: 270,
        height: 80,
        justifyContent: "center",
        alignItems: "center"
        },
})

export default New