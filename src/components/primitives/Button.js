import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

// prettier-ignore
const Anchor = styled.a`
  color: inherit;
  font-weight: 400;
  letter-spacing: 0.5em;
  text-transform: uppercase;

  ${p => p.inline && `
    color: white;
    font-size: 30px;
    font-weight: 100;
    position: relative;
    text-align: center;

    &::before {
      background: rgba(253, 60, 87, 0.5);
      content: '';
      height: 100%;
      left: 50%;
      max-height: 5px;
      position: absolute;
      top: 52%;
      transform: translate(-52%, -50%);
      transition: max-height 0.25s ease;
      width: 100%;
    }
  `}
`;

// prettier-ignore
const Wrapper = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  /* display: inline-block; */
  padding: 15px 30px;
  transition: all 0.5s ease, transform 1s ease;
  
  ${p => !p.inline && `
    &:hover {
      border-color: rgba(253, 60, 87, 0.75);
      box-shadow: 0 0 10px rgba(253, 60, 87);
      color: rgba(253, 60, 87);
      transform: scale(1.25);
    }
  `}

  ${p => p.inline && `
    border: none;
    box-shadow: none;

    &:hover {
      a::before {
        max-height: 13px;
      }
    }
  `}
`;

const Button = ({ className, inline, onClick, path, text }) => (
  <Wrapper className={className} inline={inline} onClick={onClick}>
    <Anchor href={path} inline={inline}>
      {text}
    </Anchor>
  </Wrapper>
);

export const ButtonType = {
  onClick: PropTypes.func,
  path: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Button.propTypes = {
  ...ButtonType,
  className: PropTypes.string,
  inline: PropTypes.bool,
};

export default Button;
