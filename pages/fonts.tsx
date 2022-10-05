import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Century';
        src: url('./fonts/CenturyExpandedLTStd.woff2') format('woff2'),
            url('./fonts/CenturyExpandedLTStd.woff') format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }
      /* latin */
      @font-face {
          font-family: 'Gerstner';
          src: url('./fonts/GerstnerProgramm-Regular.woff2') format('woff2'),
              url('./fonts/GerstnerProgramm-Regular.woff') format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
      }
      `}
  />
)

export default Fonts