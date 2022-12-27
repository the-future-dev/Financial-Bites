import {React, useCallback } from 'react';
import { Text, ScrollView, View, Image, StyleSheet, Linking} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import EvilIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../assets/general/Button';

import { colors, dim, fonts } from '../../style/styles';

const OpenURLButton = ({ url, text }) => {
    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
        } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);
  
    return <Text onPress={handlePress} style={styles.link}>{text}</Text>;
  };

export function Article ({ route, navigation}) {
    const { item } = route.params;

    const OnPressFunction = () => {
        navigation.goBack();
    }

    return (
        <ScrollView style={styles.screenAll}>
            <TouchableOpacity style={styles.backFirst} onPress={OnPressFunction}>
                <EvilIcons name="chevron-left" size={dim.windowHeight/20} />
            </TouchableOpacity>

            <Text style={[styles.title, fonts.title]}>{item.title}</Text>
            
            <Text style={[styles.subtitle, fonts.blackItalic]}>{item.subtitle}</Text>
            
            { !!(item.img) ? (
                    <Image style={styles.img} source={{uri: item.img}}/>                    
            ) : (
                <></>
            )}
            <Text style={[styles.text]}>{item.text}</Text>
            
            { !!(item.link && item.linkTxt) ? (
                <OpenURLButton url={item.link} text={item.linkTxt}/>
                ) : (<></>)}

            <View style={{marginBottom: 20}}> 
                <Button onPress={OnPressFunction} title="Torna a Bites" />
            </View>
            
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    img: {
        height: dim.windowHeight / 3,
        marginHorizontal: 20,
    },

    screenAll: {
        backgroundColor: colors.light,
    },

    backFirst: {
        backgroundColor: colors.light,
        height: dim.windowHeight/20,
        borderBottomWidth: 0.7,
    },

    title: {
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'justify',

        fontSize: 20,
    },

    subtitle: {
        fontSize: 16,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        textAlign: 'justify',
    },

    text: {
        marginHorizontal: 20,
        marginVertical: 15,
        textAlign: 'justify',
        fontSize: 16,
    },

    link: {
        textAlign: 'center',
        color: 'blue',
    }
});
