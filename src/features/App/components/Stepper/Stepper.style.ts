import styled from "styled-components";

const ErrorMsg = styled.div`
  background: red;
  color: white;
  position: absolute;
  bottom: 100%;
  right: 0;
  font-size: 10px;
  padding: 4px;
`;

const Stepper = styled.div`
  position: relative;
  display: flex;
  height: 46px;
`;

const Input = styled.input`
  border: 1px solid black;
  height: 46px;
  padding: 0 13px;
  width: 100%;
  font-size: 20px;
  flex-grow: 1;
  &:disabled {
    border: 1px solid rgba(118, 118, 118, 0.3);
    opacity: 0.7;
  }
`;


export { ErrorMsg, Stepper, Input };
