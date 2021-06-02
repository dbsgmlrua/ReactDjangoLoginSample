const useAxios = (url) => {
    const [data , setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    return {data, isPending, error};
}
 
export default useAxios;