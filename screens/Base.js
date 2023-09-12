import React, {useState, useEffect, useRef} from 'react';
  import { StyleSheet, Text, View, Button, Image } from 'react-native';
  import { Camera } from 'expo-camera';
  import axios from 'axios';
  import base64 from 'react-native-base64'
  import * as FileSystem from 'expo-file-system';
  import ImageResizer from 'react-native-image-resizer';



  export default function Base() {
    //마이크 허가 요청
    const [hasAudioPermission, setHasAudioPermission] = useState(null);
    //카메라 허가 요청
    const [hasCameraPermission, setHasCameraPersmission] = useState(null);
    const [camera, setCamera] = useState(null);
    // const [record, setRecord] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    const [isRecording, setIsRecording] = useState(false);
    const timerRef = useRef(null);

    const [firstCapturedFrameUri, setFirstCapturedFrameUri] = useState(null);
    const [isFirstFrameDisplayed, setIsFirstFrameDisplayed] = useState(false);

    
    useEffect(() => {
      (async () => {
          // 카메라 권한 요청
          const cameraStatus = await Camera.requestCameraPermissionsAsync();
          setHasCameraPersmission(cameraStatus.status === 'granted');

          // 마이크 권한 요청
          const audioStatus = await Camera.requestMicrophonePermissionsAsync();
          setHasAudioPermission(audioStatus.status === 'granted');
      })();
    }, []);

    const captureAndSendFrame = async () => {

      if (camera) {
        try {
          const photo = await camera.takePictureAsync({ format: 'jpeg' });
          
          console.log("--- Captured frame:", photo.uri);
          setFirstCapturedFrameUri(photo.uri);
          setIsFirstFrameDisplayed(true);
          
          // 이미지 파일을 base64로 인코딩
          const base64Image = await convertToBase64(photo.uri);

          // 이미지를 base64로 인코딩하는 함수
          async function convertToBase64(uri) {
            const b64 = await FileSystem.readAsStringAsync(uri, {
              encoding: FileSystem.EncodingType.Base64,
            });

            // const b64 =base64.encode(fileUri)

            console.log("base64!!" + b64.substring(0, 100));
            // console.log("base64! " + b64)

            return b64;
          }
          
          // 서버에 전송
          await axios.post(
            'http://43.202.22.173/video/process-video/',
            {
              image: base64Image
            }
          );

        } catch (e) {
          console.error(e);
        }
      }
    };


    const handleTakeVideo = () => {
      if (isRecording) {
        clearInterval(timerRef.current);
        setIsRecording(false);
      } else {
        setIsRecording(true);
        timerRef.current = setInterval(captureAndSendFrame, 500);
      }
    };

    const handleStopVideo = () => {
      clearInterval(timerRef.current);
      setIsRecording(false);
    };

    if(hasCameraPermission === null || hasAudioPermission === null) {
      return <View />;
    }

    if (hasCameraPermission === false || hasAudioPermission === false) {
      return <Text>No access to camera</Text>
    }


    return (
      <>
        <View style={{flex:1}}>
          <View style={styles.cameraContainer} >
            <Camera
              ref = {ref => setCamera(ref)}
              style = {styles.fixedRatio}
              type = {type}
              ratio = {'4:3'} />
          </View>
            <View styles={styles.buttons}>

              <Button 
                title = {status.isPlaying ? 'Pause' : 'Play'}
                onPress={() => 
                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
              }
              />
            </View>
            <Button
            title = 'Flip Video'
            onPress={()=>{
              setType(
                type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
              );
            }}
            />
            <Button title="Take Video" onPress={()=>handleTakeVideo()} />
            <Button title="Stop Video" onPress={()=>handleStopVideo()} />
            {isFirstFrameDisplayed && (
              <View style={styles.box}>
              <Image
                  style={styles.capturedImage}
                  source={{ uri: firstCapturedFrameUri }}
              />
              </View>
            )}
        </View>
      </>
    );
  }

  const styles = StyleSheet.create({
    cameraContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    fixedRatio: {
      flex: 1,
      aspectRatio: 1
    },
    video: {
      alignSelf: 'center',
      width: 350,
      height: 350,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: 'center',
    },
    capturedImage: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
      marginTop: 10,
    },
    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
  })