import { useEffect, useState } from "react";

export const useFetch = (url) => {

  const [data, setData] = useState({
    isError: false,
    message: '',
    fetchedData: null
  })

  const [isLoading, setIsLoading] = useState(true);

  const onFetching = async(url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url, {cache: "no-store"});
      
      if(response.ok) {
        const fetchedData = await response.json();
        setIsLoading(false);

        return {
          ...data,
          fetchedData,
          isError: false,
          message: '',
        } 
      } else {
        setIsLoading(false);

        return {
          ...data,
          fetchedData: null,
          isError: true,
          message: 'Disculpe, el contenido no esta disponible, intente luego',
        }
      }
    } catch(err) {
      setIsLoading(false);
      
      return {
        ...data,
        fetchedData: null,
        isError: true,
        message: `Disculpe, ocurrió un problema en la comunicación, intente de nuevo. Error: ${err}`,
      }
    }
  };

  const fetchData = (url) => {
    onFetching(url).then(setData);
    return {...data, isLoading};
  };

  useEffect(() => {
    onFetching(url).then(setData)
  }, []);
    
  return [{...data, isLoading}, fetchData]
} 


