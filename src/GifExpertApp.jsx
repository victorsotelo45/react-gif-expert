import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon ball Z'])
    const onAddCategory = (onNewCategory)=>{
        if (categories.includes(onNewCategory)) return;
        setCategories([onNewCategory, ...categories])
    }
    return (
    <>
        <div>GifExpertApp</div>
        <AddCategory onNewCategory = {(value) => onAddCategory(value)}/>
            {
                categories.map(category => (
                <GifGrid 
                    key={category}
                    category={category}
                />)
                )
            }
    </>
  )
}
