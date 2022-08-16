document.body.innerHTML = ''

const link = 'https://sereduc.blackboard.com/bbcswebdav/library/Library%20Content/%28LMS%29%20-%20Do%20Not%20Delete/%28LMS%29%20GRADUACAO%20-%20Do%20Not%20Delete/SCORM/EMPREENDEDORISMO/EBOOK/contents/ebook/p'
let i = 141
let numberOfPagesToOpen = 20

function download(link, count) {
  var a = document.createElement("a");
  var fileName = 'E-book_pagina_' + count + ').jpg'
  a.href = link + count + '.jpg';
  a.setAttribute("download", fileName);
  a.target = '_blank';
  a.click();
}



document.addEventListener('click', e => {
    for(let index = i; index < i+numberOfPagesToOpen; index++){
        download(link, index)
    }
})
