import { css } from 'styled-components'

const breakpoints = {
  lg: '1100px',
  max: '1440px',
  md: '767px',
  sm: '375px',
  xlg: '1200px',
  xsm: '319px',
}

export const between = (start, end, style) => css`
  /* stylelint-disable-next-line */
  @media screen and (min-width: ${ breakpoints[
      start
    ] }) and (max-width: ${ breakpoints[end] }) {
    ${ style }
  }
`

export const greaterThan = (breakpoint, style) => css`
  @media screen and (min-width: ${ breakpoints[breakpoint] }) {
    ${ style }
  }
`

export const lessThan = (breakpoint, style) => css`
  @media screen and (max-width: ${ breakpoints[breakpoint] }) {
    ${ style }
  }
`
