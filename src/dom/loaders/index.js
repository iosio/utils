//
// export const domReady = (cb) => {
//
//     import('./docReady.js').then(() => {
//         window.docReady(cb);
//     });
//
// };

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
