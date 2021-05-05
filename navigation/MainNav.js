import "react-native-gesture-handler";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React from "react";

import MainScreen from "../pages/MainScreen.js";
import QuestionScreen from "../pages/QuestionScreen.js";
import QuestionForm from "../pages/QuestionForm.js";

const MainNav = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
  },
  QuestionScreen: {
    screen: QuestionScreen,
  },
  QuestionFormScreen: {
    screen: QuestionForm,
  },
});

export default createAppContainer(MainNav);
