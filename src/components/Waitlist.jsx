import { useState } from "react";

const WaitlistSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmission = (event) => {
    event.preventDefault();
    setLoading(true)

    setTimeout(() => {
      alert("form submitted")
      setLoading(false)
    }, 2000);
  }

  return (
    <div className="waitlist-card waitlist-card--primary" id="waitlist">
      <h2 className="waitlist-card__cta">Enjoy 30 days free PRO trial</h2>
      <h2 className="waitlist-card__heading">Join Our Waitlist</h2>
      <p>
        Be the first to receive the good news from us when we launch. For the
        first 100 signups, we are giving out 30 days free trial for our pro
        subscriptions.
      </p>
      <form onSubmit={handleSubmission} className="waitlist-card__form">
        <input
          type="text"
          className="data-input data-inp"
          id="firstName"
          required
          placeholder="First Name"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value)
          }}
        />
        <input
          type="text"
          className="data-input data-inp"
          id="lastName"
          required
          placeholder="Last Name"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value)
          }}
        />
        <div className="emailInput-wrapper data-inp">
          <input
            className="emailInput data-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
          <button disabled={loading} className="waitlist-button button-primary button-primary--text">
            Join Waitlist
          </button>
        </div>
      </form>
    </div>
  );
};

export default WaitlistSection;
