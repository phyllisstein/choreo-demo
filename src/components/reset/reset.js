import { createGlobalStyle } from 'styled-components'

/**
 * Borrowed from the YUI library CSS reset, minus several color changes and
 * IE-specific legacy patterns.
 */
export const Reset = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    overflow: hidden;
  }

  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  input,
  textarea,
  p,
  blockquote,
  th,
  td {
    margin: 0;
    padding: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  fieldset,
  img {
    border: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  caption,
  th {
    text-align: left;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    font-size: 100%;
  }

  q::before,
  q::after {
    content: '';
  }

  abbr,
  acronym {
    font-variant: normal;
    border: 0;
  }

  sup {
    vertical-align: text-top;
  }

  sub {
    vertical-align: text-bottom;
  }

  input,
  textarea,
  select {
    font-weight: inherit;
    font-size: inherit;
    font-family: inherit;
  }
`
