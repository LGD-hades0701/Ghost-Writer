import styled from "styled-components"

const StyledButton = styled.button`
  background-color: black;
  font-size: 32px;
  color: white;
  background-color: ${props => props.bg};
`;

function App() {
  return (
    <div>
      <StyledButton bg = "black">Login</StyledButton>
    </div>
  );
}


export default App;
