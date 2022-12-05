import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --font-body:'Gaegu', cursive;
}
.color{
    --background-color:'red';
}

#root{
width:100%;
scroll-behavior: smooth;
position:absolute;
z-index: -2;
background: linear-gradient(-45deg, #f5d5cc, #f9d2e1, #d3eff8, #d3f8ef);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
}


/* http://meyerweb.com/eric/tools/css/reset/v2.0 | 20110126
    License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
/* margin: 0;
padding: 0;
border: 0; */
/* box-sizing: border-box;
font-size: 100%; */
vertical-align: baseline;
}
    `
