import React from 'react'

import { getId, getKey } from '../../helpers'
import { usePageChange } from './usePageChange'
import { PAGINATION_BUTTON_VARIANT, PaginationButton } from './PaginationButton'
import { PaginationErrorMessage } from './PaginationErrorMessage'
import { StyledList } from './partials/StyledList'
import { StyledListItem } from './partials/StyledListItem'
import { StyledTextInput } from './partials/StyledTextInput'
import { StyledTotalPages } from './partials/StyledTotalPages'

export interface PaginationProps {
  /**
   * Starting page to display from range on first render.
   */
  initialPage?: number
  /**
   * Optional HTML `name` attribute to apply to the component (a11y).
   */
  name?: string
  /**
   * Optional handler called when the value of currently selected page changes.
   */
  onChange?: (currentPage: number, totalPages: number) => void
  /**
   * Number of items within a paginated collection per page.
   */
  pageSize: number
  /**
   * Total number of items within a paginated collection.
   */
  total: number
}

export const Pagination: React.FC<PaginationProps> = ({
  initialPage = 1,
  name = getId('pagination'),
  onChange,
  pageSize,
  total,
  ...rest
}) => {
  const totalPages = Math.ceil(total / pageSize)
  const { changePage, currentPage, hasError, onKeyDown } = usePageChange(
    initialPage,
    totalPages,
    onChange
  )

  const isOnFirstPage = currentPage === 1
  const isOnLastPage = currentPage === totalPages

  return (
    <StyledList data-testid="pagination" {...rest}>
      <StyledListItem key={getKey('pagination-item', 'first')}>
        <PaginationButton
          disabled={isOnFirstPage}
          onClick={() => changePage(1)}
        >
          {PAGINATION_BUTTON_VARIANT.FIRST}
        </PaginationButton>
      </StyledListItem>
      <StyledListItem key={getKey('pagination-item', 'previous')}>
        <PaginationButton
          disabled={isOnFirstPage}
          onClick={() => changePage(currentPage - 1)}
        >
          {PAGINATION_BUTTON_VARIANT.PREV}
        </PaginationButton>
      </StyledListItem>
      <StyledListItem>
        {hasError && <PaginationErrorMessage />}
        <StyledTextInput
          aria-label="Enter page number"
          onKeyDown={onKeyDown}
          name={name}
          value={currentPage.toString()}
        />
        <StyledTotalPages>of {totalPages}</StyledTotalPages>
      </StyledListItem>
      <StyledListItem key={getKey('pagination-item', 'next')}>
        <PaginationButton
          disabled={isOnLastPage}
          onClick={() => changePage(currentPage + 1)}
        >
          {PAGINATION_BUTTON_VARIANT.NEXT}
        </PaginationButton>
      </StyledListItem>
      <StyledListItem key={getKey('pagination-item', 'last')}>
        <PaginationButton
          disabled={isOnLastPage}
          onClick={() => changePage(totalPages)}
        >
          {PAGINATION_BUTTON_VARIANT.LAST}
        </PaginationButton>
      </StyledListItem>
    </StyledList>
  )
}

Pagination.displayName = 'Pagination'
