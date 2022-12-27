import {View, Text, TouchableOpacity, TextInput, TouchableWithoutFeedback, Alert, Keyboard} from 'react-native';
import React, {useRef, useState} from 'react';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

import { firebaseConfig, firebase} from '../../../config';

import { basicAuth as basic, formAuth as form } from "../Auth/stylesAuth";

export function Otp ({navigation}) {
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [verId, setVerId] = useState(null);
    const recaptchaVerifier = useRef(null);

    const sendVerification = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
            .verifyPhoneNumber(phone, recaptchaVerifier.current)
            .then(setVerId);
            setPhone('');
    };

    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verId,
            code
        );
        firebase.auth().signInWithCredential(credential)
            .then(()=>{
                setCode('');
            })
            .catch((error) => {
                alert(error.message);
            })
        navigation.navigate("Profile");
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={[basic.container]}>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
            />
            <View style={form.field}>
                <Text style={form.label}>Phone Number With Country Code</Text>
                <TextInput
                    style={form.input}
                    placeholder=''
                    onChangeText={setPhone}
                    keyboardType='phone-pad'
                    autoCompleteType='tel'
                    />
            </View>
            <TouchableOpacity style={form.button} onPress={sendVerification}>
                <Text style={form.buttonText}>
                    Send Verification
                </Text>
            </TouchableOpacity>
            
            <View style={form.field}>
                <Text style={form.label}>Confirm Code</Text>
                <TextInput
                    placeholder='Confirm Code'
                    onChangeText={setCode}
                    keyboardType='number-pad'
                />
            </View>
            <TouchableOpacity style={form.button} onPress={confirmCode}>
                <Text style={form.buttonText} >
                    Confirm Verification Code
                </Text>
            </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
    )
}