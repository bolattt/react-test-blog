import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
            if(err.name === 'AbortError') { 
                console.log(err.message)
            }else{ 
                setIsPending(false)
                setError(err.message);
            }
         
        });
    }, 2000);

    return () => console.log("clean up ran");
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
