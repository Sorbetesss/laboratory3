import React from 'react'

import Badge from '../Badge'

interface PhaseBannerProps {
  fullWidth?: boolean
  link?: string
  phase?: 'alpha' | 'beta'
}

const PhaseBanner: React.FC<PhaseBannerProps> = ({
  children,
  fullWidth = false,
  link = '/feedback',
  phase = 'alpha',
}) => (
  <div className={`rn-phase-banner rn-phase-banner--${phase}`}>
    <div className={!fullWidth ? 'rn-container' : 'rn-phase-banner__container'}>
      <Badge size="small" color="primary">
        {phase}
      </Badge>
      <span className="rn-phase-banner__text">
        {children || (
          <>
            This is a new service, <a href={link}>Your feedback</a> will help to
            improve it
          </>
        )}
      </span>
    </div>
  </div>
)

PhaseBanner.displayName = 'PhaseBanner'

export default PhaseBanner
