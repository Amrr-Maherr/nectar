import { Pressable, Text, View } from "react-native";

export default function MainButton({ buttonText, onpress,marginTop,marginBottom,bgColor,icon }) {
  return (
    <>
      <Pressable
        onPress={onpress}
        style={{
          backgroundColor: bgColor,
          width: 353,
          height: 67,
          alignItems: "center",
          justifyContent: "center",
          gap: 30,
          flexDirection: "row",
          borderRadius: 19,
          marginTop: marginTop,
          marginBottom: marginBottom,
        }}
      >
        {icon && <View style={{ marginRight: 5 }}>{icon}</View>}
        <Text style={{ color: "white", fontSize: 16 }}>{buttonText}</Text>
      </Pressable>
    </>
  );
}
