import React, {useState, useEffect} from 'react'

export default function Digimon() {
  const [digimons, setDigimons] = useState([]);

  useEffect(() => {
    fetch("https://digimon-api.vercel.app/api/digimon")
    .then(result => result.json())
    .then(data => setDigimons(data))
    .catch(err => console.log(err))
  }, []);

  console.log(digimons)

  return (
    <div>
      <ul>
        {digimons.map(item => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
