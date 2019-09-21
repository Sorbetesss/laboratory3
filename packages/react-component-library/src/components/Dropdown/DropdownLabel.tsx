import React from 'react'
import { IconVisibility, IconVisibilityOff } from '@royalnavy/icon-library'

import { DropdownOption } from './DropdownOption'

export const DropdownLabel: React.FC<DropdownOption> = ({
  isDisabled = false,
  hidden = false,
  icon: Icon,
  label,
  rightContent: RightContent,
  visible = false,
}) => {
  return (
    <div className={`rn-dropdownlabel ${isDisabled ? 'is-disabled' : ''}`}>
      {Icon && (
        <span
          className="rn-dropdownlabel__start-adornment"
          data-testid="rn-dropdownlabel__start-adornment"
        >
          <Icon />
        </span>
      )}
      <span
        className="rn-dropdownlabel__label"
        data-testid="dropdownlabel__label"
      >
        {label}
      </span>
      {hidden && (
        <span data-testid="rn-dropdownlabel__iconinvisible">
          <IconVisibilityOff className="rn-dropdownlabel__end-adornment" />
        </span>
      )}
      {visible && (
        <span data-testid="rn-dropdownlabel__iconvisible">
          <IconVisibility className="is-active rn-dropdownlabel__end-adornment" />
        </span>
      )}
      {RightContent && (
        <span
          className="rn-dropdownlabel__end-adornment"
          data-testid="rn-dropdownlabel__rightcontent"
        >
          <RightContent />
        </span>
      )}
    </div>
  )
}
