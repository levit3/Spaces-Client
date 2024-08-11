import React from "react";
import "./CSS/PageNotFound.css";

function PageNotFound() {
  return (
    <main className="not-found-page">
      <img
        loading="lazy"
        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="not-found-image"
      />
      <section className="error-container">
        <div className="error-text">
          <h1>Page not found</h1>
          <p>
            Sorry, the page you are looking for doesn't exist or has been moved.
            Here are some helpful links:
          </p>
        </div>
        <div className="button-container">
          <button className="button outline">Go back</button>
          <button className="button solid">Take me home</button>
        </div>
      </section>
    </main>
  );
}

export default PageNotFound;
