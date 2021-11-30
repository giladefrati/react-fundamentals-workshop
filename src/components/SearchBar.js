export default function SearchBar({ searchValue, setSearchValue }) {
  return (
    <input
      type="text"
      placeholder="Type here"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
    />)
}