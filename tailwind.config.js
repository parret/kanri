// SPDX-FileCopyrightText: Copyright (c) 2022-2026 trobonox <hello@trobo.dev>
//
// SPDX-License-Identifier: CC0-1.0

module.exports = {
  content: [],
  plugins: [],
  theme: {
    extend: {
      // Muted card palette: slightly darker and desaturated versions of the
      // default 600/700 shades so card colors read as a darker pastel.
      colors: {
        pink: { 600: "#a6426f", 700: "#8d3359" },
        red: { 600: "#a64242", 700: "#8a3535" },
        orange: { 600: "#ab5c33", 700: "#8e482c" },
        yellow: { 600: "#927027", 700: "#755322" },
        green: { 600: "#2d7949", 700: "#26603c" },
        teal: { 600: "#246d66", 700: "#205853" },
        blue: { 600: "#3d64b7", 700: "#3c56a1" },
        purple: { 600: "#8342be", 700: "#6f3e9a" },
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: "translateY(2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: "translateX(-2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
};
