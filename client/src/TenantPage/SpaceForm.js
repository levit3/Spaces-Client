import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./SpaceForm.css";

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{message}</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const SpaceForm = ({ space }) => {
  const navigate = useNavigate(); // Initialize navigate
  const initialValues = space || {
    title: "",
    description: "",
    location: "",
    price_per_hour: "",
    status: "available",
    category: "", // Added category
    tenant_id: localStorage.getItem('user_id') || "",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const user_id = localStorage.getItem("user_id");

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    location: Yup.string().required("Location is required"),
    price_per_hour: Yup.number()
      .required("Price per hour is required")
      .positive("Price must be positive"),
    status: Yup.string().required("Status is required"),
    category: Yup.string().required("Category is required"), // Added category
  });

  const postSpace = async (values) => {
    const requestBody = {
      ...values,
      tenant_id: 89,
    };
    try {
      const response = await fetch("/api/spaces", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Space created successfully:", data);

      setModalMessage("Space Created successfully!");
      setIsModalOpen(true);

      // Navigate back to TenantDashboard after a successful addition
      setTimeout(() => navigate("/tenantdashboard"), 2000);
    } catch (error) {
      console.error("Error adding space:", error);
      alert("Failed to add space. Please try again.");
    }
  };

  const putSpace = async (values) => {
    const requestBody = {
      ...values,
      tenant_id: user_id,
    };
    try {
      const response = await fetch(`/api/spaces/${space.id}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Space updated successfully:", data);
    } catch (error) {
      console.error("Error updating space:", error);
      alert("Failed to update space. Please try again.");
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

  const closeModal = () => {
    setIsModalOpen(false);
    // Navigate back to TenantDashboard when modal is closed
    navigate("/tenant-dashboard");
  };

  return (
    <div className="space-form-container">
      <img
        src={`${process.env.PUBLIC_URL}/logo1.png`}
        alt="Logo"
        className="space-form-logo"
      />
      <h2>{space ? "Edit Space" : "Add Space"}</h2>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            className="space-form"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col">
                <label htmlFor="title" className="form-label">Title</label>
                <Field
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Title"
                  value={values.title}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="error"
                />
              </div>
              <div className="col">
                <label htmlFor="location" className="form-label">Location</label>
                <Field
                  type="text"
                  className="form-control"
                  id="location"
                  name="location"
                  placeholder="Location"
                  value={values.location}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="location"
                  component="div"
                  className="error"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <label htmlFor="price_per_hour" className="form-label">Price per Hour</label>
                <Field
                  type="number"
                  className="form-control"
                  id="price_per_hour"
                  name="price_per_hour"
                  placeholder="Price per Hour"
                  value={values.price_per_hour}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="price_per_hour"
                  component="div"
                  className="error"
                />
              </div>
              
              <div className="col">
                <label htmlFor="status" className="form-label">Status</label>
                <Field
                  as="select"
                  className="form-select"
                  id="status"
                  name="status"
                  value={values.status}
                  onChange={handleChange}
                >
                  <option value="available">Available</option>
                  <option value="unavailable">Unavailable</option>
                </Field>
                <ErrorMessage
                  name="status"
                  component="div"
                  className="error"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <label htmlFor="category" className="form-label">Category</label>
                <Field
                  as="select"
                  className="form-select"
                  id="category"
                  name="category"
                >
                  <option value="">Select Category</option>
                  <option value="conference">Conference</option>
                  <option value="meeting">Meeting</option>
                  <option value="event">Event</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="error"
                />
              </div>
            </div>
            <div className="mt-3">
              <label htmlFor="description" className="form-label">Description</label>
              <Field
                as="textarea"
                className="form-control"
                id="description"
                rows="3"
                placeholder="Description..."
                value={values.description}
                onChange={handleChange}
              />
              <ErrorMessage
                name="description"
                component="div"
                className="error"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-2"
              disabled={isSubmitting}
            >
              {space ? "Update Space" : "Add Space"}
            </button>
          </Form>
        )}
      </Formik>
      <Modal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} />
    </div>
  );
};

export default SpaceForm;
