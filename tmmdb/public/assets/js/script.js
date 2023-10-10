// const myImage1 = document.getElementById("399566");

fetch('movies.json')
    .then((response)=>{
        return response.json()
    })
    .then((datas)=>{
        console.log(datas)
        count = 0;
        datas.forEach(data => {
            console.log(data [count]);
            count ++;
        });
    })
    
