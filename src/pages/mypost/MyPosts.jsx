import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MyPosts = () => {
  return (
    <div>
      <h1>나의 커뮤니티 게시물</h1>
      <Outlet/>{/*팝업 게시물 자리*/}
      <p>
        <Link to={"post/:postId"}>게시물 선택</Link>
      </p> 
      <p>
        <Link to={"/communitymain"}>커뮤니티 메인</Link>
      </p> 
    </div>
  );
};

export default MyPosts; 