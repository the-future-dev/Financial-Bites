import React, {useState} from 'react'
import { SafeAreaView, TextInput, Button, StyleSheet, Text} from "react-native";
import { fonts, colors, dim } from '../../../style/styles';

//https://v1.nocodeapi.com/futuredev/google_sheets/qyLnAYIAslxjTDmj


export function Feedback() {
    const [name, onChangeName] = React.useState('');
    const [mail, onChangeMail] = React.useState('');
    const [mesg, onChangeMesg] = React.useState('');

    const [miss, setMiss] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setSent(false);

        if (name != '' && mail != '' && mesg != ''){
            try{
                const response = await fetch(
                    'https://v1.nocodeapi.com/futuredev/google_sheets/qyLnAYIAslxjTDmj?tabId=Sheet1', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify([[name, mail, mesg,new Date().toLocaleString()]])
                    }
                );
    
                await response.json();
            onChangeMail('');
            onChangeMesg('');
            onChangeName('');
            setMiss(false);
            setSent(true);
            }catch(err){
                console.log(err);
            }
        } else {
            setMiss(true)
        }
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Send us your feedback!</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeName}
                placeholder="name"
                keyboardType="default"
                value={name}
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeMail}
                value={mail}
                placeholder="email address"
                keyboardType="email"
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeMesg}
                placeholder="message"
                keyboardType="default"
                value={mesg}
            />
            {miss ? <Text style={styles.missMsg}>Mancano delle informazioni!</Text>:<></>}
            <Button onPress={handleSubmit} title="Invia" />
            {sent ? <Text style={styles.sentMsg}>Inviato!</Text>: <></>}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: colors.light,
        paddingHorizontal: dim.windowHeight/30, 
    },
    title: {
        alignSelf: 'center',
        fontSize: 18,
        marginTop: dim.windowHeight/45,
        marginBottom: dim.windowHeight/100,
    },
    sentMsg: {
        alignSelf: 'center',
        marginVertical: dim.windowHeight/45,
        color: 'green',
    },
    missMsg: {
        alignSelf: 'center',
        marginVertical: dim.windowHeight/45,
        color: 'red',
    }
  });