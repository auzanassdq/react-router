import React, {useState, useEffect} from 'react'

export default function LifeCycle() {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState();
  
  //count = 1   // salah
  //setCount(1) // benar

  // useEffect(func, [])
  // kurung kotak kosong = jalan sekali aja
  // kurung kotak ada isinya = jalan berdasarkan perubahan data (pemicu)
  useEffect(() => {
    setPerson({
      name: "Auzan",
      age: 22,
    })
  }, [count]);

  const tambah = () => {
    setCount(count + 1)
  }

  const kurang = () => {
    setCount(count - 1)
  }

  // condition ? true : false
  // condition && true

  return (
    <div>
      <h1>{person && person.name}</h1>
      <button onClick={kurang}>-</button>
      <h1>{count}</h1>
      <button onClick={tambah}>+</button>
    </div>
  )
}
