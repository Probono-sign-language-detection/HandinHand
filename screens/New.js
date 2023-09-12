import React, { useEffect, useState } from "react";
import {Text, Button, Image, TouchableOpacity, View, StyleSheet} from 'react-native';

function New({navigation}) {

    const myData = [
        {id: 1, kor: "한국어 수어", eng: "Korean Sign Language"}, 
        {id: 2, kor: "영어 수어", eng: "English Sign Language"}, 
        {id: 3, kor: "한국어", eng: "Korean"}, 
        {id: 4, kor: "영어", eng: "English"}, 
    ]

    const yourData = [
        {id: 1, kor: "한국어", eng: "Korean"}, 
        {id: 2, kor: "영어", eng: "English"}, 
    ]
    
    const [pick, setPick] = useState([])

    const [page, setPage] = useState("my")

    const onPress = (value) => {
        if(page === "my") {
            setPage("your")
            setPick((prevPick) => [...prevPick, value]);
        } else if (page === "your") {
            setPick((prevPick) => [...prevPick, value]);
            navigation.navigate("RealTimeImg", {pick})
        }
    }

    return (
        <View style={styles.container}>
            { page === "my" ? (
            <View style={styles.case1}>
                <Text style={styles.title}>{`나의 언어를\n선택해주세요`}</Text>
            </View>
            ) : (
            <View style={styles.case1}>
                <Text style={styles.title}>{`상대방의 언어를\n선택해주세요`}</Text>
            </View>
            )}
            { page === "my" ? (
            <View style={styles.case2}>
                {myData.map((item, i) => (
                    <TouchableOpacity
                        key={i}
                        style={styles.buttonContainer}
                        onPress={() => {
                            onPress(item.kor)
                        }}>
                        <Text style={styles.buttonTitle}>{item.kor}</Text> 
                        <Text style={styles.sub}>{item.eng}</Text>   
                    </TouchableOpacity>
                ))}
            </View>
            ) : (
            <View style={styles.case2}>
                {yourData.map((item, i) => (
                    <TouchableOpacity
                        key={i}
                        style={styles.buttonContainer}
                        onPress={() => {
                            onPress(item.kor)
                        }}>
                        <Text style={styles.buttonTitle}>{item.kor}</Text> 
                        <Text style={styles.sub}>{item.eng}</Text>   
                    </TouchableOpacity>
                ))}
            </View>
            )}
        </View>
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
        flex: 3.4,
        marginTop: 50
    },
    title: {
        fontSize: 35,
        textAlign: "center",
        lineHeight: 50,
        fontWeight: "bold"
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
        margin: 10,
        width: 270,
        height: 80,
        justifyContent: "center",
        alignItems: "center"
        },
})

export default New