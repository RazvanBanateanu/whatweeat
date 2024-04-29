import React from 'react'

const ingredients = [
    "1 pound (450g) ground beef (preferably 80/20 blend for juiciness)",
    "4 hamburger buns",
    "4 slices of cheese (American, cheddar, or your choice)",
    "Lettuce leaves",
    "Tomato slices",
    "Onion slices (optional)",
    "Pickles (optional)",
    "Ketchup",
    "Mustard",
    "Salt",
    "Pepper",
    "Olive oil or butter for grilling",

  ];


interface dataProps{
  data: Array<string>
}

const Ingredients = ( {data}: dataProps) => {

  return (
    <div className='pl-8 mt-2 bg-slate-500 bg-opacity-75 rounded-3xl mx-4 shadow-xl'>
        <h1 className=' font-medium text-xl'>Ingredients</h1>
        <ul className=' list-disc'>
            {data.map((item:string) => {return <li key={item}>{item}</li>})}
            
        </ul>
    </div>
  )
}

export default Ingredients