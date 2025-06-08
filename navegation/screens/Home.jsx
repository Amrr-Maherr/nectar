import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import HomeNav from "../../components/HomeComponents/HomeNav";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/UiComponents/SearchInput";
import HomeBanner from "../../components/HomeComponents/HomeBanner";
import { useEffect, useState } from "react";
import Title from "../../components/UiComponents/Title";
import ProductSection from "../../components/ProductComponent/ProductSection";
import HomeCategory from "../../components/HomeComponents/HomeCategory";
import useFetchData from "../../Hooks/useFetchData";

export default function Home() {
  const { data, loading, error } = useFetchData("products",15);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 30 }}
      >
        <HomeNav />
        <SearchInput />
        <HomeBanner />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingVertical: 10,
          }}
        >
          <Title titleText="Exclusive Offer" FontSize={24} FontWeight="600" />
          <Title
            titleText="See all"
            color="#53B175"
            FontSize={16}
            FontWeight="500"
          />
        </View>
        <ProductSection
          direction={true}
          data={data}
          error={error}
          loading={loading}
        />
        <HomeCategory />
        <ProductSection
          direction={true}
          data={data}
          error={error}
          loading={loading}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
