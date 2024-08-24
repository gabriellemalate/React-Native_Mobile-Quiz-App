import { Pressable, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { db } from "../firebaseConfig";
import { setDoc, doc, getDoc, updateDoc } from "@firebase/firestore";
import { styles } from "../styles/testsScreen";
import { getCurrentDate } from "../utils/lib";

const tests = () => {
	const [questions, setQuestions] = useState([]);
	const [time, setTime] = useState(15);
	const [count, setCount] = useState(0);
	const [selectedBox, setSelectedBox] = useState(null);
	const [userAnswer, setUserAnswer] = useState("");
	const [userScore, setUserScore] = useState(0);
	const [user, setUser] = useState({});
	const [clicked, setClicked] = useState(false);
	const router = useRouter();

	const toggleColor = (index) => {
		setSelectedBox(index);
		setUserAnswer(questions[count].options[index]);
	};

