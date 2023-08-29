import React, { useCallback, useState, useEffect } from "react";
import {Text, Button, Image, TouchableOpacity, View, StyleSheet, TextInput, SectionList, TouchableWithoutFeedback, Keyboard} from 'react-native';
import axios from "axios";

function Signup({navigation}) {
    const [user, setUser] = useState("");
    const [id, setID] = useState("");
    const [pw, setPW] = useState("");
    const [confirmPW, setConfirmPW] = useState("");

    const [usermsg, setUsermsg] = useState("");
    const [idmsg, setIDmsg] = useState("");
    const [pwmsg, setPWmsg] = useState("");
    const [confirmPWmsg, setConfirmPWmsg] = useState("");

    const [userValid, setUserValid] = useState(false);
    const [IDValid, setIDValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [ConfirmPWValid, setConfirmPWValid] = useState(false);
    const [Allow, setAllow] = useState(false);

    // 로그인 버튼 활성화(가능/불가능 판단)
    useEffect(() => {
        handleUser()
        handleID()
        handlePW()
        handleConfirmPW()
        if(userValid && IDValid && pwValid && ConfirmPWValid) {
            setAllow(true);
            return
        }
        setAllow(false);
    }, [user, id, pw, confirmPW]) 

    // 유저 이름 유효성 검사
    const handleUser = () => {
        if (user.length > 2 && user.length < 20) {
            setUserValid(true);
            setUsermsg("");
        } else {
            setUserValid(false);
            setUsermsg("두 글자 이상 입력해주세요.")
        }
    }

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

    // 아이디 중복 검사
    const ConfirmID = async() => {
        alert(id)
        try {
            const csrfToken = window.csrfToken;
        console.log("try!")
        const res = await axios.post(
            '#', 
            {
                username: id,
                password: pw,
                'X-CSRFToken': csrfToken
            },
        );
        } catch (e) {
            console.error(e);
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

    // 비밀번호 유효성 검사
    const handleConfirmPW = () => {
        if (confirmPW == pw) {
            setConfirmPWValid(true);
            setConfirmPWmsg("")
        } else {
            setConfirmPWValid(false);
            setConfirmPWmsg("비밀번호가 일치하지 않습니다.")
        }
    }

    // 로그인 버튼 클릭 시
    const Signup = async() => {
        try {
        // const csrfToken = window.csrfToken;

        // const res = await axios.post(
        //     '#', 
        //     {
        //         username: user,
        //         id: id,
        //         password: pw,
        //         
        //         'X-CSRFToken': csrfToken
        //     },
        // );
        navigation.navigate('Home')
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <View style={styles.case1}>
                <Text style={styles.header}>회원가입</Text>
            </View>
            <View style={styles.case2}>
                {/* 이름 */}
                <Text style={styles.label}>이름*</Text>
                <View style={{
                            display: "flex", flexDirection: "row", 
                            justifyContent: "center", alignItems: "center",
                            marginBottom: 10,}}>
                    <TextInput                
                        style={styles.pwinput}
                        onChangeText={setUser}
                        value={user}
                    />
                </View>
                { !userValid && user.length > 0 && (
                    <Text style={{
                        width: "83%", marginBottom: 24, fontSize: 15, color: "#ABABAB"}}
                    >{usermsg}</Text>
                ) }

                {/* 아이디 */}
                <Text style={styles.label}>아이디*</Text>
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
                    <TouchableOpacity
                        style={styles.confirmbuttonbox}
                        onPress={ConfirmID}>
                        <Text style={{fontSize: 17, color: "#fff", marginBottom: 3}}>중복</Text>  
                        <Text style={{fontSize: 17, color: "#fff"}}>검사</Text>     
                    </TouchableOpacity>
                </View>
                { !IDValid && id.length > 0 && (
                    <Text style={{
                        width: "83%", marginBottom: 10, fontSize: 15, color: "#ABABAB", }}
                    >{idmsg}</Text>
                ) }
                
                {/* 비밀번호 */}
                <Text style={styles.label}>비밀번호*</Text>
                <View style={{
                            display: "flex", flexDirection: "row", 
                            justifyContent: "center", alignItems: "center",
                            marginBottom: 20,}}>
                    <TextInput                
                        style={styles.pwinput}
                        onChangeText={setPW}
                        // onChange={handlePW}
                        value={pw}
                        secureTextEntry={true}
                    />
                </View>
                { !pwValid && pw.length > 0 && (
                    <Text style={{
                        width: "83%", marginBottom: 24, fontSize: 15, color: "#ABABAB"}}
                    >{pwmsg}</Text>
                ) }

                {/* 비밀번호 확인 */}
                <Text style={styles.label}>비밀번호 확인*</Text>
                <View style={{
                            display: "flex", flexDirection: "row", 
                            justifyContent: "center", alignItems: "center",
                            marginBottom: 10,}}>
                    <TextInput                
                        style={styles.pwinput}
                        onChangeText={setConfirmPW}
                        value={confirmPW}
                        secureTextEntry={true}
                    />
                </View>
                { !ConfirmPWValid && confirmPW.length > 0 && (
                    <Text style={{
                        width: "83%", marginBottom: 24, fontSize: 15, color: "#ABABAB"}}
                    >{confirmPWmsg}</Text>
                ) }
            </View>
            <View style={styles.case3}>
                <TouchableOpacity   
                    style={styles.buttonContainer}
                    onPress={Signup}
                    disabled={!Allow}>
                    <Text style={styles.buttonText}> 회원가입 </Text>    
                </TouchableOpacity>
            </View>
        </View>
        </TouchableWithoutFeedback>
        </>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 90,
    },
    header: {
        fontSize: 35,
        fontWeight: "bold",
        marginLeft: 30
    },
    case1: {
        width: "90%",
        flex: 0.4,
        justifyContent: "center",
    },
    case2: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        width: "83%",
        marginBottom: 10,
        fontSize: 18
    },
    input: {
        width: "65%",
        height: 60,
        borderWidth: 1,
        padding: 10,
        marginRight: 10,
        borderColor: "#9046CF",
        borderRadius: 8,
        fontSize: 18
    },
    pwinput: {
        width: "83%",
        height: 60,
        borderWidth: 1,
        padding: 10,
        borderColor: "#9046CF",
        borderRadius: 8,
        fontSize: 18
    },
    confirmbuttonbox: {
        backgroundColor: "#9046CF",
        borderRadius: 8,
        width: "16%",
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    case3: {
        flex: 1,
        alignItems: "center",
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

export default Signup