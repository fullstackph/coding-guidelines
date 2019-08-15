import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { cssHighlightProps } from '../common/highlighter-config'

const cssStyeDeclaration = <SyntaxHighlighter {...cssHighlightProps}>
{`.class {
  @extend .another-class;

/* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  //ENTER -- code line break

/* Display */
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-basis: 100%;
  flex-grow: 1;
  flex-shrink: 0;
  order: -1;
  vertical-align: middle;
  float: left;
  clear: both;
  padding: 0;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
  margin: 0;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  width: 10px;
  min-width: 10px;
  max-width: 20px;
  height: 10px;
  min-height: 10px;
  max-height: 20px;
  overflow: hidden;
  column-count: 2;
  column-width: 0;

  //ENTER -- code line break

/* Typography */
  font-family: sans-serif;
  font-size: 16px;
  font-style: italic;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1;
  color: red;
  text-align: left;
  text-decoration: underline;
  text-indent: 1px;
  text-overflow: ellipsis;
  text-rendering: optimizeLegibility;
  text-shadow: 1px 1px 2px pink;
  text-transform: uppercase;
  word-spacing: 1px;
  word-break: break-word;
  white-space: normal;
  hyphens: auto;
  list-style-type: square;
  list-style-position: inside;
  list-style-image: none;

  //ENTER -- code line break

/* Visuals */
  background-attachment: fixed;
  background-color: red;
  background-image: url(...);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px red solid;
  border-top: 1px red solid;
  border-right: 1px red solid;
  border-bottom: 1px red solid;
  border-left: 1px red solid;
  border-width: 1px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-color: red;
  border-top-color: red;
  border-right-color: red;
  border-bottom-color: red;
  border-left-color: red;
  border-style: solid;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border-image: none;
  border-collapse: collapse;
  border-spacing: 0;
  outline: none;
  outline-offset: 0;
  box-shadow: 10px 5px 5px red;
  background-clip: padding-box;

  //ENTER -- code line break

// Misc
  opacity: 1;
  visibility: visible;
  cursor: pointer;
  pointer-events: auto;
  user-select: auto;
  direction: ltr;
  backface-visibility: hidden;
  filter: blur(5px);
  transition: all 3s ease;
  transition-property: all;
  transition-duration: 3s;
  transition-timing-function: ease;
  transition-delay: 1s;
  transform: scale(1);
  animation: slidein 3s ease-in 1s infinite reverse both running;
  animation-name: slidein;
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-delay: 3s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-play-state: running;

  //ENTER -- code line break

//Pseudo elements
  &:before {
    content: '';

    /* Positioning */
    /* Display */
    /* Typography */
    /* Visuals */
    // Misc
  }

  &:after {
    content: '';

    /* Positioning */
    /* Display */
    /* Typography */
    /* Visuals */
    // Misc
  }

  //on-behavior in this order:
  &:hover,
  &:active,
  &:focus,
  &:visited,
  &:checked,
  &:default,
  &:empty,
  &:enabled,
  &:disabled,
  &:in-range,
  &:out-of-range,
  &:indeterminate,
  &:valid,
  &:invalid,
  &:target {
    display: none;
  }

  &::placeholder,
  &::selection,
  &::first-letter,
  &::first-line {
    display: none;
  }

  //parent-children pseudo classes: https://css-tricks.com/useful-nth-child-recipies/
  &:first-child,
  &:nth-child(even),
  &:nth-last-child(n),
  &:last-child,
  &:only-child {
    display: none;
  }

  &:first-of-type,
  &:nth-of-type(odd),
  &:nth-last-of-type(n),
  &:last-of-type,
  &:only-of-type {
    display: none;
  }

  //Other browser specific stuff
  &::-ms-clear {
    display: none;
  }

  &::-webkit-specific-stuff,
  &::-moz-specific-stuff,
  &::-o-specific-stuff {
    display: none;
  }

  //CSS Ancestry Selectors
  & .another-class {
    /* another-class is a child of parent-class */
  }

  > .another-class {
    /* another-class is a direct descendant of parent-class */
  }

  ~ .another-class {
    /* another-class is preceded by parent-class */
  }

  + .another-class {
    /* another-class is immediately placed after parent-class */
  }  

  //Attribute-Value Pairs
  input[type='text'] {
    
  }
}
`
}
</SyntaxHighlighter>

export default cssStyeDeclaration