var a1=document.getElementById('a1')

const urlParams = new URLSearchParams(window.location.search);
        const imageName = urlParams.get('image');
        const lecturerPosition = urlParams.get('position');

        a1.href='./invite.html?image='+imageName;

        console.log(a1.href)