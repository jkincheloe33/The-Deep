import { css } from "styled-components";

export const sizes = {
  down: {
    lg: 1079,
    md: 959,
    sm: 666,
    xl: 1439,
    xs: 479,
    xxl: 1949,
  },
  up: {
    lg: 1080,
    md: 960,
    sm: 667,
    xl: 1440,
    xs: 480,
    xxl: 1950,
  },
};

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units
// prettier-ignore
export const media = {
  down: Object.keys(sizes.down).reduce((accumulator, label) => {
    const emSize = sizes.down[label] / 16;
    accumulator[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)}
      }
    `;
    return accumulator;
  }, {}),
  up: Object.keys(sizes.up).reduce((accumulator, label) => {
    const emSize = sizes.up[label] / 16;
    accumulator[label] = (...args) => css`
      @media (min-width: ${emSize}em) {
        ${css(...args)}
      }
    `;
    return accumulator;
  }, {})
};
