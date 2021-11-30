import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Content from './components/Content';
import CountriesList from './components/CountriesList';
import SearchBar from './components/SearchBar';
import Title from './components/Title';

export default function App() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div className="App">
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <CountriesList searchValue={searchValue} />
      {/* <Title name={"IDC"} text={state} />
      <Content text="Type here" />
      <Button /> */}
    </div>
  );
}