import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
const API = process.env.REACT_APP_SERVER_API;

const SpaceForm = ({ space }) => {
  const [spaces, setSpaces] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [pricePerHour, setPricePerHour] = useState("");
  const [status, setStatus] = useState("available");

  useEffect(() => {
    if (space) {
      setTitle(space.title);
      setDescription(space.description);
      setLocation(space.location);
      setPricePerHour(space.price_per_hour);
      setStatus(space.status);
    } else {
      setTitle("");
      setDescription("");
      setLocation("");
      setPricePerHour("");
      setStatus("available");
    }
  }, [space]);

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    location: Yup.string().required("Location is required"),
    price_per_hour: Yup.number()
      .required("Price per hour is required")
      .positive("Price must be positive"),
    status: Yup.string().required("Status is required"),
  });

  const updateSpace = (values, resetForm) => {
    fetch(`${API}/api/spaces/${space.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((updatedSpace) => {
        setSpaces((prevSpaces) =>
          prevSpaces.map((s) => (s.id === space.id ? updatedSpace : s))
        );
        resetForm();
      })
      .catch((error) => {
        console.error("Error updating space:", error);
        alert("Failed to update space. Please try again.");
      });
  };

  const addSpace = (values, resetForm) => {
    fetch(`${API}/api/spaces`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: values.title,
        description: values.description,
        location: values.location,
        price_per_hour: values.price_per_hour,
        status: values.status,
        tenant_id: 2,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((newSpace) => {
        setSpaces((prevSpaces) => [...prevSpaces, newSpace]);
        resetForm();
      })
      .catch((error) => {
        console.error("Error adding space:", error);
        alert("Failed to add space. Please try again.");
      });
  };

  const handleSubmit = (values, { resetForm }) => {
    if (space) {
      updateSpace(values, resetForm);
    } else {
      addSpace(values, resetForm);
    }
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        title: title || "",
        description: description || "",
        location: location || "",
        price_per_hour: pricePerHour || "",
        status: status || "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleSubmit, values }) => (
        <Form onSubmit={handleSubmit} className="space-form">
          <h2>{space ? "Edit Space" : "Add Space"}</h2>
          <div>
            <label htmlFor="title">Title</label>
            <Field
              type="text"
              id="title"
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            <ErrorMessage name="title" component="div" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <Field
              as="textarea"
              id="description"
              name="description"
              value={values.description}
              onChange={handleChange}
            />
            <ErrorMessage name="description" component="div" />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <Field
              type="text"
              id="location"
              name="location"
              value={values.location}
              onChange={handleChange}
            />
            <ErrorMessage name="location" component="div" />
          </div>
          <div>
            <label htmlFor="price_per_hour">Price per Hour</label>
            <Field
              type="number"
              id="price_per_hour"
              name="price_per_hour"
              value={values.price_per_hour}
              onChange={handleChange}
            />
            <ErrorMessage name="price_per_hour" component="div" />
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <Field
              as="select"
              id="status"
              name="status"
              value={values.status}
              onChange={handleChange}
            >
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </Field>
            <ErrorMessage name="status" component="div" />
          </div>
          <button type="submit">{space ? "Update Space" : "Add Space"}</button>
          <button type="button">Cancel</button>
        </Form>
      )}
    </Formik>
  );
};

export default SpaceForm;
