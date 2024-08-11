import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './SpaceForm.css';

const SpaceForm = ({ space, onClose, onSuccess }) => {
    const initialValues = space || {
        title: '',
        description: '',
        location: '',
        price_per_hour: '',
        status: 'available'
    };

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        description: Yup.string().required('Description is required'),
        location: Yup.string().required('Location is required'),
        price_per_hour: Yup.number().required('Price per hour is required').positive('Price must be positive'),
        status: Yup.string().required('Status is required')
    });
    const postSpace = async (values) => {
        try {
          const response = await fetch('http://localhost:5555/api/spaces', { // Ensure correct URL
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
            credentials: "include",
          });
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          onSuccess(data);
          onClose();
        } catch (error) {
          console.error('Error adding space:', error);
          alert('Failed to add space. Please try again.');
        }
      };

      const putSpace = async (values) => {
        try {
          const response = await fetch(`http://localhost:5555/api/spaces/${space.id}`, { // Ensure correct URL
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          onSuccess(data);
          onClose();
        } catch (error) {
          console.error('Error updating space:', error);
          alert('Failed to update space. Please try again.');
        }
      };
      const handleSubmit = async (values, { setSubmitting }) => {
        if (space) {
            await putSpace(values);
        } else {
            await postSpace(values);
        }
        setSubmitting(false);
    };
    return (
        <div className="space-form">
            <h2>{space ? 'Edit Space' : 'Add Space'}</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
            {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="title">Title</label>
                            <Field type="text" id="title" name="title" />
                            <ErrorMessage name="title" component="div" />
                        </div>
                        <div>
                            <label htmlFor="description">Description</label>
                            <Field as="textarea" id="description" name="description" />
                            <ErrorMessage name="description" component="div" />
                        </div>
                        <div>
                            <label htmlFor="location">Location</label>
                            <Field type="text" id="location" name="location" />
                            <ErrorMessage name="location" component="div" />
                        </div>
                        <div>
                            <label htmlFor="price_per_hour">Price per Hour</label>
                            <Field type="number" id="price_per_hour" name="price_per_hour" />
                            <ErrorMessage name="price_per_hour" component="div" />
                        </div>
                        <div>
                            <label htmlFor="status">Status</label>
                            <Field as="select" id="status" name="status">
                                <option value="available">Available</option>
                                <option value="unavailable">Unavailable</option>
                            </Field>
                            <ErrorMessage name="status" component="div" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            {space ? 'Update Space' : 'Add Space'}
                        </button>
                        <button type="button" onClick={onClose}>
                            Cancel
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SpaceForm;
            