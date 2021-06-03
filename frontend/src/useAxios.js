import { useState, useEffect } from 'react';
import axiosInstance from "./axiosApi";

const useAxios = (url) => {
    const [data , setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        axiosInstance.get(url)
        .then(function (response){
            console.log(response.data);
            setData(response.data);
            setIsPending(false);
            setError(null);
        });
    },[url])

    return {data, isPending, error};
}
 
export default useAxios;