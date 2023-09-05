import { createContext, useState } from "react";


interface ImageColors {
  primary: string,
  secondary: string,
}

interface ContextProps{
  colors:  ImageColors,
  prevColors: ImageColors,
}


export const GradientContext = createContext({});


export const GradientProvider = ({children}: any)=>{

    const [colors, setColors]  = useState<ImageColors>({
      primary: "transparant",
      secondary:"transparent"
    })
    const [prevColors, setPrevColors]  = useState<ImageColors>({
      primary: "transparant",
      secondary:"transparent"
    })


    const setMainColors = (colors : ImageColors) => {
      setColors(colors)
    }
    
    const setPrevMainColors = (colors : ImageColors) => {
      setPrevColors(colors)
    }


  return (
    <GradientContext.Provider
      value={{
        colors,
        prevColors,
        setMainColors,
        setPrevMainColors
      }}>
      {children}
    </GradientContext.Provider>
    )
  
}