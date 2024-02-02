// DO NOT DELETE

import './App.css'
import Header from './Header';
import Description from './Description';
import { useState } from 'react';
import DogListContainer from './DogListContainer';

export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');
  return (
    <div>
      <Header></Header>
      <Description url={dogUrl} setDogUrl={setDogUrl}></Description>
      <DogListContainer></DogListContainer>
    </div>
  )
}
