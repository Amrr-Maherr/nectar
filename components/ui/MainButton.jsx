import { Pressable, Text } from "react-native";

export default function MainButton({ buttonText, onpress,marginTop,marginBottom,bgColor }) {
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
          borderRadius: 19,
          marginTop: marginTop,
          marginBottom: marginBottom,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>{buttonText}</Text>
      </Pressable>
    </>
  );
}
