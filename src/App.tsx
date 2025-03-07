import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';

export const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/detail/:id'
          element={<Detail />}
        />
      </Routes>
    </>
  )
}