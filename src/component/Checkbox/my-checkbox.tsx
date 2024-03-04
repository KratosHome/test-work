import { FC } from 'react'
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
} from './my-style-checkbox'

interface TaskCheckboxProps {
  completed: boolean
  onToggle: () => void
}

const MyCheckbox: FC<TaskCheckboxProps> = ({ completed, onToggle }) => {
  return (
    <CheckboxContainer onClick={onToggle}>
      <HiddenCheckbox checked={completed} readOnly/>
      <StyledCheckbox checked={completed}/>
    </CheckboxContainer>
  )
}

export default MyCheckbox
