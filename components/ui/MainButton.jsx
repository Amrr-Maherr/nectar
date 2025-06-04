import { Pressable, Text, TouchableOpacity, View } from "react-native";

export default function MainButton({
  buttonText,
  onpress,
  marginTop,
  marginBottom,
  bgColor,
  icon,
  FontWeight,
  FontSize
}) {
  return (
    <>
      <TouchableOpacity
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
        <Text style={{ color: "white", fontWeight: FontWeight,fontSize:FontSize }}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    </>
  );
}
