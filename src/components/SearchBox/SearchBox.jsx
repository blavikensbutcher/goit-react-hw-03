import styles from './SearchBox.module.css';

export const SearchBox = ({ inputValue, setInputValue, filter }) => {
  return (
    <form className={styles.container}>
      <label htmlFor="value">Find contacts by name:</label>
      <input
        type="text"
        value={inputValue}
        id="value"
        className={styles.value}
        placeholder="search"
        onChange={event => {
          setInputValue(event.target.value);
          filter();
        }}
      />
    </form>
  );
};
