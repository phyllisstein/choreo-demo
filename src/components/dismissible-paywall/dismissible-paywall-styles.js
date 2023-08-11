import {
  palette,
  responsive,
} from '@nymag/paywall-reader-interface/styles/theme/index.js'
import styled, { css } from 'styled-components'
import { Ecks as EcksBase } from '../icons/index.js'

export const Ecks = styled(EcksBase)`
  grid-row: 1;
  grid-column: control-start;
  width: 22px;
  height: 23px;
  margin: 10px;
  padding: 0;

  background: none;
  border: none;
  cursor: pointer;

  ${ ({ dismissible }) =>
    dismissible ||
    `
    display: none;
  ` }

  fill: ${ palette.css.gray };

  ${ responsive.greaterThan(
    'md',
    css`
      margin: 10px 0 0 5px;
    `,
  ) };

  ${ responsive.greaterThan(
    'lg',
    css`
      margin: 20px 20px 20px 0;
    `,
  ) };
`
