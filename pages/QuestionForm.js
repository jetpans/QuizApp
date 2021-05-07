import React, { useState, useReducer } from "react";
import { View, Text, TextInput } from "react-native";
import InputBox from "../components/InputBox";
import OptionButton from "../components/OptionButton";
const buttonReducer = (buttons, action) => {
  switch (action.type) {
    case "updateButtons":
      console.log("I JA SAM U REDUCERU");
      let temp = ["white", "white", "white", "white"];
      temp[action.chosen] = "green";
      console.log(temp);
      return temp;
  }
};

const QuestionForm = (props) => {
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [buttons, dispatchButtons] = useReducer(buttonReducer, [
    "white",
    "white",
    "white",
    "white",
  ]);

  const handleClickOn = (input) => {
    dispatchButtons({ type: "updateButtons", chosen: input });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 40,
            fontFamily: "Helvetica",
            margin: 5,
            textAlign: "center",
          }}
        >
          Fill out the question form
        </Text>
      </View>

      <InputBox
        quesiton={question}
        title="Question:"
        function={setQuestion}
        placeholder={"Your question here..."}
      ></InputBox>

      <InputBox
        quesiton={answer1}
        title="First Answer:"
        function={setAnswer1}
        placeholder={"Your answer here..."}
        chosen={() => {
          handleClickOn(0);
        }}
        color={buttons[0]}
      ></InputBox>

      <InputBox
        quesiton={answer2}
        title="Second Answer:"
        function={setAnswer2}
        placeholder={"Your answer here..."}
        chosen={() => {
          handleClickOn(1);
        }}
        color={buttons[1]}
      ></InputBox>

      <InputBox
        quesiton={answer3}
        title="Third Answer:"
        function={setAnswer3}
        placeholder={"Your answer here..."}
        chosen={() => {
          handleClickOn(2);
        }}
        color={buttons[2]}
      ></InputBox>

      <InputBox
        quesiton={answer4}
        title="Fourth Answer:"
        function={setAnswer4}
        placeholder={"Your answer here..."}
        chosen={() => {
          handleClickOn(3);
        }}
        color={buttons[3]}
      ></InputBox>

      <View style={styles.goback}>
        <OptionButton
          answer="MAIN MENU"
          color="green"
          function={() => {
            props.navigation.navigate("Main");
          }}
        ></OptionButton>
      </View>
    </View>
  );
};

export default QuestionForm;

const styles = {
  container: {
    backgroundColor: "#f5f5f5",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#6ad2f7",
    height: "20%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  goback: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignContent: "center",
  },
};
