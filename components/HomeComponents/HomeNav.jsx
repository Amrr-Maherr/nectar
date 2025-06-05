import { View, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Title from "../UiComponents/Title";

export default function HomeNav() {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        gap: 10,
      }}
    >
      <View>
        <Image source={require("../../assets/Group.png")} />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center",justifyContent:"center", gap: 5 }}>
        <Icon name="location" size={25} color="#4C4F4D" />
        <Title titleText="Egy" FontSize={18} color="#4C4F4D" />
      </View>
    </View>
  );
}
