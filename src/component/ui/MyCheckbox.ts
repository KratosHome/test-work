import styled from "styled-components";

export const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  position: absolute;
  height: 0;
  width: 0;
`;

export const StyledCheckbox = styled.div<{ checked?: boolean }>`
  width: 20px;
  height: 20px;
  background: ${props => (props.checked ? "#007bff" : "transparent")};
  border: 2px solid #007bff;
  border-radius: 3px;
  transition: background-color 0.2s, border-color 0.2s;

  ${CheckboxContainer}:hover & {
    border-color: #0056b3;
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }

  &:after {
    content: '';
    position: absolute;
    display: ${props => (props.checked ? "block" : "none")};
    left: 5px;
    top: 1px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

export const CheckboxLabel = styled.label`
  margin-left: 8px;
`;
