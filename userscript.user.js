// ==UserScript==
// @name         Save r/place 2022
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Try to save the canvas!
// @author       Th3C0pyr1ght
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function download() {
         let redditCanvas = document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].children[0];
         let tmpLink = document.createElement('a');
         tmpLink.setAttribute('download', 'place.png');
         tmpLink.setAttribute('href', redditCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
         tmpLink.click();
    };

    window.addEventListener('load', () => {
        let bottomControls = document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-share-container")[0].querySelector(".bottom-controls").getElementsByTagName("mona-lisa-status-pill")[0].shadowRoot
        console.log(bottomControls)

        let buttonContainer = document.createElement('button');
        buttonContainer.addEventListener('click', download);
        bottomControls.appendChild(buttonContainer);

        let saveButton = document.createElement('div');
        saveButton.appendChild(document.createTextNode('Save'));
        saveButton.classList.add("pill")
        buttonContainer.appendChild(saveButton);
    })
})();
