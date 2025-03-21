import { useEffect, useState } from "react"
import { getGifs } from '../Helpers/getGifs'


export const useFetchGifs = ( category ) => {
  const [images, setImages] = useState( [] )
  const [isLoading, setIsLoading] = useState( true )

  const getImages = async () => {
    const image = await getGifs( category )
    setImages( image )
    setIsLoading( false )
  }

  useEffect( () => {
    getImages()
  }, [] )

  return {
    images,
    isLoading
  }
}
