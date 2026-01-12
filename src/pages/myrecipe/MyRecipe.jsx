import React from 'react';
import { Link } from 'react-router-dom';

const MyRecipe = () => {
  return (
    <div>
      <h1>내가 저장한 레시피 페이지</h1>
      <Link to={"/foodrecommendation/recommendRecipe/:foodId"}>상세 레시피 페이지</Link>
    </div>
  );
};

export default MyRecipe;