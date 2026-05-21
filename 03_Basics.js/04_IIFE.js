//iife
(function chai(){
    //named iife
    console.log(`DB CONNECTED`);

})();
//when we write two iife one after another, then we have to put semicolon to end first iife otherwise it will give error

( (name) => {
    //unnamed iife
    console.log(`DB DISCONNECTED by ${name}`);
})(`John`)