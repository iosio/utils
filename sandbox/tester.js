const tester = require('./dist').tester;

tester().then(()=>{
    console.log('done')
    process.exit();
});