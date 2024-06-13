const containerQRCode = document.getElementById('containerQrCode');
const img = document.getElementById('img');
const downloadLink = document.getElementById('downloadLink');

function gerar() {
    const inputURL = document.getElementById('input').value;
    gerarQRCODE(inputURL);
}

function gerarQRCODE(inputURL) {
    const link = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(inputURL)}`;
    img.src = link;

    img.onload = function() {
        fetch(link)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                downloadLink.href = url;
                downloadLink.download = 'qrcode.png';

                containerQRCode.style.display = 'flex';
            });
    };
}

function cancel(){
    containerQRCode.style.display = 'none'
}