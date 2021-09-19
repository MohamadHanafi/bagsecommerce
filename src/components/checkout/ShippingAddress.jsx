import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import './ShippingAddress.styles.scss';

const initialValues = {
  email: '',
  name: '',
  address: '',
};

let ShippingSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  address: yup.string().required(),
});

// const validate = (values) => {
//   const { name, email, address } = values;
//   let errors = {};
//   if (!email) {
//     errors.email = 'Required';
//   }
//   if (!name) {
//     errors.name = 'Required';
//   }
//   if (!address) {
//     errors.address = 'Required';
//   }
// };

const ShippingAddress = ({ setShipping }) => {
  return (
    <div className='shippingAddress-container'>
      <h4>Shipping address</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={ShippingSchema}
        onSubmit={(values) => {
          console.log(values);
          setShipping(values);
        }}
      >
        {(props) => {
          const { values, errors, isSubmitting, handleChange, handleBlur } =
            props;
          const { name, email, address } = errors;
          return (
            <Form>
              <div>
                <Field
                  type='text'
                  name='name'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='Enter Your Name'
                  className={'nomad-input ' + (name ? 'error' : '')}
                />
              </div>
              <div>
                <Field
                  type='email'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='Enter your Email'
                  className={'nomad-input ' + (email ? 'error' : '')}
                />
              </div>
              <div>
                <Field
                  type='text'
                  name='address'
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='Enter your Address'
                  className={'nomad-input ' + (address ? 'error' : '')}
                />
              </div>

              <div className='submit-btn'>
                <button
                  type='submit'
                  className='nomad-btn is-black button submit'
                  disabled={isSubmitting}
                >
                  Continue
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ShippingAddress;
