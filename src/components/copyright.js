const Copyright = () => {
  return (
    <div className="credit">
      <p>
        <span>&copy; {new Date().getFullYear()} | Proudly created with</span>{" "}
        <a href="https://jrazap.com/" aria-label="copyright">Mohamed Elazap</a>
      </p>
    </div>
  );
};

export default Copyright;
