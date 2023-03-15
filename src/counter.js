import { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
export let Set =  function Counter () {
    const [count,setcount] = useState(0)

    return(
        <>
        <button onClick = { () => setcount(count + 1)}><AddCircleOutlineIcon /></button>
        <p>{count}</p>
        <button  onClick = { () => setcount(count - 1)} >Decrement</button>
        </>
    )
}
