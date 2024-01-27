// import styles from './SearchBox.module.css'

export const SearchBox = ({ inputValue, setInputValue }) => {
  return (
    <form>
      <label htmlFor="value">Find contacts by name:</label>
      <input
        type="text"
        value={inputValue}
        id="value"
        onChange={event => {
          setInputValue(event.target.value);
        }}
      />
    </form>
  );
};
