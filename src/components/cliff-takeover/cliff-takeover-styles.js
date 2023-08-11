import {
  palette,
  responsive,
  typography,
} from '@nymag/paywall-reader-interface/styles/theme/index.js'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Root = styled.div`
  flex-direction: column;
  justify-content: flex-end;

  pointer-events: none;

  bottom: 0;

  display: flex;

  left: 0;
  position: absolute;

  height: 100vh;
  width: 100%;

  background: transparent;

  ${ ({ dismissible }) =>
    dismissible &&
    `
      box-shadow: 0 -4px 7px 0 rgba(173, 173, 173, 0.67);
      height: initial;
      top: 10px;
      bottom: auto;
  ` }
`

export const Border = styled(motion.div)`
  padding: 10px;

  background: ${ palette.css.white};

  pointer-events: auto;
`

export const GreyAreaWrapper = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.5);

  height: inherit;

  pointer-events: auto;

  ${ ({ hidden }) =>
    hidden &&
    `
    display: none;
  ` }
`

export const MainWrapper = styled.div`
  text-align: center;
  border: 1px solid #767676;

  /* Didn't find a better way of overriding the styles */
  .dismissible-button {
    position: absolute;
    right: 22px;
    top: 22px;

    margin: 0;
    padding: 0;
  }
`

export const StatusMessage = styled.div`
  margin-top: 23px;

  color: #797979;
  font-family: ${ typography.sansFamily};
  font-size: 14px;
  letter-spacing: 0.25px;
  line-height: 1.14;
  text-align: center;

  ${ ({ dismissible }) =>
    dismissible &&
    `
      color: #000;
      margin-right: 15px;
      margin-top: 15px;

  ` }

  ${ responsive.greaterThan(
      'md',
      css`
      line-height: 1.29;
      margin-top: 52px;

      ${ ({ dismissible }) =>
          dismissible &&
          `
          margin-right: 0;
          margin-top: 14px;
      ` }
    `,
    )}
`

export const VerticalLine = styled.span`
  margin: 0 10px;
  border-left: 2px solid #BDBDBD;
`

export const PromoMessage = styled.div`
margin: 60px 30px 0 30px;

color: #111;
font-family: ${ typography.slabFamily};
font-size: 32px;
font-stretch: condensed;
font-style: normal;
font-weight: bold;
letter-spacing: -0.33px;
line-height: 0.94;
text-align: center;

${ ({ dismissible }) =>
    dismissible &&
    `
      margin-top: 41px;
  ` }

${ ({ isImageVariation }) =>
    isImageVariation &&
    `
    margin-top: 14px;
  ` }

${ responsive.greaterThan(
      'md',
      css`
      margin: 129px 50px 0;

      font-size: 36px;
      line-height: 1;
      letter-spacing: -0.36px;

      ${ ({ isImageVariation }) =>
          isImageVariation &&
          `
          margin-top: 17px;
      ` }

      ${ ({ dismissible }) =>
          dismissible &&
          `
          font-size: 32px;
          letter-spacing: -0.32px;
          margin: 78px 99px 0;
      ` }
    `,
    )}

${ responsive.greaterThan(
      'lg',
      css`
      font-size: 40px;
      line-height: 0.9;
      letter-spacing: -0.4px;

      ${ ({ dismissible }) =>
          dismissible &&
          `
          font-size: 32px;
          letter-spacing: -0.32px;
          margin-top: 39px;
      ` }

      ${ ({ isImageVariation }) =>
          isImageVariation &&
          `
        margin-bottom: 9px;
      ` }
    `,
    )}
`

export const PromoDescription = styled.div`
margin: 10px 30px 0;

color: #111;
font-family: ${ typography.serifFamily};
font-size: 21px;
letter-spacing: -0.25px;
line-height: 1.23;
text-align: center;

${ responsive.greaterThan(
  'md',
  css`
      font-size: 24px;
      letter-spacing: -0.24px;
      line-height: 1.08;

      margin-left: 49px;
      margin-right: 49px;

      ${ ({ dismissible }) =>
      dismissible &&
      `
          line-height: 1.25;
      ` }
    `,
)}

