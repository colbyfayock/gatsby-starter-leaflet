import React from "react";
import { Link } from "gatsby";
import { FaGithub } from "react-icons/fa";

import { useSiteMetadata } from "hooks";

import Container from "components/Container";

const Header = () => {
  const { companyName, companyUrl } = useSiteMetadata();

  return (
    <header>
      <Container type="content">
        <p>
          <Link to="/">{companyName}</Link>
        </p>
        <ul>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <a href={companyUrl}>
              <span className="visually-hidden">Github</span>
              <FaGithub />
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
