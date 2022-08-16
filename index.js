const link = 'link'
let i = 1
let totalPages = 131

function download(link, count) {
  var a = document.createElement("a");
  var fileName = 'E-book_pagina_' + count + ').jpg'
  a.href = link + count + ').jpg';
  a.setAttribute("download", fileName);
  a.target = '_blank';
  a.click();
}



document.addEventListener('click', e => {
    for(let index = i; index <= i+totalPages; index++){
        download(link, index)
    }
})
