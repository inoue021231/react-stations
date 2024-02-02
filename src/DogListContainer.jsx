
import { useEffect, useState } from "react"
import BreedsSelect from "./BreedsSelect";
import DogImage from "./DogImage";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [dogList, setDogList] = useState([]);
  useEffect(() => {
    const url = 'https://dog.ceo/api/breeds/list/all';
    (async () => {
      const res = await fetch(url);
      const content = await res.json();
      setBreeds(Object.keys(content.message))
      console.log(Object.keys(content.message));
    })()
    
  }, []);
  return <>
  <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed} setDogList={setDogList}></BreedsSelect>
  {dogList.map((dog,i) => {
    return <DogImage imageUrl={dog} key={i}></DogImage>
  })}
  </>
}

export default DogListContainer
