
import axios from 'axios';
import { useEffect , useState } from 'react';

const useGif = (tag) => {
    
    const[gif, setGif]=useState('');
    const[loading,setLoading]=useState("false");

    const url = `https://api.giphy.com/v1/gifs/random?api_key=${import.meta.env.VITE_REACT_APP_GIPHY_API_KEY}`;
    
async function fetchData(tag){
  setLoading(true);

  const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
  const imageSource=data.data.images.downsized.url;
  setGif(imageSource);
  setLoading(false);
}

useEffect(()=>{
fetchData();
},[]);

   return {gif,loading,fetchData};
}

export default useGif