import { useEffect, useOptimistic, useState } from "react";

export default function UseOptimisticDemo() {
  const [skills, SetSkills] = useState([]);
  const [name, setName] = useState('');
  const [optimistic, setOptimistic] = useOptimistic(skills);

  useEffect(() => {
    getSkills();
  }, []);

  async function getSkills() {
    const res = await fetch("http://localhost:3001/skills");
    const data = await res.json();
    SetSkills(data);
  }
  
  function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms))
  }
  async function addSkill() {
    const id = Math.random() * 1000;
    setOptimistic((prev)=>[...prev, {name, id}]);
    const res = await fetch("http://localhost:3001/skills", {
      method: "post",
      body: JSON.stringify({ name, id }),
    });
    await sleep(3000);
    const data = await res.json();
    if (data) {
      getSkills();
    }
  }

  return (
    <>
      <form action={addSkill}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Add a skill..."
          value={name}
        />
        <button>Submit</button>
      </form>
      <ul>
        {optimistic.map((e, index) => (
          <li key={index}>{e.name}</li>
        ))}
      </ul>
    </>
  );
}
