import React from 'react'
import {
  StyledUserItem,
  StyledUserItemIcon,
  StyledUserItemText,
} from './partials'
import { NavItem } from '../../../common/Nav'

export interface SidebarUserItemProps extends NavItem {
  /**
   * Optional icon to display to the left of the user navigation item.
   */
  icon?: React.ReactNode
}

export const SidebarUserItem = ({ icon, link }: SidebarUserItemProps) => {
  const linkElement = link as React.ReactElement

  return (
    <StyledUserItem>
      {React.cloneElement(linkElement, {
        ...link.props,
        children: (
          <>
            {icon && <StyledUserItemIcon>{icon}</StyledUserItemIcon>}
            <StyledUserItemText>
              {linkElement.props.children}
            </StyledUserItemText>
          </>
        ),
      })}
    </StyledUserItem>
  )
}

SidebarUserItem.displayName = 'SidebarUserItem'
