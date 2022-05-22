const btn = document.getElementById('btnb');
const image = document.querySelector('#img');

function changePhoto() {
    let i = 2;

    setInterval(() => {
        i++
        if (i === 5) {
            i = 2;
        }
        image.setAttribute('src', `imagens/instagram-celular${i}.png`)
    }, 4000)
}


window.addEventListener('load', changePhoto)
