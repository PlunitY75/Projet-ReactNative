import React from "react";
import {View, TextInput, StyleSheet, Platform} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import colors from "../config/colors";

function AppTextInput({ icon,  value, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.black}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} placeholderTextColor={"grey"} value={value}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeHolder: {
    color: "#000",
    fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir"
  },
});

export default AppTextInput;
