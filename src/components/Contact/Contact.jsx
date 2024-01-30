import styles from './Contact.module.css';
import { MdPeopleAlt } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

export const Contact = ({ name, phone, id, onDelete }) => {
  return (
    <li className={styles.container} data-id={id}>
      <div>
        <p>
          <MdPeopleAlt size={15} /> {name}
        </p>
        <p>
          <FaPhoneAlt size={15} /> {phone}
        </p>
      </div>
      <div>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </li>
  );
};
