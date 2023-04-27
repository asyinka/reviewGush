const WaitlistSection = () => {
  return (
    <div className="waitlist-card waitlist-card--primary">
      <h2 className="waitlist-card__cta">Enjoy 30 days free PRO trial</h2>
      <h2 className="waitlist-card__heading">Join Our Waitlist</h2>
      <p>
        Be the first to receive the good news from us when we launch. For the
        first 100 signups, we are giving out 30 days free trial for our pro
        subscriptions.
      </p>
      <form action="" className="waitlist-card__form">
        <input
          type="text"
          className="data-input data-inp"
          id="firstName"
          required
          placeholder="First Name"
        />
        <input
          type="text"
          className="data-input data-inp"
          id="lastName"
          required
          placeholder="Last Name"
        />
        <div className="emailInput-wrapper data-inp">
          <input
            className="emailInput data-input"
            type="email"
            placeholder="Enter your email"
          />
          <button className="waitlist-button button-primary button-primary--text">
            Join Waitlist
          </button>
        </div>
      </form>
    </div>
  );
};

export default WaitlistSection;
