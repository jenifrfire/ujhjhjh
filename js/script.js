let Getinfo = function (){
    request({
        metod:"GET",
        url:"https://restcountries.com/v3.1/all",
        succes: response =>{
            const res = JSON.parse(response);
            console.log(res);
            getFunctionElement(res)
             
    
        },
    
        error : massage =>{
            console.log(`error ${massage}`);
        }
    
    })
}
