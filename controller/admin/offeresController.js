import categoryModel from "../../models/categorySchema.js"
import productModel from "../../models/productSchema.js"

export const showOffers=async(req,res)=>{
try{

const categories=await categoryModel.find({block:false})
const products=await productModel.find({})
    res.render("admin/offer",{products,categories})
}catch(err){

}
}

export const addProductOffer=async(req,res)=>{
try{

const {product_id,discount}=req.body
console.log(product_id,discount);
const update =await productModel.findOneAndUpdate({_id:product_id},{discount:discount},{new:true})
console.log(update);
res.json({message:"discount updated"})


}catch(err){
console.log(err);

}
}

export const addCategoryOffer=async(req,res)=>{
try{

const {category,discount}=req.body
console.log(category,discount);
const update =await productModel.updateMany({category:category},{discount:discount},{new:true})
console.log(update);
res.json({message:"discount updated"})


}catch(err){
console.log(err);
}
}