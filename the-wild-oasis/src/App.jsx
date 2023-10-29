import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 30px;
  background-color: yellow;
  font-weight: 600;
`;

const Button = styled.button`
  background-color: purple;
  cursor: pointer;
  margin: 20px;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
  height: 40px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button>Check In</Button>
        <Button>Check Out</Button>
        <Input type="number" placeholder="Number of guests..." />
      </StyledApp>
    </>
  );
}

export default App;
