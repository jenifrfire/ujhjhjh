
const request = config =>{
    const  xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {

        if(this.status >= 200 && this.status <= 300  ){
            config.succes(this.responseText);

        }else{
            config.error(this.status);
        }
    });
    xhr.addEventListener("error", function () {
        config.error("no internet");
    })
    xhr.addEventListener("timeout", function () {
        config.error("timeout");
    })
    xhr.open(config.metod, config.url)
    xhr.send();
}