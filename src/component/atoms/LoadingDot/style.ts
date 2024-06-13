import { css } from "@emotion/react";

export default {
  wrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    @keyframes bouncing-loader {
      to {
        opacity: 0.1;
        transform: translateY(-16px);
      }
    }

    .bouncing-loader {
      display: flex;
      justify-content: center;
      margin: 40px auto;
    }

    .bouncing-loader > div {
      width: 16px;
      height: 16px;
      margin: 3px 6px;
      border-radius: 50%;
      background-color: #a3a1a1;
      opacity: 1;
      animation: bouncing-loader 0.6s infinite alternate;
    }

    @keyframes bouncing-loader {
      to {
        opacity: 0.1;
        transform: translateY(-16px);
      }
    }

    .bouncing-loader > div:nth-child(2) {
      animation-delay: 0.2s;
    }

    .bouncing-loader > div:nth-child(3) {
      animation-delay: 0.4s;
    }
  `,
};
