import { Text } from "react-native";

export default function Description({
  DescriptionText,
  color,
  marginTop,
  marginBottom,
  FontSize,
  FontWeight,
}) {
  return (
    <>
      <Text
        style={{
          color: color,
          marginBottom: marginBottom,
          marginTop: marginTop,
          fontSize: FontSize,
          fontWeight: FontWeight,
          textAlign: "center",
        }}
      >
        {DescriptionText}
      </Text>
    </>
  );
}