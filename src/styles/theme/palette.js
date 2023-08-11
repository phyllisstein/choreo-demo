import chroma from 'chroma-js'
import R from 'ramda'

export const js = {
  accent: chroma('#EC2C00'),
  black: chroma('#000000'),
  gray: chroma('#767676'),
  grayShadow: chroma('#ADADAD').alpha(0.5),
  white: chroma('#FFFFFF'),
}

export const css = R.map(R.invoker(0, 'css'), js)
