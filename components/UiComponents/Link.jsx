import { Pressable, Text } from "react-native";

export default function Link({LinkText,onPress}) {
    return (
      <>
        <Pressable onPress={onPress}>
          <Text
            style={{
              color: "#007AFF",
              textDecorationLine: "underline",
              fontSize: 16,
            }}
          >
            {LinkText}
          </Text>
        </Pressable>
      </>
    );
}