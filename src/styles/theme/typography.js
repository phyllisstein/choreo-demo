import { css } from 'styled-components'
export const sansFamily =
  "'Libre Franklin', -apple-system, BlinkMacSystemFont, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"

export const serifFamily =
  "'MillerText', Georgia, 'Times New Roman', Times, serif"

export const slabFamily =
  "'Egyptienne', Garamond, 'Times New Roman', Times, serif"

export const sans = css`
  font-family: ${ sansFamily };
`

export const serif = css`
  font-family: ${ serifFamily };
`

export const slab = css`
  font-family: ${ slabFamily };
`
