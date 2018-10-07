/*const API_KEY = 'a31c2bd8946ac5f0442b48b72d5005a1';*/

$(() => {
    $.ajax({
        type: "GET",
        url: "/games/?fields=*",
        onSuccess: (response) => {
            var parsed_data = JSON.parse(response.data);
            // clean existing list
             $('.list').empty(); 
    
            // append new items
            for(let i = 0; i <= response.data.length; i++){
                $(".game")[i].append(`<p><a href="${parsed_data.url}"><img src="${parsed_data.cover.url}" alt=""></a></p><figcaption>${parsed_data.name}</figcaption>`)
            }
        },
        onError: (error) => {
            console.log(error);
        }
    });
});




