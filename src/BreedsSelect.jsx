
export const BreedsSelect = (props) => {

  const handleChange = (event) => {
    props.setSelectedBreed(event.target.value);
  }

  const fetchData = async () => {
    const index = props.breeds.indexOf(props.selectedBreed);
    const url = `https://dog.ceo/api/breed/hound/images/random/${index}`;

    const res = await fetch(url);
    const content = await res.json();
    const array = content.message;
    const slicedArray = array.slice(0,12);
    console.log(slicedArray);
    props.setDogList(slicedArray);
  }

  return <div>
    <select value={props.selectedBreed} onChange={handleChange}>
    {props.breeds.map((breed, i) => {
      return <option value={breed} key={i}>{breed}</option>
    })}
  </select>
  <button onClick={() => fetchData()}>表示</button>
  </div>
}

export default BreedsSelect
