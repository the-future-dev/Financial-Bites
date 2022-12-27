import {React } from 'react';
import { View, Text, Button, StyleSheet} from "react-native";
import { fonts, colors } from '../../../style/styles';

export function Work ({route, navigation}) {

    const { title } = route.params;

    return (
        <View style={styles.screenAll}>
            <Text style={[{color: colors.dark}, fonts.title]}>{title}</Text>
            <Button color={colors.dark} onPress={() => navigation.goBack()} title="Indietro" />
        </View>
    );
};

const styles = StyleSheet.create({
    screenAll: {
        flex: 1,
        alignItems: "stretch",
        backgroundColor: colors.light,
    },
});