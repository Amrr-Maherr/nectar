import { ScrollView, View } from "react-native";
import Title from "../../components/UiComponents/Title";
import HomeCategoryBox from "./HomeCategoryBox";
import ImageOne from "../../assets/8-82858_download-sack-of-rice-png 1.png"
import ImageTwo from "../../assets/4215936-pulses-png-8-png-image-pulses-png-409_409 1.png";
export default function HomeCategory() {
  return (
    <>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingVertical: 10,
          }}
        >
          <Title titleText="Groceries" FontSize={24} FontWeight="600" />
          <Title
            titleText="See all"
            color="#53B175"
            FontSize={16}
            FontWeight="500"
          />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "row",
              gap: 14,
              marginVertical:20
            }}
          >
            <HomeCategoryBox bgColor="#F8A44C" image={ImageOne} text="Rice" />
            <HomeCategoryBox bgColor="#53B175" image={ImageTwo} text="Pulses" />
          </View>
        </ScrollView>
      </View>
    </>
  );
}
