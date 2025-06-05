import { ScrollView, View } from "react-native";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductSection({ direction }) {
    const [data,setData] = useState([])
    const GetData = async () => {
        try {
            let response = await axios.get("https://ecommerce.routemisr.com/api/v1/products")
        setData(response.data.data.slice(0,10))
        console.log(response.data.data); 
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        GetData()
    },[])
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
            {data.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
          </View>
        </ScrollView>
      </>
    );
}