import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePopUp = () => {
  return (
    <div>
      <h1>프로필 사이드바:Not Page</h1>
      <p>
        <Link to={"/myposts"}>내 활동: 커뮤니티 게시글</Link>
      </p>
      <p>
        <Link to={"/myrecipe"}>내 활동: 저장한 레시피</Link>
      </p>
    </div>
  );
};

export default ProfilePopUp;