import { useState } from "react";
import { useForm } from "react-hook-form";
//import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      // Use emailjs to email contact form data
      //   await emailjs.send(
      //     import.meta.env.VITE_SERVICE_ID,
      //     import.meta.env.VITE_TEMPLATE_ID,
      //     templateParams,
      //     import.meta.env.VITE_PUBLIC_KEY,
      //   );

      // Display success alert
      toggleAlert("Form submission was successful!", "success");
    } catch (e) {
      console.error(e);
      // Display error alert
      toggleAlert("Uh oh. Something went wrong.", "danger");
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <div className="ContactForm">
      <div className="why-we">
        <section className=" contact-img  ">
          <img src="https://plus.unsplash.com/premium_vector-1683141270861-5acaa83d5ce4?bg=FFFFFF&w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5zdXJhbmNlfGVufDB8fDB8fHww"></img>
        </section>
        <section className="contact-content">
          <h1>Why WE ?</h1>
          <p>
            Policy+ is your premier destination for insurance solutions because
            we prioritize your peace of mind above all else. With Policy+,
            you're not just getting coverage; you're gaining a trusted partner
            dedicated to simplifying the insurance process for you. Our team of
            experts is committed to providing personalized support tailored to
            your specific needs, ensuring that you make informed decisions every
            step of the way. Transparency and integrity are our cornerstones,
            meaning you can trust us to offer clear, honest guidance and advice.
            Plus, we understand that life is unpredictable, so our flexible
            policies can adapt to your changing circumstances seamlessly.
            Whether you're seeking protection for your family, home, or
            business, Policy+ has you covered. Choose us for a seamless
            insurance experience that prioritizes your well-being and security,
            because when you choose Policy+, you're choosing peace of mind.
          </p>
        </section>
      </div>
      <h1>Get in Touch with Policy+ Experts</h1>
      <div className="contactContainer">
        <div className="row">
          <div className="col-12 text-center">
            <div className="contactForm">
              
              <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Row 1 of form */}
                <div className="row formRow">
               
                  <div className="col-6">
                    <input
                      type="text"
                      name="name"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Please enter your name",
                        },
                        maxLength: {
                          value: 30,
                          message: "Please use 30 characters or less",
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Name"
                    ></input>
                    {errors.name && (
                      <p className="errorMessage">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="col-6">
                    <input
                      type="email"
                      name="email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      className="form-control formInput"
                      placeholder="Email address"
                    ></input>
                    {errors.email && (
                      <p className="errorMessage">
                        Please enter a valid email address
                      </p>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className="row formRow">
                  <div className="col">
                    <input
                      type="text"
                      name="subject"
                      {...register("subject", {
                        required: {
                          value: true,
                          message: "Please enter a subject",
                        },
                        maxLength: {
                          value: 75,
                          message: "Subject cannot exceed 75 characters",
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Subject"
                    ></input>
                    {errors.subject && (
                      <p className="errorMessage">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className="row formRow">
                  <div className="col">
                    <textarea style={{backgroundColor:"#e6e6e6"}}
                      rows={3}
                      name="message"
                      {...register("message", {
                        required: true,
                      })}
                      className="form-control formInput"
                      placeholder="Message"
                    ></textarea>
                    {errors.message && (
                      <p className="errorMessage">
                        Please enter a message
                      </p>
                    )}
                  </div>
                </div>

                <button
                  className="submit-btn btn btn-primary "
                  disabled={disabled}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {alertInfo.display && (
        <div
          className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
          role="alert"
        >
          {alertInfo.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() =>
              setAlertInfo({ display: false, message: "", type: "" })
            } // Clear the alert when close button is clicked
          ></button>
        </div>
      )}
    </div>
  );
};

export default Contact;
