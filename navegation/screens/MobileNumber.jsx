import React, { useRef, useState } from "react";
import { View, StyleSheet, ActivityIndicator, Text, Image } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Description from "../../components/UiComponents/Description";
import Title from "../../components/UiComponents/Title";
import NextButton from "../../components/ui/NextButton";
import BackButton from "../../components/ui/BackButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MobileNumber({ navigation }) {
  const phoneInput = useRef(null);
  const [Number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const SaveNumber = async () => {
    if (!Number) {
      alert("please enter a valid mobile number");
    } else {
      try {
        setLoading(true);
        const Num = JSON.stringify(Number);
        await AsyncStorage.setItem("MobileNumber", Num);
        console.log(Num);
        setTimeout(() => {
          setLoading(false);
          navigation.navigate("Code");
        }, 2000);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "white",
        paddingHorizontal: 25,
      }}
    >
      <View style={{ alignItems: "flex-start", width: "100%" }}>
        <BackButton />
      </View>
      <View style={{ alignItems: "flex-end", width: "100%" }}>
        <Title
          titleText="Enter your mobile number"
          FontSize={26}
          FontWeight="600"
          marginBottom={27}
        />
      </View>

      <View
        style={{
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Description
          DescriptionText="Mobile Number"
          FontSize={16}
          FontWeight="500"
          color="#7C7C7C"
        />
        <PhoneInput
          onChangeText={(text) => {
            setNumber(text);
          }}
          ref={phoneInput}
          defaultCode="EG"
          placeholderTextColor="#7C7C7C"
          containerStyle={{
            borderBottomWidth: 1,
            borderBottomColor: "#E2E2E2",
            width: "100%",
            backgroundColor: "transparent",
          }}
          textContainerStyle={{
            backgroundColor: "transparent",
          }}
          textInputStyle={{
            fontSize: 16,
            color: "#333",
          }}
        />
        <Text style={{ fontSize: 12, color: "#999", marginTop: 8 }}>
          We will send a 4-digit verification code to this number.
        </Text>
      </View>

      <View
        style={{
          marginTop: 100,
          alignItems: "flex-end",
          width: "100%",
          paddingVertical: 10,
        }}
      >
        {loading ? (
          <ActivityIndicator size="large" color="#53B175" />
        ) : (
          <NextButton onPress={SaveNumber} />
        )}
      </View>
    </View>
  );
}
