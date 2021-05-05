import React, { useState, useEffect, useReducer } from "react";
import { View, Text } from "react-native";
import OptionButton from "../components/OptionButton";

const startColors = ["#009dff", "#009dff", "#009dff", "#009dff"];
const Questions = require("../questions.json");

const changeColorReducer = (colors, action) => {
  switch (action.type) {
    case "rightColors":
      let tempColors = ["red", "red", "red", "red"];
      tempColors[Number(action.correct) - 1] = "green";
      return tempColors;

    case "resetColors":
      return startColors;
  }
};

const answerReducer = (answers, action) => {
  switch (action.type) {
    case "updateAnswers":
      return action.list;
  }
};
const QuestionScreen = (props) => {
  const [colors, dispatchColors] = useReducer(changeColorReducer, startColors);
  const [answers, dispatchAnswers] = useReducer(answerReducer, [
    " ",
    " ",
    " ",
    " ",
  ]);
  const [question, setQuestion] = useState("");
  const [correct, setCorrect] = useState(1);
  const [score, setScore] = useState(0);
  const [touchable, setTouchable] = useState(false);

  const callQuestion = () => {
    let index = Math.floor(Object.keys(Questions).length * Math.random());
    let theQuestion = Questions[index];
    dispatchColors({ type: "resetColors" });
    setCorrect(Number(theQuestion.correct));
    setQuestion(theQuestion.question);
    dispatchAnswers({
      type: "updateAnswers",
      list: [
        theQuestion.answer1,
        theQuestion.answer2,
        theQuestion.answer3,
        theQuestion.answer4,
      ],
    });
    setTouchable(false);
  };

  useEffect(() => {
    callQuestion();
  }, []);

  const handleClickOn = (input) => {
    setTouchable(true);
    if (Number(input) === Number(correct)) {
      setScore(score + 1);
    }
    dispatchColors({ type: "rightColors", correct: correct });

    setTimeout(() => {
      callQuestion();
    }, 1200);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={{ fontSize: 30, fontFamily: "Helvetica" }}>
          Score: {score}
        </Text>
        <View style={styles.random}></View>
      </View>

      <View style={styles.question}>
        <Text style={{ fontSize: 30, margin: 15, textAlign: "center" }}>
          {question}
        </Text>
      </View>

      <View style={styles.answers}>
        <View style={styles.subanswer}>
          <OptionButton
            answer={answers[0]}
            color={colors[0]}
            function={() => handleClickOn(1)}
            enabled={touchable}
          ></OptionButton>

          <OptionButton
            answer={answers[1]}
            color={colors[1]}
            function={() => handleClickOn(2)}
            enabled={touchable}
          ></OptionButton>
        </View>
        <View style={styles.subanswer}>
          <OptionButton
            answer={answers[2]}
            color={colors[2]}
            function={() => handleClickOn(3)}
            enabled={touchable}
          ></OptionButton>

          <OptionButton
            answer={answers[3]}
            color={colors[3]}
            function={() => handleClickOn(4)}
            enabled={touchable}
          ></OptionButton>
        </View>
      </View>

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
export default QuestionScreen;

const styles = {
  container: {
    backgroundColor: "#f5f5f5",
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  top: {
    backgroundColor: "#21aadb",
    flexDirection: "row",
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  question: {
    backgroundColor: "#f5f5f5",
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  answers: {
    backgroundColor: "orange",
    width: "100%",
    height: "20%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  subanswer: {
    flexDirection: "row",
    width: "100%",
    height: "50%",
    backgroundColor: "#f5f5f5",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  goback: {
    width: "100%",
    height: "20%",
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
};
