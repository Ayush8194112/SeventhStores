import React from 'react'
import axios from "axios"
import p1_img from "../Components/Assets/product_1.png";
import p2_img from "../Components/Assets/product_2.png";
import p3_img from "../Components/Assets/product_3.png";
import p4_img from "../Components/Assets/product_4.png";
import p5_img from "../Components/Assets/product_5.png";
import p6_img from "../Components/Assets/product_6.png";
import p7_img from "../Components/Assets/product_7.png";
import p8_img from "../Components/Assets/product_8.png";
import p9_img from "../Components/Assets/product_9.png";
import p10_img from "../Components/Assets/product_10.png";
import p11_img from "../Components/Assets/product_11.png";
import p12_img from "../Components/Assets/product_12.png";
import p13_img from "../Components/Assets/product_13.png";
import p14_img from "../Components/Assets/product_14.png";
import p15_img from "../Components/Assets/product_15.png";
import p16_img from "../Components/Assets/product_16.png";
import p17_img from "../Components/Assets/product_17.png";
import p18_img from "../Components/Assets/product_18.png";
import p19_img from "../Components/Assets/product_19.png";
import p20_img from "../Components/Assets/product_20.png";
import p21_img from "../Components/Assets/product_21.png";
import p22_img from "../Components/Assets/product_22.png";
import p23_img from "../Components/Assets/product_23.png";
import p24_img from "../Components/Assets/product_24.png";
import p25_img from "../Components/Assets/product_25.png";
import p26_img from "../Components/Assets/product_26.png";
import p27_img from "../Components/Assets/product_27.png";
import p28_img from "../Components/Assets/product_28.png";
import p29_img from "../Components/Assets/product_29.png";
import p30_img from "../Components/Assets/product_30.png";
import p31_img from "../Components/Assets/product_31.png";
import p32_img from "../Components/Assets/product_32.png";
import p33_img from "../Components/Assets/product_33.png";
import p34_img from "../Components/Assets/product_34.png";
import p35_img from "../Components/Assets/product_35.png";
import p36_img from "../Components/Assets/product_36.png";
const SendToDataBase = () => {


    
    let all_product = [
        {
          id: 1,
          name: "Chemical Blue V2 Hoodie",
          category: "Men",
          image: p1_img,
          new_price: 4500,
          old_price: 6000,
        },
        {
          id: 2,
          name: "Night V2 Hoodie ",
          category: "Men",
          image: p2_img,
          new_price: 4500,
          old_price: 6000,
        },
        {
          id: 3,
          name: "Smoke V2 Hoodie",
          category: "Men",
          image: p3_img,
          new_price: 4500,
          old_price: 6000,
        },
        {
          id: 4,
          name: "Night V2 Stacks",
          category: "Men",
          image: p4_img,
          new_price: 4500,
          old_price: 6000,
        },
        {
          id: 5,
          name: "Smokey Beige Hoodie",
          category: "women",
          image: p5_img,
          new_price: 5500,
          old_price: 7000,
        },
        {
          id: 6,
          name: "Jet Black Box-Fit Hoodie",
          category: "women",
          image: p6_img,
          new_price: 4000,
          old_price: 5500,
        },
        {
          id: 7,
          name: "Straight Fit White Scuba Pants",
          category: "women",
          image: p7_img,
          new_price: 6000,
          old_price: 7000,
        },
        {
          id: 8,
          name: "White Shacket",
          category: "women",
          image: p8_img,
          new_price: 3500,
          old_price: 4500,
        },
        {
          id: 9,
          name: "Powder Grey Utility Pants",
          category: "women",
          image: p9_img,
          new_price: 5000,
          old_price: 5500,
        },
        {
          id: 10,
          name: "Leather Black Denim Jacket",
          category: "women",
          image: p10_img,
          new_price: 3500,
          old_price: 4000,
        },
        {
          id: 11,
          name: "Black Sweatshirt",
          category: "women",
          image: p11_img,
          new_price: 3500,
          old_price: 4000,
        },
        {
          id: 12,
          name: "Pink Sweatshirt",
          category: "women",
          image: p12_img,
          new_price: 3500,
          old_price: 4000,
        },
        {
          id: 13,
          name: "The Sumo Coat Bomber",
          category: "men",
          image: p13_img,
          new_price: 9000,
          old_price: 10000,
        },
        {
          id: 14,
          name: "Merino Wool Jumpers",
          category: "men",
          image: p14_img,
          new_price: 7000,
          old_price: 7499,
        },
        {
          id: 15,
          name: "Black Cardigan",
          category: "men",
          image: p15_img,
          new_price: 8000,
          old_price: 8499,
        },
        {
          id: 16,
          name: "Hooded Jacket",
          category: "men",
          image: p16_img,
          new_price: 6500,
          old_price: 6999,
        },
        {
          id: 17,
          name: "Stonewashed Hoodie",
          category: "men",
          image: p17_img,
          new_price: 5000,
          old_price: 6499,
        },
        {
          id: 18,
          name: "Greek Handcrafter Hoodie",
          category: "men",
          image: p18_img,
          new_price: 17000,
          old_price: 17299,
        },
        {
          id: 19,
          name: "Chemical Blue Puffer Jacket",
          category: "men",
          image: p19_img,
          new_price: 7500,
          old_price: 7999,
        },
        {
          id: 20,
          name: "Black Puffer Jacket",
          category: "men",
          image: p20_img,
          new_price: 7500,
          old_price: 7999,
        },
        {
          id: 21,
          name: "Blue Shorts",
          category: "men",
          image: p21_img,
          new_price: 2500,
          old_price: 2999,
        },
        {
          id: 22,
          name: "Black Shorts",
          category: "men",
          image: p22_img,
          new_price: 2200,
          old_price: 2999,
        },
        {
          id: 23,
          name: "Cream Marcello Shirt",
          category: "men",
          image: p23_img,
          new_price: 3999,
          old_price: 4999,
        },
        {
          id: 24,
          name: "Navy Marcello Shirt",
          category: "men",
          image: p24_img,
          new_price: 3999,
          old_price: 4999,
        },
        {
          id: 25,
          name: "Boys Orange Colourblocked Hooded Sweatshirt",
          category: "kid",
          image: p25_img,
          new_price: 1500,
          old_price: 2000,
        },
        {
          id: 26,
          name: "Boys Orange Colourblocked Hooded Sweatshirt",
          category: "kid",
          image: p26_img,
          new_price: 1500,
          old_price: 2000,
        },
        {
          id: 27,
          name: "Boys Orange Colourblocked Hooded Sweatshirt",
          category: "kid",
          image: p27_img,
          new_price: 1200,
          old_price: 1500,
        },
        {
          id: 28,
          name: "Boys Orange Colourblocked Hooded Sweatshirt",
          category: "kid",
          image: p28_img,
          new_price: 1150,
          old_price: 1500,
        },
        {
          id: 29,
          name: "Boys Orange Colourblocked Hooded Sweatshirt",
          category: "kid",
          image: p29_img,
          new_price: 999,
          old_price: 1299,
        },
        {
          id: 30,
          name: "Boys Orange Colourblocked Hooded Sweatshirt",
          category: "kid",
          image: p30_img,
          new_price: 1099,
          old_price: 1299,
        },
        {
          id: 31,
          name: "Boys Orange Colourblocked Hooded Sweatshirt",
          category: "kid",
          image: p31_img,
          new_price: 1099,
          old_price: 1249,
        },
        {
          id: 32,
          name: "Boys Orange Colourblocked Hooded Sweatshirt",
          category: "kid",
          image: p32_img,
          new_price: 799,
          old_price: 1049,
        },
        {
          id: 33,
          name: "Boys Orange Colourblocked Hooded Sweatshirt",
          category: "kid",
          image: p33_img,
          new_price: 899,
          old_price: 1099,
        },
        {
          id: 34,
          name: "Boys Orange Colourblocked Hooded Sweatshirt",
          category: "kid",
          image: p34_img,
          new_price: 999,
          old_price: 1149,
        },
        {
          id: 35,
          name: "Boys Orange Colourblocked Hooded Sweatshirt",
          category: "kid",
          image: p35_img,
          new_price: 899,
          old_price: 1000,
        },
        {
          id: 36,
          name: "Boys Orange Colourblocked Hooded Sweatshirt",
          category: "kid",
          image: p36_img,
          new_price: 949,
          old_price: 1149,
        },
      ];

     /* {
        id: 1,
        name: "Chemical Blue V2 Hoodie",
        category: "Men",
        image: p1_img,
        new_price: 4500,
        old_price: 6000,
      },*/
    

const senddata=async (e)=>
{
    let res=await axios.post("http://localhost:8000/savedata",{
        data:all_product
    })
    console.log(res)
  
}

  return (
    <button onClick={senddata}> sendtodatabase</button>
  )
}

export default SendToDataBase