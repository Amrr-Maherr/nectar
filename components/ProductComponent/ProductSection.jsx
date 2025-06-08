import { ScrollView, View,Text } from "react-native";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import useFetchData from "../../Hooks/useFetchData"

export default function ProductSection({ direction,data,error,loading }) {

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
              data?.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))
            )}
          </View>
        </ScrollView>
      </>
    );
}