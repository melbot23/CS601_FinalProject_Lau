// Contact page - user can submit a form

import { useState } from "react";
import { useForm } from "react-hook-form";
import "../css/Contact.css";
import '../css/Layout.css';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (data) => {
    console.log("Message sent!", data);
    setSuccessMessage("Message sent!");

    // Clear the message after 5 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  };

  return (
    <div className="contact-form">
      <header className="header">
        <h2>Contact Me</h2>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-input">
          <label className="form-label">First Name</label>
          {/* Use register to track input values and apply rules like required and pattern. */}
          <input
            type="text"
            {...register("firstName", {
              required: "Required",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Enter a valid name."
              }
            })}
          />

          {/* Logical and (&&) renders the correct error message for each condition. */}
          {errors.firstName && <span className="error-message">{errors.firstName.message}</span>}
        </div>

        <div className="form-input">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            {...register("lastName", {
              required: "Required",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Enter a valid name."
              }
            })}
          />
          {errors.lastName && <span className="error-message">{errors.lastName.message}</span>}
        </div>

        <div className="form-input">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            {...register("email", { required: "Required" })}
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>

        <div className="form-input">
          <label className="form-label">Subject</label>
          <input type="text" {...register("subject")} />
        </div>

        <div className="form-input">
          <label className="form-label">Message</label>
          <textarea {...register("message")} />
        </div>

        <button className="button" type="submit">Submit</button>

        {successMessage && (
          <span className="success-message">{successMessage}</span>
        )}
      </form>
    </div>
  );
}