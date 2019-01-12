const getWord = () => {
    const word = document.querySelector('#search').value;
    if (word != "") {
        search(word);
    }
}

const search = (word) => {
    document.querySelector('.result').innerHTML = "";
    fetch(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=dc6zaTOxFJmzC`).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Wystąpił błąd połączenia");
        }
    }).then((response) => {

        const allVideo = document.createDocumentFragment();
        for (let i = 0; i < response.data.length; i++) {
            const videoElem = document.createElement('video');
            const link = response.data[i].images.original_mp4.mp4;
            videoElem.setAttribute('src', link);
            videoElem.setAttribute('id', `video${i}`)
            videoElem.setAttribute('autoplay', '');
            videoElem.setAttribute('loop', '');
            allVideo.appendChild(videoElem);
        }
        document.querySelector('.result').appendChild(allVideo);

    }).catch(error => {
        const errorAlert = document.createElement('span');
        errorAlert.textContent = "Wystąpił błąd połączenia, spróbuj później";
        document.querySelector('.result').appendChild(errorAlert);
        console.dir("Błąd: ", error);
    })
}

const init = () => {
    const input = document.querySelector('input');
    input.addEventListener('input', () => setTimeout(() => getWord(), 1000));

}
init()