export const loadFile = (url, type = "text/javascript", element = "script") =>
    new Promise(resolve => {
        const s = document.createElement(element);
        s.setAttribute('type', type);
        s.setAttribute('src', url);
        s.onload = resolve;
        document.body.appendChild(s);
    });