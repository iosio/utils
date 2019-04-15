/**
 * loads a script or link tag to the body returning a promise
 * @param {string} url - href url
 * @param {Object} attributes - object containing additional attributes to set ex: {rel: "stylesheet"} else defaults to "text/javascript"
 * @param {string} element - type of tag/element - defaults to "script"
 * @returns {Promise<any>} - returns .then
 */
export const loadFile = (url, attributes, element = "script") =>
    new Promise((resolve, reject) => {

        const s = document.createElement(element);

        s.setAttribute('src', url);

        if (typeof attributes === 'object') {
            Object.keys(attributes).forEach(key => {
                s.setAttribute(key, attributes[key])
            })
        }else{
            s.setAttribute('type', 'text/javascript');
        }

        s.onload = ()=>resolve({ok:true});

        s.onerror = reject;

        document.body.appendChild(s);
    });