import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <h2>About the Project</h2>
      <p>
        LuckyNumber is a project built by Ryan Haraki, a highchool senior
        currently living in Vancouver, BC. The goal of the project was to create
        a very simple copy of a cryptocurrency or NFT that maintains a
        value-retaining aspect. In this case, the value is that only the numbers
        1-10,000 can be chosen and that each number can be owned by only one
        wallet. A wallet can only have one number at a time. There is also no
        "search" functionality for what numbers have been chosen in order to
        keep unpicked numbers a secret, hence making them seem "more" valuable.
      </p>
      If you enjoy using the project, want to see some of my other work, want
      tell me your lucky number, or want to connect on social and chat about
      anything related to tech/startups/blockchain and investing(or anything
      else really) feel free to connect with me on these socials:
      <ul>
        <li>
          {" "}
          <a href="https://twitter.com/ryan_haraki">Twitter</a>
        </li>
        <li>
          <a href="https://www.instagram.com/ryan.haraki">Instagram</a>
        </li>
        <li>
          <a href="https://github.com/RyanHaraki/">Github</a>
        </li>
      </ul>
      <p>For all you devs, source code can be found here:</p>
    </Container>
  );
};
export default About;

const Container = styled.div`
  a {
    text-decoration: none;
    color: #1a72d5;

    :hover {
      color: #0e519e;
    }
  }
`;
