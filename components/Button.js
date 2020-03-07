import styled from "styled-components"

const ButtonWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  margin-top: 1rem;
`

const StyledButton = styled.button`
  display: grid;
  font-size: 1.5rem;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: #f53edd;
  padding: 2rem 3.5rem;
  box-shadow: 20px 20px 60px #c81cb2, -20px -20px 60px #ff47fe;

  &:hover {
    border-radius: 50px;
    background: #f53edd;
    padding: 2rem 3.5rem;
    background: linear-gradient(145deg, #ff42ec, #dd38c7);
    box-shadow: 20px 20px 60px #d035bc, -20px -20px 60px #ff47fe;
  }
`
const Button = props => (
  <ButtonWrapper>
    <StyledButton onClick={props.getMore}>Get new quote</StyledButton>
  </ButtonWrapper>
)

export default Button
