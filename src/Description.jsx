
import { useState } from "react";

import DogImage from "./DogImage";

export const Description = (props) => {
  const {url, setDogUrl} = props;
  const Fetch = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const res = await fetch(url);
    const content = await res.json();
    setDogUrl(content.message)
  }
  return <>
      <h2>犬の画像を表示するサイトです</h2>
      <DogImage imageUrl={url}></DogImage>
      <button onClick={() => Fetch()}>ランダムに生成</button>
    </>
}

export default Description
