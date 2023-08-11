import { Ecks } from './dismissible-paywall-styles'
import React from 'react'

export const DismissiblePaywall = ({ children, dismissible, onDismiss }) => (
  <>
    { children }
    <Ecks
      className='dismissible-button'
      dismissible={ dismissible }
      onClick={ onDismiss } />
  </>
)
