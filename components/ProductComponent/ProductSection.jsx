import { ScrollView, View,Text, FlatList } from "react-native";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import useFetchData from "../../Hooks/useFetchData"

export default function ProductSection({ direction,data,error,loading }) {
  // const { data, loading, error } = useFetchData("products");
    return (
      <>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={direction}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              flexDirection: "row",
            }}
          >
            {loading ? (
              <Text>loading...</Text>
            ) : (
              <FlatList
                contentContainerStyle={{
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexWrap: "wrap",
                  flexDirection: "row",
                }}
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ProductCard product={item} />}
              />
            )}
          </View>
        </ScrollView>
      </>
    );
}