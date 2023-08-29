import React, { useCallback, useState, useEffect } from "react";
import {Text, Button, Image, TouchableOpacity, View, StyleSheet, TextInput, SectionList} from 'react-native';
import MainTabNavigator from "../routes/MainTabNavigator";

function Login({navigation}) {
    const [id, setID] = useState("");
    const [pw, setPW] = useState("");

    const [idmsg, setIDmsg] = useState("");
    const [pwmsg, setPWmsg] = useState("");

    const [IDValid, setIDValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [Allow, setAllow] = useState(false);

    // 로그인 버튼 활성화(가능/불가능 판단)
    useEffect(() => {
        if(IDValid && pwValid) {
            setAllow(true);
            return
        }
        setAllow(false);
        handleID()
        handlePW()
    }, [IDValid, pwValid, id, pw]) 

    // 아이디 유효성 검사
    const handleID = () => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (regex.test(id)) {
            setIDValid(true);
            setIDmsg("");
        } else {
            setIDValid(false);
            setIDmsg("영문, 숫자의 구성으로 8자 이상 입력해주세요.")
        }
    }

    // 비밀번호 유효성 검사
    const handlePW = () => {
        const regex =
            /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if (regex.test(pw)) {
            setPwValid(true);
            setPWmsg("")
        } else {
            setPwValid(false);
            setPWmsg("영문, 숫자, 특수기호의 조합으로 8자리 이상 입력해주세요.")
        }
    }

    // 로그인 버튼 클릭 시
    const Login = async() => {
        try {
        // const csrfToken = window.csrfToken;

        // const res = await axios.post(
        //     '#', 
        //     {
        //         username: id,
        //         password: pw,
        //         'X-CSRFToken': csrfToken
        //     },
        // );
        navigation.navigate('TabRouter');
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
        <View style={styles.container}>
            <View style={styles.case1}>
                <Image
                    source={require('../assets/logotitle.png')}
                    style={{width: "62%", height: "30%"}}
                    resizeMode="stretch" 
                />
            </View>
            <View style={styles.case2}>
                <Text style={styles.label}>아이디</Text>
                <View style={{
                            display: "flex", flexDirection: "row", 
                            justifyContent: "center", alignItems: "center",
                            marginBottom: 10, }}>
                    <TextInput                
                        style={styles.input}
                        onChangeText={setID}
                        // onChange={handleID}
                        value={id}
                    />
                </View>
                { !IDValid && id.length > 0 && (
                    <Text style={{
                        width: "83%", marginBottom: 10, fontSize: 15, color: "#ABABAB", }}
                    >{idmsg}</Text>
                ) }

                <Text style={styles.label}>비밀번호</Text>
                <View style={{
                            display: "flex", flexDirection: "row", 
                            justifyContent: "center", alignItems: "center",
                            marginBottom: 10,}}>
                    <TextInput                
                        style={styles.input}
                        onChangeText={setPW}
                        secureTextEntry={true}
                        value={pw}
                    />
                </View>
                { !pwValid && pw.length > 0 && (
                    <Text style={{
                        width: "83%", marginBottom: 24, fontSize: 15, color: "#ABABAB"}}
                    >{pwmsg}</Text>
                ) }
                <View style={{display: "flex", flexDirection: "row"}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={{marginRight: 5, color: "#9046CF"}}> 아이디 찾기 </Text>    
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={{color: "#9046CF"}}> 비밀번호 찾기 </Text>    
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.case3}>
                <TouchableOpacity   
                    style={styles.buttonContainer}
                    onPress={Login}
                    disabled={!Allow}>
                    <Text style={styles.buttonText}> 로그인 </Text>    
                </TouchableOpacity>
            </View>
            <View style={styles.case4}>
                <Text style={{fontSize: 15}}>계정이 없으신가요?</Text>
                <TouchableOpacity   
                    onPress={() => navigation.navigate('Signup')}>
                    <Text style={{fontSize: 15, color: "#9046CF"}}> 회원가입 </Text>    
                </TouchableOpacity>
            </View>
        </View>
        </>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 130
    },
    case1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    case2: {
        flex: 2.5,
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        width: "83%",
        marginBottom: 10,
        fontSize: 18
    },
    input: {
        width: "83%",
        height: 50,
        borderWidth: 1,
        padding: 10,
        borderColor: "#9046CF",
        borderRadius: 8
    },
    confirmbuttonbox: {
        backgroundColor: "#9046CF",
        borderRadius: 8,
        width: "16%",
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    case3: {
        flex: 2,
        alignItems: "center",
    },
    case4: {
        flex: 0.4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingBottom: 40
    },
    buttonContainer:{
        width: 150,
        height: 55,
        backgroundColor: '#9046CF',
        borderRadius: 20,
        marginTop: 20,
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

export default Login