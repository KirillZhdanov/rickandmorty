import styled from "styled-components";

const StyledImage = styled.img`
  max-width:600px;
  max-height:600px;
  border: ${(props: any) => `1px solid ${props?.border || "black"}`};
`
const StyledLink = styled.a`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: black;
    border: 2px solid black;
    text-decoration:none;
`
const StyledSubTitle = styled.h3`
  color: #000;
  font-size:1.3em;
  font-weight: 600;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

const Loader = styled.div`
    width: 100%;
    height: 170px;
    `;
export { StyledImage, StyledLink, StyledSubTitle, Loader }
