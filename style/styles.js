import { Dimensions, StyleSheet} from "react-native";

export const colors = {
    light: "#fffaf0",
    // light: "#ffffff",
    dark: "#404040",
    // tertiary: "#057afd",
    // alternative: "#666",
    // fb: "#39559f",
    // disabled: "rgba(5, 122, 253, 0.5)"
};

export const dim = {
    windowHeight: Dimensions.get('window').height,
    fontScale: Dimensions.get('window').fontScale,
    windowWidth: Dimensions.get('window').width,
}

export const fonts = StyleSheet.create ({
    basic: {
        fontFamily: 'Merriweather',
    },
    normal: {
        fontFamily: 'MerriweatherRegular',
    },
    title: {
        fontFamily: "MerriweatherBold",
    },
    light: {
        fontFamily: "MerriweatherLight"
    },
    italic: {
        fontFamily: "MerriweatherItalic",
    },
    blackItalic: {
        fontFamily: "MerriweatherBlackItalic",
    }
});




// import styled from 'styled-components/native';
// const BookView = styled.ScrollView`
//     padding: 10px;
// `;

//   const image =  require('../assets/navyBlue01.jpg');
    {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}

//   text: {
//     color: "white",
//     fontSize: 42,
//     lineHeight: 84,
//     fontWeight: "bold",
//     textAlign: "center",
//     backgroundColor: "#000000c0"
//   },

// line: {
//     borderWidth:0.5,
//     height: 0,
//     padding: 0,
//     // padding: 45,
//   }