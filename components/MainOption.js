import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const MainOption = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.color,
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        height: "25%",
        borderRadius: 40,
      }}
      onPress={() => {
        props.function();
      }}
    >
      <View>
        <Text style={{ fontSize: 30, fontFamily: "Helvetica" }}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainOption;
