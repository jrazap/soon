const SocialLinks = () => {
  const links = [
    {
      title: "Facebook",
      icon: "fa-facebook",
      url: "https://www.fb.com/jrazap1",
    },
    {
      title: "Github",
      icon: "fa-github",
      url: "https://github.com/jrazap",
    },
    {
      title: "linkedin",
      icon: "fa-linkedin",
      url: "https://www.linkedin.com/in/jrazap/",
    },
    {
      title: "instagram",
      icon: "fa-instagram",
      url: "https://www.instagram.com/jrazap/",
    },
  ];

  return (
    <div className="social">
      <ul>
        {links.map((item) => {
          return (
            <li key={item.title}>
              <a href={item.url} target="_blank" rel="noreferrer">
                <i className={`fa ${item.icon}`}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
