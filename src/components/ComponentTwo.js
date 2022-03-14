import { useState } from "react"

export function ComponentTwo() {
    const [count, changeCount] = useState(0);
    const [first, setFirst] = useState();
    const [second, setSecond] = useState();
    return(
        <div>
            <p>            {count}
</p>
<label>
    First No
</label>
<input type={"email"} value={first} onChange={(e)=>{setFirst(e.target.value)}}/>
<label>
    Second No
</label>
<input type={"number"} value={second} onChange={(e)=>{setSecond(e.target.value)}}/>
<button onClick={
    function(){
        const sum = parseInt(first)+parseInt(second);
        changeCount(sum);
    }}>
    Add</button>
        </div>
    )
  }
  