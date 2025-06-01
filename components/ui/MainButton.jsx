import { Pressable, Text } from "react-native";

export default function MainButton({buttonText}) {
  return (
    <>
      <Pressable
        style={{
          backgroundColor: "#53B175",
          width: 353,
          height: 67,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 19,
          marginTop: 40,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>{buttonText}</Text>
      </Pressable>
    </>
  );
}
