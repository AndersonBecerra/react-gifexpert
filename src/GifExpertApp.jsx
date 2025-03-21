import { useState } from "react"
import { AddCategory, GifGrid } from "./Components"

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"])

  const onAddCategory = (newCategory) => {
    // setCategories((cat) => [...cat, "Naruto"])
    // setCategories([...categories, "Naruto"])
    if (categories.includes(newCategory)) return

    setCategories([newCategory, ...categories])
  }
  return (
    <>
      <h1>GifExpert App</h1>

      <AddCategory
        //setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  )
}
