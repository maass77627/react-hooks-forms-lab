import React from "react";
import { v4 as uuid } from "uuid";
import {useState} from "react";
import items from "../data/items";

function ItemForm({ setData }) {
  const [newItem, setNewItem] = useState(" ")
  const [selectedCategory, setSelectedCategory] = useState("Produce")
  //const [submittedData, setSubmittedData] = useState(items)

function handleChange(e){
  setNewItem(e.target.value)
  console.log(newItem)
}

function handleSelect(e) {
  setSelectedCategory(e.target.value)
  console.log(selectedCategory)
}

function handleSubmit(e) {
    e.preventDefault()
    const formData = {
    id: uuid(),
    name: newItem,
    category: selectedCategory
  }
  const dataArray = [...items, formData];
    setData(dataArray)
    //setSubmittedData(dataArray);
    setSelectedCategory("");
    setNewItem("");
}


  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleChange} type="text" name="name" />
      </label>

      <label>
        Category:
         <select onChange={handleSelect} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
          </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
