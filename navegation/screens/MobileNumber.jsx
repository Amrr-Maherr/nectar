import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Description from "../../components/UiComponents/Description";
import Title from "../../components/UiComponents/Title";
import NextButton from "../../components/ui/NextButton";
import BackButton from "../../components/ui/BackButton";

export default function MobileNumber() {
  const phoneInput = useRef(null);

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
      <View style={{ alignItems: "flex-start",width:"100%" }}>
        <BackButton />
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Title
          titleText="Enter your mobile number"
          FontSize={26}
          FontWeight="600"
          marginBottom={27}
        />
      </View>
      <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
        <Description
          DescriptionText="Mobile Number"
          FontSize={16}
          FontWeight="300"
        />
        <PhoneInput
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
      </View>
      <View
        style={{
          marginTop: 222,
          alignItems: "flex-end",
          width: "100%",
          paddingVertical: 10,
        }}
      >
        <NextButton />
      </View>
    </View>
  );
}

