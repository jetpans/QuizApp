import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MainOption from "../components/MainOption.js";

const MainScreen = (props) => {
  const playPressed = () => {
    props.navigation.navigate("Question");
  };
  const addPressed = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 50, fontFamily: "Helvetica" }}>QUIZ APP</Text>
      </View>
      <View style={styles.rest}>
        <MainOption color="#21aadb" text="PLAY" function={playPressed} />
        <MainOption color="#21aadb" text="ADD QUESTION" function={addPressed} />
      </View>
    </View>
  );
};
export default MainScreen;

const styles = {
  container: {
    width: "100%",
    height: "100%",
  },
  rest: {
    height: "80%",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    backgroundColor: "#6ad2f7",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "20%",
  },
};
