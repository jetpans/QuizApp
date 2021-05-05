import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const OptionButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        width: "40%",
        height: "90%",
        backgroundColor: props.color,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
      }}
      onPress={props.function}
      disabled={props.enabled}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Helvetica",
          }}
        >
          {props.answer}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default OptionButton;
