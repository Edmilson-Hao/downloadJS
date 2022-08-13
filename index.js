const link = 'https://sereduc.blackboard.com/bbcswebdav/library/Library%20Content/%28LMS%29%20-%20Do%20Not%20Delete/%28LMS%29%20GRADUACAO%20-%20Do%20Not%20Delete/SCORM/CRESCIMENTO%2C%20DESENVOLVIMENTO%20E%20ENVELHECIMENTO%20HUMANO/SCORM/contents/EBOOK/E-book_pagina_'
let i = 11

function download(link, count) {
  var a = document.createElement("a");
  var fileName = 'E-book_pagina_' + count + '.jpg'
  a.href = link + count + '.jpg';
  a.setAttribute("download", fileName);
  a.target = '_blank';
  a.click();
}



document.addEventListener('click', e => {
    download(link, i)
    i+=1
})