${ responsive.greaterThan(
  'lg',
  css`
      margin-left: 89px;
      margin-right: 89px;
    `,
)}

${ responsive.greaterThan(
  'xlg',
  css`
      margin-left: 136px;
      margin-right: 136px;
    `,
)}
`

export const SubscribeLink = styled.button`
  display: inline-block;
  height: 42px;
  margin-top: 20px;
  width: 300px;

  color: ${ palette.css.white};

  cursor: pointer;

  font-family: ${ typography.sansFamily};
  font-size: 16.8px;
  font-weight: bold;
  line-height: 1.11;

  margin: 2rem 0 1rem;

  text-decoration: none;

  background-color: ${ palette.css.black};
  border-radius: 2px;
  border: solid 1px #7F7F7F;
  border-bottom: 1px solid ${ palette.css.black};

  ${ ({ dismissible }) =>
    dismissible &&
    `
      margin-top: 38px;
  ` }

  &:hover,
  &:focus {
    color: ${ palette.css.black};

    background-color: ${ palette.css.white};
    border: 1px solid ${ palette.css.black};
  }

  ${ responsive.lessThan(
      'sm',
      css`
      width: 280px;
    `,
    )}

  ${ responsive.greaterThan(
      'md',
      css`
      line-height: normal;
      letter-spacing: -0.2px;
      text-transform: none;

      width: 346px;

      ${ ({ dismissible }) =>
          dismissible &&
          `
          margin-top: 74px;
          margin-bottom: 52px;
      ` }
    `,
    )}

  ${ responsive.greaterThan(
      'lg',
      css`
      letter-spacing: -0.28px;

      ${ ({ dismissible }) =>
          dismissible &&
          `
          margin-top:20px;
          margin-bottom: 37px;
      ` }

      ${ ({ isImageVariation }) =>
          isImageVariation &&
          `
        margin-top: 30px;
      ` }
    `,
    )}
`

export const ImageWrapper = styled.div`
  display: none;
  justify-content: center;

  ${ responsive.greaterThan(
  'md',
  css`
      margin-top: 31px;
    `,
)}

  ${ ({ isImageVariation }) =>
    isImageVariation &&
    `
    display: block;
  `}
`

export const Image = styled.img`
  width: 100%;
  max-width: 626px;
  height: intrinsic;
  display: block;
  margin: 0 auto;

  ${ responsive.greaterThan(
  'md',
  css`
      max-height: 250px;
    `,
)}

  ${ responsive.greaterThan(
  'lg',
  css`
      max-width: 738px;
      max-height: 295px;
    `,
)}
`

export const LoggedInText = styled.span`
  display: block;
  margin-bottom: 10px;
`

export const SignInText = styled.div`
  max-width: 300px;
  margin: 0 auto 2rem;

  font-size: 10.2px;
  font-family: ${ typography.sansFamily};
  letter-spacing: 1.2px;
  text-align: center;
  text-transform: uppercase;

  ${ responsive.greaterThan(
  'md',
  css`
  max-width: 715px;

  ${ ({ isImageVariation }) =>
      !isImageVariation &&
      `
    margin-bottom: 140px;
  ` }

  ${ ({ dismissible }) =>
      dismissible &&
      `
    margin-bottom: 11px;
  ` }
  `,
)} a {
    display: inline-block;

    text-decoration: underline;
    color: inherit;

    u {
      cursor: pointer;
    }
  }
`

export const AccountActionButton = styled.button`
  appearance: none;

  background: none;
  border: 0;

  color: inherit;

  cursor: pointer;

  display: inline-flex;

  font: inherit;
  letter-spacing: 1.2px;

  padding: 0;

  text-decoration: underline;
  text-transform: inherit;

  &:focus {
    border: 0;
  }

  ${ ({ isLogout }) =>
    isLogout &&
    `
      border-left: 1px solid ${ palette.css.gray};
      padding-left: 12px;
      margin-left: 10px;

  ` }

  ${ responsive.greaterThan(
      'md',
      css`
      &:hover {
        color: #000;
      }
    `,
    )}
`
