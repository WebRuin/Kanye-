import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

const StyledFooter = styled.footer`
  padding: 3rem 0 2rem 0;
  text-align: center;
`

const A = styled.a`
  color: #fff;
  padding: 4px 3px;

  &:hover {
    background: #c7e303;
    color: #0365e3;
    text-decoration: none;
    t
  }
`

const Footer = () => (
  <StyledFooter>
    Made with <FontAwesomeIcon icon={faHeart} color="red" />{" "}
    <A href="https://github.com/WebRuin">Tim Smith</A> using{" "}
    <A href="kanye.rest">Kanye Rest</A>
  </StyledFooter>
)

export default Footer
