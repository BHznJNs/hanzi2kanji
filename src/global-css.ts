import { css } from 'lit';

export const imgDarkInvert = css`
  img.dark-invert {
    filter: var(--img-filter);
  }
`

export const linkStyles = css`
  a {
    font-family: var(--text-font);
    text-decoration: none;
  }
  a::before {
    content: "🔗"
  }
  a:active {
    opacity: .8;
  }
  a:link {
    color: var(--default-link-unvisited-color);
  }
  a:visited {
    color: var(--default-link-visited-color);
  }
`

export const rubyStyles = css`
  ruby {
    position: relative;
  }
  ruby::before {
    position: absolute;
    left: 50%;
    bottom: calc(1em + 4px);
    transform: translateX(-50%);
    content: attr(data-notation);
    padding: 2px 6px;
    white-space: nowrap;
    background-color: var(--default-bg-color);
    border-radius: 4px;
    opacity: 0;
    z-index: 1;
    pointer-events: none;
    transition: opacity .3s .05s;
  }
  ruby:hover::before {
    opacity: 1;
  }

  ruby rt {
    position: relative;
    top: 0;
    opacity: 1;
    font-size: 9px;
    transition: opacity .3s;
  }
  ruby:hover rt {
    opacity: 0;
  }
`
