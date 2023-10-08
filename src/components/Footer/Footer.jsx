import React from "react";

import Logo from "../../assets/logo_github_project_hub.png";
import "./Footer.css";

const footerLinks = [
  {
    label: "GitHub",
    url: "https://github.com/Pinaka-Pani-18/Hacktoberfest-Projects-Hub",
  },
  {
    label: "Contributing",
    url: "https://github.com/Pinaka-Pani-18/Hacktoberfest-Projects-Hub/blob/main/CONTRIBUTING.md",
  },
  {
    label: "Contact",
    url: "https://github.com/Pinaka-Pani-18/Hacktoberfest-Projects-Hub/issues/new/choose",
  },
  {
    label: "Privacy Policy",
    url: "https://github.com/Pinaka-Pani-18/Hacktoberfest-Projects-Hub/blob/main/LICENSE",
  },
  {
    label: "Terms of Service",
    url: "https://github.com/Pinaka-Pani-18/Hacktoberfest-Projects-Hub/blob/main/CODE_OF_CONDUCT.md",
  },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={Logo} alt="Logo GitHub Project Hub" />
        </div>
        <div className="footer-links">
          <ul>
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          &copy; {new Date().getFullYear()} Hacktoberfest Projects Hub. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};
