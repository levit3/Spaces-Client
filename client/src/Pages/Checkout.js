import React, { useState, useEffect } from "react";
import "./CSS/Checkout.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import PageNotFound from "./PageNotFound";
const API = process.env.REACT_APP_SERVER_API;

function Checkout() {
  const [selectedMethod, setSelectedMethod] = useState("paypal");
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const { id, start_date, end_date, space_id, user_id, total_price } =
    location.state || {};
  const [image, setImage] = useState("");

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    ...(selectedMethod === "paypal"
      ? {
          paypalEmail: Yup.string()
            .email("Invalid email format")
            .required("PayPal Email is required"),
        }
      : {
          mpesaPhone: Yup.string().required("Mpesa Phone Number is required"),
        }),
  });

  useEffect(() => {
    fetch(`${API}/api/bookings/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        setBooking(data);
        fetch(`${API}/api/space-images/${space_id}`)
          .then((response) => response.json())
          .then((data) => {
            setImage(data.image_urls[0]);
            setLoading(false);
          });
      });
  }, []);

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleClick = (method) => {
    setSelectedMethod(method);
  };

  const handleBack = () => {
    window.history.back();
  };

  const processPayment = (values) => {
    const paymentData = {
      booking_id: booking.id,
      payment_method: selectedMethod,
      user_id: booking.user.id,
      amount: booking.total_price,
      ...(selectedMethod === "mpesa" && { phone_number: values.mpesaPhone }),
      ...(selectedMethod === "paypal" && { paypalEmail: values.paypalEmail }),
    };

    fetch(`${API}/api/payments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paymentData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .then((data) => {
        if (selectedMethod === "paypal") {
          const url = data.approval_url;
          const width = 400;
          const height = 600;
          const left = (window.innerWidth - width) / 2;
          const top = (window.innerHeight - height) / 2;

          window.open(
            url,
            "Login",
            `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
          );
        } else {
          navigate("/payment-success", { state: id });
        }
      })
      .catch((error) => {
        console.error("Error processing payment:", error);
      });
  };

  if (
    !location.state ||
    !id ||
    !start_date ||
    !end_date ||
    !space_id ||
    !user_id ||
    !total_price
  ) {
    return <PageNotFound />;
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner">Fetching</div>
      </div>
    );
  }

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <section className="checkout-section">
          <header className="checkout-header">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/31b658a717fde6cd8a2dc59b7fac2d81e75ebc91ef9bce56d48743e1f89d085e?apiKey=8ad21786488a40e8a18ed0f9f1e05271&&apiKey=8ad21786488a40e8a18ed0f9f1e05271"
              alt=""
              className="header-logo"
              onClick={handleBack}
            />
            <h1 className="header-title">Checkout</h1>
          </header>

          <section className="contact-info">
            <div className="contact-header">
              <h2 className="contact-title">Contact Information</h2>
            </div>
          </section>
          <Formik
            enableReinitialize={true}
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              paypalEmail: "",
              mpesaPhone: "",
              date: getCurrentDate(),
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              processPayment(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="contact-form">
                <section className="contact-info">
                  <div className="form-group">
                    <div className="form-field">
                      <label htmlFor="firstName" className="field-label">
                        First Name
                      </label>
                      <Field
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="text-input"
                        placeholder="First Name"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="error"
                        style={{ color: "#a70000", fontSize: "13px" }}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="lastName" className="field-label">
                        Last Name
                      </label>
                      <Field
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="text-input"
                        placeholder="Last Name"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="error"
                        style={{ color: "#a70000", fontSize: "13px" }}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-field">
                      <label htmlFor="phoneNumber" className="field-label">
                        Phone Number
                      </label>
                      <Field
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="text-input"
                        placeholder="Phone Number"
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        className="error"
                        style={{ color: "#a70000", fontSize: "13px" }}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="email" className="field-label">
                        Email
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="text-input"
                        placeholder="Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                        style={{ color: "#a70000", fontSize: "13px" }}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-field">
                      <label htmlFor="dateInput" className="field-label">
                        Date
                      </label>
                      <Field
                        type="date"
                        id="dateInput"
                        name="date"
                        className="date-input"
                        disabled="true"
                      />
                    </div>
                  </div>
                </section>
                <section className="payment-info">
                  <h2 className="payment-title">Payment Information</h2>
                  <div className="payment-methods">
                    <button
                      type="button"
                      className={`method ${
                        selectedMethod === "paypal" ? "selected" : ""
                      }`}
                      onClick={() => handleClick("paypal")}
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.iconscout.com/icon/free/png-256/free-paypal-54-675727.png?f=webp&w=256"
                        alt="Paypal"
                        id="paypal"
                        className="payment-icon"
                        style={{ color: "#a1a4b2" }}
                      />
                    </button>
                    <button
                      type="button"
                      className={`method ${
                        selectedMethod === "mpesa" ? "selected" : ""
                      }`}
                      onClick={() => handleClick("mpesa")}
                    >
                      <img
                        loading="lazy"
                        src="https://pbs.twimg.com/ext_tw_video_thumb/1181852139011936256/pu/img/1UCUl2bSj2RCyq6H.jpg"
                        alt="Mpesa"
                        id="mpesa"
                        className="payment-icon"
                        style={{ color: "#a1a4b2" }}
                      />
                    </button>
                  </div>
                  <div className="form-group">
                    {selectedMethod === "paypal" ? (
                      <div className="form-field">
                        <label htmlFor="paypalEmail" className="field-label">
                          PayPal Email Address
                        </label>
                        <Field
                          type="email"
                          className="text-input"
                          placeholder="Email Address"
                          id="paypalEmail"
                          name="paypalEmail"
                        />
                        <ErrorMessage
                          name="paypalEmail"
                          component="div"
                          className="error"
                          style={{ color: "#a70000", fontSize: "13px" }}
                        />
                      </div>
                    ) : (
                      <div className="form-field">
                        <label htmlFor="mpesaPhone" className="field-label">
                          Mpesa Phone Number
                        </label>
                        <Field
                          type="tel"
                          className="text-input"
                          placeholder="07xxxxxxx"
                          id="mpesaPhoneNumber"
                          name="mpesaPhone"
                        />
                        <ErrorMessage
                          name="mpesaPhone"
                          component="div"
                          className="error"
                          style={{ color: "#a70000", fontSize: "13px" }}
                        />
                      </div>
                    )}
                  </div>
                </section>
                <button
                  type="submit"
                  className="pay-button"
                  disabled={isSubmitting}
                >
                  Proceed to Pay
                </button>
              </Form>
            )}
          </Formik>
        </section>

        <aside className="order-summary">
          <div className="order-item">
            <img
              loading="lazy"
              src={image}
              alt="Event image"
              className="checkout-space-image"
            />
            <div className="checkout-space-details">
              <div className="space-name">
                <h3 className="space-title">{booking.space.title}</h3>
                <p className="space-location">{booking.space.location}</p>
              </div>
              <div className="space-meta">
                <div className="space-date">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/66b71e1bcee8b939681737dbc8d2750c4241c1ca880319c8a133c095595aec15?apiKey=8ad21786488a40e8a18ed0f9f1e05271&&apiKey=8ad21786488a40e8a18ed0f9f1e05271"
                    alt=""
                    className="meta-icon"
                  />
                  <span>
                    {booking.start_date} - {booking.end_date}
                  </span>
                </div>
                <div className="space-capacity">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e72e4f7cc397f1ce9ffa2a30d458e0b59b2e070ecc4d289c5d3c36cb7ebbb3f?apiKey=8ad21786488a40e8a18ed0f9f1e05271&&apiKey=8ad21786488a40e8a18ed0f9f1e05271"
                    alt=""
                    className="meta-icon"
                  />
                  <span>100-200</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-total">
            <hr className="total-divider" />
            <div className="total-summary">
              <span>Total</span>
              <span className="total-amount">{booking.total_price}</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Checkout;
