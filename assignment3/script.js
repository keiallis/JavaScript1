
function addImage() {
    // let name = newImage.addImage.value;  

    let ul = document.getElementById('Gallery');

    let li = document.createElement('li')


    li.appendChild(document.createTextNode(newImage));
    ul.appendChild(li);

}



