/**
 * loads dock ready script
 * when doc is ready will execute the callback
 * @param {function} cb  - callback
 * @returns {undefined} - returns nothing
 */
// export const domReady = (cb) => {
//
//     import('./docReady.js').then(() => {
//         window.docReady(cb);
//     });
//
// };

/**
 * appends a script element to the dom to load a script
 * @param {string} url - url of source to load;
 * @param {function} cb - function to call after load
 * @returns {undefined} - returns nothing
 */
export function loadScript( url, cb ) {
    let script = document.createElement( "script" );
    script.type = "text/javascript";
    if(script.readyState) { //IE
        script.onreadystatechange = function() {
            if ( script.readyState === "loaded" || script.readyState === "complete" ) {
                script.onreadystatechange = null;
                cb && cb();
            }
        };
    } else { //Others
        script.onload = function() {
            cb && cb();
        };
    }

    script.src = url;
    document.getElementsByTagName( "head" )[0].appendChild( script );
}

/**
 * appends a link element to the dom to load a script
 * --- although es6 import() will do the same thing
 * @param {string} url - url of source to load;
 * @param {function} cb - function to call after load
 * @returns {undefined} - returns nothing
 */
export function loadLink( url, cb ) {
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;

    if(link.readyState) { //IE
        link.onreadystatechange = function() {
            if ( link.readyState === "loaded" || link.readyState === "complete" ) {
                link.onreadystatechange = null;
                cb && cb();
            }
        };
    } else { //Others
        link.onload = function() {
            cb && cb();
        };
    }

    link.src = url;
    document.getElementsByTagName( "head" )[0].appendChild( link );
}
