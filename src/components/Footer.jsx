import React from "react";
import Logo from "../assets/logo_github_project_hub.png";

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
    <footer className="bg-gray-800 text-white py-5">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        <div>
          <img
            src={Logo}
            alt="Logo GitHub Project Hub"
            className="max-w-[75px]"
          />
        </div>
        <div>
          <ul className="list-none p-0 flex flex-wrap justify-end">
            {footerLinks.map((link, index) => (
              <li key={index} className="mr-5 mb-2">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white no-underline transition-colors duration-300 ease-in-out hover:text-blue-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p className="text-center mt-2 px-4">
          &copy; {new Date().getFullYear()} Hacktoberfest Projects Hub. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};
