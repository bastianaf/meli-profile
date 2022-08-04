import { useEffect } from "react"
import { useUser } from "../hooks/useUser"

export default function FetchUser() {
    const { fetchUser } = useUser();
    useEffect( () => {
      fetchUser()
    },[]) 
  return (
        <>
        </>
  );
}



