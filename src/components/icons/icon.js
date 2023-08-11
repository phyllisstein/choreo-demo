import { Root } from './icon-styles'

export const Icon = ({ children, ...props }) => (
  <Root aria-hidden { ...props }>
    { children }
  </Root>
)
