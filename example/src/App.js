import React from 'react';

import {uniqueID} from "./@iosio/number_generation";
import {Eventer} from "./@iosio/eventer";
import {camelCase} from "./@iosio/camelCase";

const callbacks = {};
const eventer = Eventer(callbacks);


eventer.on('derp', (data) => {
    console.log(data);
});
eventer.on('foo', (data) => {
    console.log('foo')
});

eventer.emit('derp', {derp: 'asdf'})
// console.log(mitt.get_all());
// mitt.off('derp')

console.log('callbacks', callbacks);

eventer.destroy('bar');

console.log('callbacks', callbacks);

eventer.emit('derp', {derp: 'asdf'});


console.log(camelCase('oh_hello. there-good_looking'))

// const response_id = '@response-' + 'some_event' + '-' + uniqueID();
//
// console.log(response_id);
//
// const isResponse = (res)=> res.search('@response-') > -1;
//
// console.log(isResponse(response_id));

class App extends React.Component {
    render() {
        return (
            <div>
                App
            </div>
        );
    }
}

export default App;
