import { useState, useRef, useEffect } from "react";
import axios from "axios";


const useGetSingleProject = () => {
    const [loading, setloading] = useState(false);
    const [data, setData] = useState(null)
    const CancelToken = axios.CancelToken;
    const source = useRef();

    const getProject = async (id) => { 
        if (source.current === undefined) {
            source.current = CancelToken.source();
          }

        try {
            const response = await fetch('http://3.93.153.214/v1/project/get/' + id, {
              method: 'GET',
              headers: {
                // 'Content-Type': 'application/json',
              },
            });
        
            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.msg);
            }
            const data = await response.json();
            console.log(data)
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

    return {getProject, loading, data};
}
 
export default useGetSingleProject;