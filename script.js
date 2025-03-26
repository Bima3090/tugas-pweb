document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.background = "#00008b"; 
            header.style.transition = "0.3s";
        } else {
            header.style.background = "blue";
        }
    });

    let galleryImages = document.querySelectorAll("#gallery img");
    galleryImages.forEach(img => {
        img.style.cursor = "pointer";
        img.addEventListener("click", function () {
            openModal(img.src, img.alt);
        });
    });

    function openModal(imageSrc, altText) {
        let modal = document.createElement("div");
        modal.classList.add("modal-overlay");
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">&times;</span>
                <img src="${imageSrc}" alt="${altText}">
                <p>${altText}</p>
            </div>
        `;
        document.body.appendChild(modal);

        modal.querySelector(".close-button").addEventListener("click", function () {
            modal.remove();
        });

        modal.addEventListener("click", function (e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    let modalStyles = document.createElement("style");
    modalStyles.innerHTML = `
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .modal-content {
            background: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            position: relative;
        }
        .modal-content img {
            max-width: 90%;
            max-height: 80vh;
            border-radius: 5px;
        }
      
    
    
      
    
        .close-button {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 24px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(modalStyles);
});
