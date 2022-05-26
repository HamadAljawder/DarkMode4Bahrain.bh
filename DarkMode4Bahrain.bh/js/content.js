console.log("Initialized.");

 let css = "";
     css = 'html {-webkit-filter: invert(100%);' +
                '-moz-filter: invert(100%);' +
                '-o-filter: invert(100%);' +
                '-ms-filter: invert(100%); }' +
                'html, iframe, img {-webkit-filter: invert() hue-rotate(180deg) brightness(100%) contrast(100%);}';



let style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.getElementsByTagName('head')[0].appendChild(style);
