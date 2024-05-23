function promiseRejection() {
    let promise=new Promise(function(resolve, reject){
         setTimeout(() => {
            reject("Something went wrong!")
         }, 1000);
    })
    promise.catch(function(result){
          console.log(result);
    })
}