import React from 'react';
import { Link } from 'react-router-dom';
import LevelUpPopUp from '../../components/levelbadgecomponents/LevelUpPopUp';

const LevelAndBadge = () => {
  return (
    <div>
      <h1>레벨&뱃지 페이지</h1>
      <LevelUpPopUp/>
      <Link to={"/reportandchallenge"}>리포트&챌린지 이동</Link>
    </div>
  );
};

export default LevelAndBadge;