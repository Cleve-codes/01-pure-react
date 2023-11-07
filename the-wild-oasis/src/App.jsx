import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="horizontal">
          <Heading as="h1">The Wild Oasis</Heading>
          <div>
            <Heading as="h2">Checking IN</Heading>
            <Button variation="primary" size="medium">
              Check In
            </Button>
            <Button variation="secondary" size="small">
              Check Out
            </Button>
          </div>
        </Row>
        <Row type="vertical">
          <Heading as="h3">Guests</Heading>
          <form>
            <Input type="number" placeholder="Number of guests..." />
            <Input type="number" placeholder="Number of guests..." />
          </form>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
