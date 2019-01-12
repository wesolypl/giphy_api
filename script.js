const getWord = () => {
    const word = document.querySelector('#search').value;
    setTimeout(search(word), 300)
}

// const playOnHover = () => {
//     const video = document.querySelector('.result');
//     console.log(video)
//     for (let i = 0; i < 25; i++) {


//         video.addEventListener('mouseover', () => {
//         video.setAttribute('autoplay', '');
//         video.setAttribute('loop', '');
//     }
// }


const search = (word) => {
    document.querySelector('.result').innerHTML = "";
    fetch(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=dc6zaTOxFJmzC`).then(function (response) {
        return response.json()
    }).then(function (response) {
        const allVideo = document.createDocumentFragment();
        for (let i = 0; i < response.data.length; i++) {
            const videoElem = document.createElement('video');
            const link = response.data[i].images.original_mp4.mp4;
            videoElem.setAttribute('src', link);
            videoElem.setAttribute('id', `video${i}`)
            // videoElem.setAttribute('autoplay', '');
            // videoElem.setAttribute('loop', '');
            allVideo.appendChild(videoElem);
        }
        document.querySelector('.result').appendChild(allVideo);
    })
}

const init = () => {
    const input = document.querySelector('input');
    input.addEventListener('input', getWord)

}
init()