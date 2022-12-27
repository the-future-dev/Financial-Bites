import { StyleSheet } from "react-native";

export const colorsAuth = {
  primary: "#fff",
  secondary: "#adadad",
  tertiary: "#2e874e",
  alternative: "#2e874e",
  fb: "#39559f",
  disabled: "#789482"
};

export const basicAuth = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colorsAuth.primary
  },
  image: {
    width: "100%",
    height: "60%",
    resizeMode: "cover"
  }
});

export const formAuth = StyleSheet.create({
  field: {
    padding: 15,
    paddingVertical: 14,
    position: "relative"
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    paddingTop: 0
  },
  label: {
    color: colorsAuth.secondary
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: colorsAuth.secondary,
    paddingVertical: 10,
    fontWeight: "bold",
    letterSpacing: 1,
    fontSize: 15
  },
  eye: {
    position: "absolute",
    right: 0,
    bottom: 0,
    fontSize: 25,
    color: colorsAuth.secondary,
    padding: 20,
    paddingRight: 15
  },
  terms: {
    fontWeight: "bold",
    color: colorsAuth.tertiary,
    fontSize: 16,
    padding: 5
  },
  button: {
    borderRadius: 5,
    alignContent: "center",
    backgroundColor: colorsAuth.tertiary,
    padding: 15
  },
  disabled: {
    backgroundColor: colorsAuth.disabled
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: colorsAuth.primary,
    fontSize: 15
  },
  button1: {
    backgroundColor: colorsAuth.primary,
    padding: 15
  },
  field1: {
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    color: colorsAuth.secondary,
    fontSize: 15
  },
  buttonText1: {
    fontWeight: "bold",
    color: colorsAuth.tertiary,
    fontSize: 15
  },
  google: {
    backgroundColor: colorsAuth.primary,
    borderColor: colorsAuth.secondary,
    borderWidth: 1
  },
  icon: {
    position: "absolute",
    top: 8,
    left: 15,
    paddingLeft: 0
  },
  fb: {
    backgroundColor: colorsAuth.fb
  },
  message: {
    textAlign: "center",
    fontSize: 13,
    color: "tomato"
  }
});
