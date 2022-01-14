import React, { useContext } from "react";
import { NewsContext } from '../context/NewsContext';

const News = () => {
  const { news } = useContext(NewsContext);
  console.log(news)
  return (
    <div>
      hi
    </div>
  )
}

export default News
