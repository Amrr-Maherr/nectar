import React from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // أو FontAwesome مثلًا

export default function SearchInput() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F2F3F2",
        borderRadius: 20,
        paddingHorizontal: 15,
        height: 51,
        width: 365,
        marginVertical: 20,
      }}
    >
      <Icon name="search" size={20} color="#888" style={{ marginRight: 10 }} />
      <TextInput
        placeholder="Search"
        style={{
          flex: 1,
        }}
      />
    </View>
  );
}
