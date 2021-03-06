/**
 * gets the horizontal scroll distance
 * @returns {number} - number of pixels
 */
export const scrollX = () => window.pageXOffset || window.document.documentElement.scrollLeft;
/**
 * gets the horizontal scroll distance
 * @returns {number} - number of pixels
 */
export const scrollY = () => window.pageYOffset || window.document.documentElement.scrollTop;


//scroll stuff

/**
 * gets the scrollbar width
 * @returns {number} - number of pixels
 */
export const getScrollbarWidth = () => {
    let outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    let widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    let inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    let widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
};

let lockScroll = false;

/**
 * helper for no scroll
 * @returns {Undefined} - returns nothing
 */
let ns = () => {
    let xscroll, yscroll;
    if (!lockScroll) {
        lockScroll = true;
        xscroll = scrollX();
        yscroll = scrollY();
    }
    window.scrollTo(xscroll, yscroll);

};
/**
 * fixes the body for no scroll
 * @param {Boolean} addPadding - true if add padding
 * @returns {Undefined} - returns nothing
 */
let prepareNoscroll = (addPadding) => {

    let theBody = document.getElementsByTagName('body')[0];
    let bodyHeight = theBody.getBoundingClientRect().height;

    if (addPadding) {

        if (bodyHeight > window.innerHeight) {
            theBody.style.width = window.innerWidth - getScrollbarWidth() + "px";
        }

    } else {
        theBody.style.width = '100%';
    }
};
/**
 * prevents body scroll
 * @param {Boolean} disable_scroll -true to disable
 * @param {Boolean} bodyFix - takes the scroll bar out
 * @returns {Undefined} - returns nothing
 */
export const noScroll = (disable_scroll, bodyFix = true) => {
    if (disable_scroll) {
        document.body.style.overflow = 'hidden';
        if (bodyFix) {
            prepareNoscroll(true);
        }
        window.document.addEventListener('scroll', ns);
    } else {
        document.body.style.overflow = 'initial';
        if(bodyFix){
            prepareNoscroll(false);
        }
        lockScroll = false;
        window.document.removeEventListener('scroll', ns);
    }
};