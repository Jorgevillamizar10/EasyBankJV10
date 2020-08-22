import React from 'react';
import { NextGeneration } from '../components/NextGeneration/index';
import { ChooseEasy } from '../components/ChooseEasy/index';
import { LatestArticles } from '../components/LatestArticles/index';

export const Home = () => {
  return (
    <>
      <NextGeneration />
      <ChooseEasy />
      <LatestArticles />
    </>
  );
};
