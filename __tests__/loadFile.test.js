import {loadFile} from "../src/loadFile";
import {makeTill} from "./_test_utils";

const {events, till} = makeTill();


describe('loadFile', ()=>{
    it('should return a promise',()=>{
        const prom = loadFile();

        expect(prom.toString()).toBe('[object Promise]');

    })
})
// describe('loadFile', () => {
//
//     it('should load a file then return a promise', async () => {
//
//         let loaded = false;
//
//         const url = 'https://fonts.googleapis.com/css?family=Montserrat:500';
//
//         loadFile(url, {rel: 'stylesheet'}, 'link')
//             .then(() => {
//                 console.log('loaded');
//                 events.emit('done');
//                 loaded = 'successful';
//             })
//             .catch(() => {
//                 console.log('failed loading');
//                 events.emit('done');
//                 loaded = 'fail';
//             });
//
//         await till('done');
//
//         expect(loaded).toBe('successful');
//
//     })
// });



// describe('loadFile', () => {
//
//     it('should load a file then return a promise', async () => {
//
//         const url = 'https://fonts.googleapis.com/css?family=Montserrat:500';
//
//         loadFile(url, {rel: 'stylesheet'}, 'link');
//
//         expect(lf)
//
//     })
// });

// describe('loadFile', () => {
//
//     it('should load a file then return a promise', async () => {
//
//         let loaded = false;
//
//         const url = 'https://fonts.googleapis.com/css?family=Montserrat:500';
//
//         loadFile(url, {rel: 'stylesheet'}, 'link')
//             .then(() => {
//                 console.log('loaded');
//                 events.emit('done');
//                 loaded = 'successful';
//             })
//             .catch(() => {
//                 console.log('failed loading');
//                 events.emit('done');
//                 loaded = 'fail';
//             });
//
//         await till('done');
//
//         expect(loaded).toBe('successful');
//
//     })
// });