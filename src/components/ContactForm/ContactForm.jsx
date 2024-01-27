import styles from './ContactForm.module.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';

export const ContactForm = ({ addContact, contacts }) => {
  const userSchema = Yup.object().shape({
    name: Yup.string().min(3, 'minimum 3 letters').required('must be not empty'),
    number: Yup.string().min(11, 'must be longest than 11').required('must be not empty'),
  });

  const nameID = useId();
  const numberID = useId();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={values => {
        addContact({ id: Date.now(), ...values });
      }}
      validationSchema={userSchema}
    >
      <Form className={styles.container}>
        <label htmlFor={nameID}>Name:</label>
        <Field type="text" name="name" id={nameID} className={styles.field}></Field>
        <label htmlFor={numberID}>Number:</label>
        <Field type="text" name="number" id={numberID} className={styles.field}></Field>
        <button type="submit" className={styles.btn}>
          Add User
        </button>
      </Form>
    </Formik>
  );
};
