import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{marginBottom:65}}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Image
        source={require("../../assets/BackButton.png")}
        style={{ height: 18, width: 10, resizeMode: "contain" }}
      />
    </TouchableOpacity>
  );
}
