import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [inputValue, setInputValue] = useState(" ")
  const [submittedData, setSubmittedData] = useState(items)
  

  function setData(dataArray) {
    setSubmittedData(dataArray)
    console.log(submittedData)
}
  
  function onSearchChange(event) {
    setInputValue(event.target.value)
    console.log(inputValue)
}
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = submittedData.filter((item) => {
    if (inputValue !== " ") {return item.name === inputValue}
    //if (selectedCategory === "All"){return true;}
   else if (selectedCategory === "All"){return true;}
    else { return item.category === selectedCategory;}
  });

  return (
    <div className="ShoppingList">
      <ItemForm setData={setData}/>
      <Filter input={inputValue} onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
       <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
