import React, { Component } from "react";
import { withRouter } from "react-router";
import { Spring, config } from "react-spring/renderprops";
import Button from "./Button";
import { ContactContainer, FormWrapper } from "../styles/ContactStyle";
import mail from "../assets/mail.png";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  handleSubmit = (e) => {
    const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValidationRegex.test(this.state.email)) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state }),
      })
        .then(() => alert("Message Sent!"))
        .catch((error) => alert(error));

      setTimeout(() => {
        this.props.history.push("/");
      }, 1000);
    } else {
      alert("Invalid e-mail");
    }

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;

    return (
      <Spring
        config={config.gentle}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        delay={200}
      >
        {(props) => (
          <ContactContainer style={props}>
            <h3>Let's Talk</h3>
            <FormWrapper>
              <form className="form" onSubmit={this.handleSubmit}>
                <label htmlFor="name" className="input-field">
                  <p>Name</p>
                  <div className="inputDiv">
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </label>

                <label htmlFor="email" className="input-field">
                  <p>Email</p>
                  <div className="inputDiv">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </label>

                <label htmlFor="message" className="input-field">
                  <p>Message</p>
                  <div className="inputDiv">
                    <textarea
                      name="message"
                      value={message}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </label>

                <Button primary type="submit">
                  <h5 className="btn-text">Send</h5>
                </Button>
              </form>
            </FormWrapper>
            <Spring
              config={{ mass: 1, tension: 50, friction: 13 }}
              from={{ transform: "translateX(10%)", opacity: 0 }}
              to={{ transform: "translateX(0%)", opacity: 1 }}
              delay={700}
            >
              {(props) => (
                <div className="mailbox" style={props}>
                  <img src={mail} alt="mailbox" />
                </div>
              )}
            </Spring>
          </ContactContainer>
        )}
      </Spring>
    );
  }
}

export default withRouter(Contact);
