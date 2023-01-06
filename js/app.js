const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(.product)
    const pname = storeitems.getElementsByClassName("h6")

    for(var i=0; i <pname.length; i++){
        let macth = product[i].getElementsByClassName('h6')[0];
        
        if(macth){
            let textvalue = macth.textContent || macth.innerHTML

            if(textvalue.toUpperCase().indexof(searchbox)> -1){
                product[i].style.display ="";

            }else{
                product[i].style.display = "none"
            }
        }
    }
}
