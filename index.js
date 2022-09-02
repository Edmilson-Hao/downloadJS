//const link = 'https://sereduc.blackboard.com/bbcswebdav/library/Library%20Content/%28LMS%29%20-%20Do%20Not%20Delete/%28LMS%29%20GRADUACAO%20-%20Do%20Not%20Delete/SCORM/APRENDIZAGEM%20E%20CONTROLE%20MOTOR/SCORM/contents/EBOOK/E-book_pagina_01.jpg'

/*
document.body.innerHTML = ''

let numberOfPagesToOpen = 96
ok = true

for(let i = 1; i <= numberOfPagesToOpen; i++){
    let count = i
    if(count<10 && ok === true)count = '0'+count
    let img = document.createElement("img");
    img.src = 'https://sereduc.blackboard.com/bbcswebdav/library/Library%20Content/%28LMS%29%20-%20Do%20Not%20Delete/%28LMS%29%20GRADUACAO%20-%20Do%20Not%20Delete/SCORM/APRENDIZAGEM%20E%20CONTROLE%20MOTOR/SCORM/contents/EBOOK/E-book_pagina_' + count + '.jpg';
    document.body.append(img)
}
*/

const paginas = document.getElementById('paginas')
const link = document.getElementById('link')
const sufixoLink = document.getElementById('sufixoLink')
const zeroUm = document.getElementById('zeroUm')
const ok = document.getElementById('ok')
var count = 1

const creatingNewElement = () => {
    count >= 10 ? count = count : zeroUm.checked === 'false' ? count = count : count = '0' + count
    const img = document.createElement("img");
    const finalLink = link.value + count + sufixoLink.value
    img.src = finalLink
    document.body.append(img)
}


ok.addEventListener('click', e => {
    document.body.innerHTML = ''
    for (let i = 1; i <=paginas.value; i++) {
        creatingNewElement()
        count++
    }
})
