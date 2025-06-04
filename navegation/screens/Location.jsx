import { Image, TextInput, View } from "react-native";
import Title from "../../components/UiComponents/Title";
import MainButton from "../../components/ui/MainButton";

export default function Location({ navigation }) {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            style={{ width: 224, height: 170, marginBottom: 40 }}
            source={require("../../assets/Mask Group2.png")}
          />
          <View style={{ marginBottom: 89 }}>
            <Title
              titleText="Enter Your Location"
              FontSize={26}
              marginBottom={15}
              FontWeight="600"
            />
            <Title
              titleText="Swithch on your location to stay in tune with what’s happening in your area"
              FontSize={16}
              color="#7C7C7C"
            />
          </View>
          <View style={{ width: "100%" }}>
            <TextInput
              placeholder="Enter your location"
              placeholderTextColor="#7C7C7C"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#E2E2E2",
                marginBottom: 20,
                fontSize: 16,
              }}
            />
            <MainButton
              buttonText="Submit"
              bgColor="#53B175"
              marginTop={40}
              FontWeight="600"
              FontSize={16}
              color="#FFF9FF"
              onpress={() => {
                navigation.navigate("Login");
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
}
