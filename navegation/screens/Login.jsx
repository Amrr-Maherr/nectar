import { Text, View } from "react-native";

export default function Login() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        Login Screen
      </Text>
      <Text style={{ fontSize: 16, color: "gray" }}>
        This is a placeholder for the Login screen.
      </Text>
    </View>
  );
}
