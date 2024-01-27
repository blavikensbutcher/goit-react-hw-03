import styles from './Contact.module.css';

export const Contact = ({ name, phone, id, onDelete }) => {
  return (
    <li className={styles.container} data-id={id}>
      <div>
        <p>{name}</p>
        <p>{phone}</p>
      </div>
      <div>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </li>
  );
};
