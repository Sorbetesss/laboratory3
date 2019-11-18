enum POPOVER_PLACEMENT {
  ABOVE = 'above',
  BELOW = 'below',
  LEFT = 'left',
  RIGHT = 'right'
}

enum POPOVER_ARROW_POSITION {
  LEFT_BOTTOM = 'left_bottom',
  LEFT_TOP = 'left_top',
  RIGHT_BOTTOM = 'right_bottom',
  RIGHT_TOP = 'right_top',
  TOP_LEFT = 'top_left',
  TOP_RIGHT = 'top_right',
  BOTTOM_LEFT = 'bottom_left',
  BOTTOM_RIGHT = 'bottom_right'
}

const POPOVER_PLACEMENT_ARROW_POSITION_MAP = {
  [POPOVER_PLACEMENT.ABOVE]: POPOVER_ARROW_POSITION.BOTTOM_LEFT,
  [POPOVER_PLACEMENT.BELOW]: POPOVER_ARROW_POSITION.TOP_LEFT,
  [POPOVER_PLACEMENT.LEFT]: POPOVER_ARROW_POSITION.LEFT_BOTTOM,
  [POPOVER_PLACEMENT.RIGHT]: POPOVER_ARROW_POSITION.RIGHT_BOTTOM,
}

enum POPOVER_SCHEME {
  LIGHT = 'light',
  DARK = 'dark'
}

const POPOVER_CLOSE_DELAY = 1000

export {
  POPOVER_PLACEMENT,
  POPOVER_ARROW_POSITION,
  POPOVER_PLACEMENT_ARROW_POSITION_MAP,
  POPOVER_SCHEME,
  POPOVER_CLOSE_DELAY
}
