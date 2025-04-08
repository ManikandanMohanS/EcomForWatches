const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express()
app.use(express.json())
app.use(cors())
const url =
  "mongodb+srv://manikandan:mani%401234@cluster0.obi94.mongodb.net/sample_db";
mongoose
  .connect(url)
  .then(() => {
    console.log("connected");
  })
  .catch((error) => console.log(error));

 const mens= [
    { id: 1, name: "Classic Silver Watch", price: 15999, image: "/images/m1.jpeg", category: "mens" },
    { id: 2, name: "Black Chronograph", price: 12999, image: "/images/m2.jpeg", category: "mens" },
    { id: 3, name: "Sport Edition", price: 8999, image: "/images/m3.jpeg", category: "mens" },
    { id: 4, name: "Minimalist Black", price: 6999, image: "/images/m4.jpeg", category: "mens" }, 
    { id: 5, name: "Aviator Pilot Series", price: 12999, image: "/images/m5.jpeg", category: "mens" },
    { id: 6, name: "Urban Explorer", price: 8999, image: "/images/m6.jpeg", category: "mens" },
    { id: 7, name: "Vintage Leather Classic", price: 5999, image: "/images/m7.jpeg", category: "mens" },
    { id: 8, name: "Silver Chronograph", price: 12999, image: "/images/m8.jpeg", category: "mens" },
    { id: 9, name: "Royal Blue Chrono", price: 8999, image: "/images/m9.jpeg", category: "mens" },
    { id: 10, name: "Titanium Edge", price: 9779, image: "/images/m10.jpeg", category: "mens" }
  ]
const  womens= [
    { id: 11, name: "Luxury Rose Gold", price: 8999, image: "/images/w1.jpeg", category: "womens" },
    { id: 12, name: " Diamond Luxe", price: 6999, image: "/images/w2.jpeg", category: "womens" },
    { id: 13, name: "Crystal Bloom ", price: 5699, image: "/images/w3.jpeg", category: "womens" },
    { id: 14, name: "Pearl Essence ", price: 8999, image: "/images/w4.jpeg", category: "womens" },
    { id: 15, name: " Royal Sapphire", price: 3999, image: "/images/w5.jpeg", category: "womens" },
    { id: 16, name: " Golden Grace", price: 2699, image: "/images/w6.jpeg", category: "womens" },
    { id: 17, name: " Vintage Charm", price: 4999, image: "/images/w7.jpeg", category: "womens" },
    { id: 18, name: " Opal Radiance", price: 7999, image: "/images/w8.jpeg", category: "womens" },
    { id: 19, name: "Starlight Classic ", price: 6999, image: "/images/w9.jpeg", category: "womens" },
    { id: 20, name: " Ethereal Silver", price: 7899, image: "/images/w10.jpeg", category: "womens" },
    
  ]

const sc = new mongoose.Schema({
    id:Number,
    name:String,
    price:Number,
    image:String,
    category:String
})

const det = mongoose.model("Detail",sc)

async function sendData(id,name,price,image,category) {
try
{    const data = new det({id:id,name:name,price:price,image:image,category:category});
    await data.save();
    console.log("Successfully Added");}
    catch{
      console.log("Error in senting the data");
      
    }
    
}
/*
 mens.map((d)=>(
 sendData(d.id,d.name,d.price,d.image,d.category)
 ))



 womens.map((d)=>(
 sendData(d.id,d.name,d.price,d.image,d.category)
 ))
*/
app.get("/getdata",async (req, res)=>{
  try {
    const data = await det.find({});
    res.json(data);
    console.log("Successfully Sent to Frontend");
    

  } catch (error) {
    console.log("error is"+error);
    
  }
})

app.listen(8000, () => console.log("Backend is running in 8000"));
