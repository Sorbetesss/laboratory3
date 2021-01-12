import React from 'react'

import { ButtonGroupItemProps } from '.'
import { BUTTON_SIZE } from '../Button'
import logger from '../../utils/logger'
import { StyledButtonGroup } from './partials/StyledButtonGroup'

export interface ButtonGroupProps {
  children: React.ReactElement<ButtonGroupItemProps>[]
  className?: string
  size?:
    | typeof BUTTON_SIZE.LARGE
    | typeof BUTTON_SIZE.REGULAR
    | typeof BUTTON_SIZE.SMALL
    | typeof BUTTON_SIZE.XLARGE
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className,
  size = BUTTON_SIZE.REGULAR,
}) => {
  return (
    <StyledButtonGroup
      className={className}
      $size={size}
      role="group"
      data-testid="buttongroup"
    >
      {React.Children.map(
        children,
        (child: React.ReactElement<ButtonGroupItemProps>) => {
          if (child.props.size) {
            logger.warn(
              'Prop `size` on `ButtonGroupItem` will be replaced by `size` from `ButtonGroup`'
            )
          }

          return React.cloneElement(child, {
            ...child.props,
            size,
          })
        }
      )}
    </StyledButtonGroup>
  )
}

ButtonGroup.displayName = 'ButtonGroup'
