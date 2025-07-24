import { useState, useTransition } from "react";

export default function UseTransitionDemo(){
    const [fruits, setFruits]=useState('');
  const [list, setList] = useState([]);
  const [isPending, setTransition] = useTransition();

  function print(e){
    const value = e.target.value;
    setFruits(value);

    setTransition(()=>{
      const array = Array.from({length:1000}, (_,i)=> `Fruits: ${value} ${i}`);
      setList(array);
    })

        
  }

  return(
    <>
      <input type="text" value={fruits} onChange={print} placeholder="Type a fruit..."/>
      {
        isPending && <p>Loading...</p> 
      }
      <ul>
      {
        list.map((list, index)=>(
          
            <li key={index}>{list}</li>
          
        ))
      }
      </ul>
    </>
  )
}