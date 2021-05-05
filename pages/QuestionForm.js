import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import InputBox from "../components/InputBox";

const QuestionForm = (props) => {
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");

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
      ></InputBox>
      <InputBox
        quesiton={answer2}
        title="Second Answer:"
        function={setAnswer2}
        placeholder={"Your answer here..."}
      ></InputBox>
      <InputBox
        quesiton={answer3}
        title="Third Answer:"
        function={setAnswer3}
        placeholder={"Your answer here..."}
      ></InputBox>
      <InputBox
        quesiton={answer4}
        title="Fourth Answer:"
        function={setAnswer4}
        placeholder={"Your answer here..."}
      ></InputBox>
    </View>
  );
};

export default QuestionForm;

const styles = {
  container: { backgroundColor: "#f5f5f5", height: "100%", width: "100%" },
  header: {
    backgroundColor: "#6ad2f7",
    height: "20%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
};
