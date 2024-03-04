import React from 'react';
import {CheckboxContainer, HiddenCheckbox, StyledCheckbox} from "./MyCheckbox";

const Checkbox: React.FC<TaskCheckboxProps> = ({ completed, onToggle }) => {
    return (
        <CheckboxContainer onClick={onToggle}>
            <HiddenCheckbox checked={completed} readOnly />
            <StyledCheckbox checked={completed} />
        </CheckboxContainer>
    );
};

export default Checkbox;
