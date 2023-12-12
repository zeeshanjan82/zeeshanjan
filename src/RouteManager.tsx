import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages/index';

export const RouteManager = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Pages.Home />} />
      </Routes>
    </div>
  );
};
