 ready = (callbackFunc) => {
    if (document.readyState !== 'loading') {
      // Document is already ready, call the callback directly
      callbackFunc();
    } else if (document.addEventListener) {
      // All modern browsers to register DOMContentLoaded
      document.addEventListener('DOMContentLoaded', callbackFunc);
    } else {
      // Old IE browsers
      document.attachEvent('onreadystatechange', function() {
        if (document.readyState === 'complete') {
          callbackFunc();
        }
      });
    }
  }

ready(() => {
    const photoList = document.getElementById("photo-list");
    getPhotos = async () => { await fetch('/photos')
        .then((res) => (res.json()))
        .then((res) => {
            res.forEach((photo) => {
                const listItem = document.createElement("li");
                listItem.classList.add("photo-container");
                listItem.innerHTML = `<img src=${photo.urls.full} class="gallery-photo"/>`
                listItem.onclick = () => {
                    photoClicked(photo.urls.full, "visible")
                };
                photoList.appendChild(listItem);
            })
        });
    };
    getPhotos();
    photoClicked = (image, setting) => {
        console.log(setting, 'setting')
        const modal = document.getElementById("modal");
        modal.style["background-image"] = image;
        modal.style.visibility = setting;
        console.log('click this thingy');
    }
})