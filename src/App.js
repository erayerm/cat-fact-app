import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Random from './components/Random';
import Favorites from './components/Favorites';
import { useDispatch } from 'react-redux';
import { fetchFact } from './store/actions/factActions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchFact()), []);
  return (
    <div className="flex justify-center w-screen h-screen bg-[#F0F2F8]">
      <div className="flex flex-col gap-10 items-center py-20 w-[40rem]">
        {/*border border-solid border-black*/}
        <Header />
        <Switch>
          <Route exact path="/">
            <Random />
          </Route>
          <Route exact path="/favorites">
            <Favorites/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
