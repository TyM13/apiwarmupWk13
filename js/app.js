function successfunction (response) {
   for (let i = 0; i < response[`data`][`data`].length; i++) {

   
    document.body.insertAdjacentHTML(                 
    `afterbegin`,
    `<h5>${response[`data`][`data`][i][`brand_name`]}</h5>
    <a href="${response[`data`][`data`][i][`detail`]}">Supplier Website</a>
    
    `)
} 
}

function faulurefunction (error) {

}



axios.request({
    url: `https://api-mobilespecs.azharimm.site/v2/brands/`
}).then(successfunction).catch(faulurefunction)





axios.request({


    
}).then().catch()