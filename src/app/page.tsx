'use client'
import { useEffect, useState } from "react";

import Animation from "@/components/Spiner/Animation";
import Navbar from "@/components/Navbar/Navbar";
import GeneratorButton from "@/components/GeneratorButton/GeneratorButton";
import FoodImage from "@/components/FoodImage/FoodImage";
import Ingredients from "@/components/Ingredients/Ingredients";
import Footer from "@/components/Footer/Footer";
import data from "@/data/data.json"


interface stateProps{
  name: string,
  ingredients: string[],
  recipe: string[],
  tag: string,
  image: string,
  time: number
}

export default function Home() {

  const [state, setState] = useState<stateProps>({
    name: '',
    ingredients: [],
    recipe: [],
    tag: '',
    image: '',
    time: 0
    
  })

  const [randomNumber, setRandomNumber] = useState<number>(Math.floor(Math.random() * 4))

  useEffect( () => {
    const newState = data.food[randomNumber]
    setState({...newState})

  }, [randomNumber])


  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 4);
    setRandomNumber(newRandomNumber)
  };

  return (
    <main className="h-[100vh]">
      <div className="absolute min-h-screen h-auto">
        <Navbar/>
        <h1 className="text-center text-4xl font-bold mt-5 text-stroke-3 text-transparent">{state.name}</h1>
        <FoodImage image_src={state.image} />
        <Ingredients data = {state.ingredients} />
        <GeneratorButton action={generateRandomNumber} />
        <Footer />  
      </div>

       <Animation />
    </main>
  )
}
