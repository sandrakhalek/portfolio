import { createGlobalStyle } from "styled-components";

// This is a styled component made to style webpage based on theme value (light/dark)
export const GlobalStyles = createGlobalStyle `
  body, .modal-content {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: all 0.25s linear;
  }


  .navbar,
  .nav-item,
  .nav-link,
  .moon-hover:hover,
  li.carousel-indicator,
  .social-media-icon,
  .download-cv,
  .download-cv i,
  .explore,
  .explore i,
  #sendBtn,
  #sendBtn i,
  .bx-menu-alt-right,
  .bxs-right-arrow,
  .bxs-left-arrow {
    color: ${({ theme }) => theme.color};
  }
  
  .cursor {
    border: 2px solid ${({ theme }) => theme.color};
    box-shadow: 0 0 22px rgba(0, 0, 0, 0.6);
  }
    
  .carousel-control {
    filter: invert(1) brightness(0);
  }
    
  #return-to-top i,
  #return-to-top:hover i, {
    color: ${({ theme }) => theme.background};
  }
    
  #return-to-top:hover {
    background: ${({ theme }) => theme.color};
    opacity: 1;
  }
    
  #return-to-top {
    background: ${({ theme }) => theme.color};
    opacity: 0.7;
  }

  form .form-group input,
  form .form-group textarea,
  #cat-skill-options {
    border-color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
  }

  form .form-group input:focus,
  form .form-group textarea:focus,
  .search-box:focus,
  #cat-skill-options:focus {
    box-shadow: none;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor}
  }

  .search-box {
    border-color: ${({ theme }) => theme.color};
    border-opacity: 0.8;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
  }

  .download-cv:hover i ,
  .download-cv:hover,
  .explore:hover,
  #sendBtn:hover {
    color: ${({ theme }) => theme.color};
  }
  `;