import { useState } from "react";

function AddItemForm({onAdd}){
const [name, setName]=useState("")
const [category, setCartegory]=useState("Drinks")
const [price, setPrice]=useState("")
const [image, setIamege]=useState("")
const [description, setDescription]=useState("")

function handleSubmit(e){
    e.preventDefautlt()
    if (
        name.trim()===""||category.trim()===""||price.trim()===""||image.trim()===""||description.trim()===""
    ){
        alert("All fields are required")
    }
    const priceNumber=Number(price)
    if(priceNumber<=0){
        alert("Price must be a positive number")
    }
    const newItem = {
        name:name,
        category:category,
        price:price,
        available:true,
        image:image,
        description:description

    }
    //post
    fetch("http://localhost:3000/menuItems",{
    method:"POST",
    Headers:{"Content-Type":"application/json"},
    body:JSON.stringify(newItem)
})
.then(res=>{
    if(!res.ok) throw new Error ("Failed to add item")
        return
})

}
return(
    <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)}></>
        <select>
            <option >Drinks</option>
            <option >Food</option>
            <option >Dessert</option>
        </select>
                <input placeholder="Price" value={price} onChange={e=>setPrice(e.target.value)}></>
                <input placeholder="Image URL" value={image} onChange={e=>setImage(e.target.value)}></>



        </>
)
}
export default AddItemForm