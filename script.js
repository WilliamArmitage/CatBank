//Fetch the data from the following link. 
fetch('https://api.thecatapi.com/v1/images/search').then((data)=>{
    //console.log(data);
    return data.json();
}).then((completedata)=>{
    //console.log(completedata[2].title);
   let data1="";
   completedata.map((values)=>{
        //Below you can make the webpage however the customer wants it. They will have requirements.
        //You can add as many fields as you like. So if you wanted the name of the cat within the API you could display that also.
        data1=` <div class="card">
                    <h1 class="name">MEOW!</h1>
                    <img src=${values.url} alt="img" class="images">
                    <button class="btn" onClick="window.location.reload();">Next</button>
                </div>`

   });
   document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
})