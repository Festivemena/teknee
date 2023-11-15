import { useState, useRef, useEffect } from "react";
import axios from "axios";


const useGetAllProject = () => {
    const [loading, setloading] = useState(false);
    const [data, setData] = useState(null)
    const CancelToken = axios.CancelToken;
    const source = useRef();

    const getAllProject = async () => { 
        if (source.current === undefined) {
            source.current = CancelToken.source();
          }

        try {
          setloading(true)
            const response = await fetch('https://teknesis-com.onrender.com/', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
        
            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.msg);
            }
            console.log(response)
            const data = await response.json();
            setloading(false)
            setData(data)
          } catch (error) {
            console.error('An error occurred:', error.message);
          }
       
    }
    
    useEffect(()=>{
        return () =>{ 
            if (source.current != null) source.current.cancel()
        }
    }, [])

    return {getAllProject, loading, data};
}
 
export default useGetAllProject;