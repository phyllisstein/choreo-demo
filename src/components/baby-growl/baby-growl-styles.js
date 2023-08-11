import {
  palette,
  responsive,
} from '@nymag/paywall-reader-interface/styles/theme/index.js'
import styled, { css, keyframes } from 'styled-components'
import { FeatheredArrow as FeatheredArrowBase } from '../icons/index.js'

const slideDown = keyframes`
  from {
    transform: translateY(150%);
  }

  to {
    transform: translateY(0);
  }
`

const slideUp = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(150%);
  }
`

const animationDown = () =>
  css`
    animation: ${ slideUp } 1s ease forwards;
  `

const animationUp = () =>
  css`
    animation: ${ slideDown } 0.5s ease;
  `

export const CTA = styled.div`
  padding: 20px 0 20px 20px;

  font-family: 'MillerText';
  font-size: 15px;
  font-style: italic;
  line-height: 1.33;
  text-align: center;

  ${ responsive.greaterThan(
    'lg',
    css`
      margin: 20px;
    `,
  ) };
`

export const CTAText = styled.span`
  display: inline;

  color: ${ palette.css.black };
  font-style: italic;

  em {
    font-style: normal;
  }

  ${ responsive.greaterThan(
    'md',
    css`
      font-size: 16px;
      line-height: normal;
      letter-spacing: -0.16px;
    `,
  ) }

  ${ responsive.greaterThan(
    'lg',
    css`
      font-size: 24px;
      letter-spacing: -0.24px;
    `,
  ) }
`

export const FeatheredArrow = styled(FeatheredArrowBase)`
  display: inline-block;
  width: 16px;
  height: 11px;
  margin-left: 3px;

  fill: ${ palette.css.accent };

  ${ responsive.greaterThan(
    'md',
    css`
      width: 20px;
      height: 14px;
      margin-left: 6px;
    `,
  ) }
`

export const Root = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: [main-start content-start] 1fr [content-end control-start] 44px [control-end main-end];
  width: 100%;
  min-height: 80px;

  ${ ({ visible }) => (visible ? animationUp() : animationDown()) }

  background: ${ palette.css.white };
  border-top: 3px solid ${ palette.css.black };
  box-shadow: 0 -5px 5px 0 ${ palette.css.grayShadow };

  ${ responsive.greaterThan(
    'md',
    css`
      border-top: 0;
      box-shadow: 0 -6px 6px 0 ${ palette.css.grayShadow };
    `,
  ) }

  ${ responsive.greaterThan(
    'lg',
    css`
      height: 140px;
    `,
  ) }
`

export const SubscribeLink = styled.a`
  display: inline-block;
  margin: 0 10px 10px 10px;

  color: ${ palette.css.black };
  font-weight: 700;
  font-size: 14px;
  font-family: 'Egyptienne';
  font-style: normal;
  font-stretch: condensed;
  line-height: 1.21;
  letter-spacing: 0.5px;
  white-space: nowrap;
  text-transform: uppercase;
  text-decoration: none;

  border-bottom: 1px solid ${ palette.css.black };
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${ palette.css.accent };
    border-bottom-color: ${ palette.css.accent };
  }

  ${ responsive.greaterThan(
    'md',
    css`
      font-size: 20px;
      line-height: normal;
      letter-spacing: -0.2px;
      text-transform: none;
    `,
  ) }

  ${ responsive.greaterThan(
    'lg',
    css`
      font-size: 28px;
      letter-spacing: -0.28px;
    `,
  ) }
`
