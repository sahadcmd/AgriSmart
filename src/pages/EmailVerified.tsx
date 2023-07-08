const EmailVerified = () => {
  return (
    <div>
      <h3>Please verify you Email and press Done</h3>

      <button onClick={() => (window.location.href = "/")}>Done</button>
    </div>
  );
};

export default EmailVerified;
