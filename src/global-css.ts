import { css } from 'lit';

export const imgDarkInvert = css`
  img.dark-invert {
    filter: var(--img-filter);
  }
`

export const linkStyles = css`
  a.link {
    font-family: var(--text-font);
    text-decoration: none;
  }
  a.link::before {
    content: "🔗"
  }
  a.link:active {
    opacity: .8;
  }
  a.link:link {
    color: var(--default-link-unvisited-color);
  }
  a.link:visited {
    color: var(--default-link-visited-color);
  }
  a.link:focus-visible {
    outline: var(--outline-style);
  }
`

export const normalBtnStyles = css`
  button.normal {
    background: var(--normal-btn-bg-color);
    border: 2px solid var(--normal-btn-bd-color);
    border-radius: 6px;
    cursor: pointer;
    transition: background-color .3s,
                border-color .3s;
  }
  button.normal:hover {
    background-color: var(--normal-btn-hovered-bg-color);
  }
  button.normal:focus-visible {
    outline: var(--outline-style);
  }
`

export const actionBtnStyles = css`
  .action-btn {
    padding: 0.4rem 0.6rem;
    font-size: 0.875rem;
    background-color: var(--action-btn-bg-color);
    color: var(--default-tx-color);
    cursor: pointer;
    border: none;
    border-radius: 0.375rem;
    user-select: none;
    text-decoration: none;
    transition: background-color 0.2s ease, color 0.2s ease;
  }
  .action-btn:hover {
    background-color: var(--action-btn-hovered-bg-color);
  }
  .action-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .action-btn:focus-visible {
    outline: var(--outline-style);
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
