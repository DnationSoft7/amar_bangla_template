function dragdraggableSlider(selector) {
    const sliderParent = document.querySelectorAll(selector);
    sliderParent.forEach(sliderParent => {

        let drag = false,
            startX, scrollLeft, x, pageX;

        function stopDrag() {
            drag = false
        }

        function draging(e) {

            if (!drag) return;

            x = e.pageX - sliderParent.offsetLeft;
            const walk = (x - startX);

            sliderParent.scrollLeft = scrollLeft - walk
        }

        const mousedown = (e) => {

            drag = true;

            startX = e.pageX - sliderParent.offsetLeft;
            scrollLeft = sliderParent.scrollLeft;

        }

        window.document.querySelector('mouseup', stopDrag);
        //FOR PC
        sliderParent.addEventListener('mousemove', draging);
        sliderParent.addEventListener('mousedown', mousedown);
        sliderParent.addEventListener('mouseup', stopDrag);

        //FOR MOBILE
        const mousedownMobile = (e) => {

            drag = true;
            try {
                pageX = e.changedTouches[0].pageX;
            } catch {
                pageX = pageX
            }
            startX = pageX - sliderParent.offsetLeft;
            scrollLeft = sliderParent.scrollLeft;

        }

        function dragingMObile(e) {

            if (!drag) return;
            try {
                x = e.changedTouches[0].pageX;
            } catch {
                x = x
            }

            const walk = (x - startX);
            sliderParent.scrollLeft = scrollLeft - walk;
        }

        sliderParent.addEventListener('touchmove', dragingMObile);
        sliderParent.addEventListener('touchstart', mousedownMobile)
        sliderParent.addEventListener('touchend', stopDrag)
    })
}

dragdraggableSlider('.choosing-option-wrapper')
const locationModel = document.getElementById('location-model');
document.getElementById('locationBtn').addEventListener('click', (e) => {

    locationModel.style.display = "block"

});

locationModel.addEventListener('click', (e) => {

    e.preventDefault()

    locationModel.style.display = 'none';
})

document.getElementById('localModel').addEventListener('click', (e) => {

    e.stopPropagation()

})

// SHOP PAGE STIKY FUNCTION
// const shopPageNav1st = document.querySelector('#shopPageNav').offsetTop;

// document.addEventListener('scroll', (e) => {
//     console.log(e)
//     e.preventDefault()
//     const shopPageNav = document.querySelector('#shopPageNav');
//     const shopHeader = document.querySelector('#shopHeader');
//     const shopHeaderHeight = shopHeader.offsetHeight;

//     let condition = false;
//     if (window.scrollY >= shopPageNav1st - shopHeaderHeight) {
//         condition = true;
//         shopPageNav.style.position = 'fixed';
//         shopPageNav.style.top = `${shopHeaderHeight}px`;
//     } else {
//         shopPageNav.style.position = 'static';
//         shopPageNav.style.top = ``;

//     }

//     console.log(condition)
// })

// document.querySelector('#selectDivision').

// document.querySelector("#selectDivision").addEventListener("click", () => {
//   document.querySelector(
//     ".footer-section-local-find-model-area"
//   ).style.display = "block";
// });

// document.getElementById("modelDisable").addEventListener("click", () => {
//   document.querySelector(
//     ".footer-section-local-find-model-area"
//   ).style.display = "none";
// });

// document.querySelector("#selectDistrict").addEventListener("click", () => {
//   document.querySelector(
//     ".footer-section-local-find-model-area"
//   ).style.display = "block";
// });

// document.querySelector("#selectWord").addEventListener("click", () => {
//   document.querySelector(
//     ".footer-section-local-find-model-area"
//   ).style.display = "block";
// });

// document.querySelector("#selectUpazila").addEventListener("click", () => {
//   document.querySelector(
//     ".footer-section-local-find-model-area"
//   ).style.display = "block";
// });

// const drowerParent = document.querySelector("#drowerParent");
// const drowerOpern = document.querySelector("#drowerOpen");
// const drower = document.querySelector("#drower");
// const closeDrower = document.querySelector("#closeDrower");
// drowerOpern.addEventListener("click", (e) => {
//   e.preventDefault();
//   drowerParent.classList.add("active");
//   setTimeout(() => {
//     drower.classList.add("active");
//   }, 0.05);
// });

// drowerParent.addEventListener("click", (e) => {
//   e.preventDefault();
//   drower.classList.remove("active");
//   setTimeout(() => {
//     e.target.classList.remove("active");
//   }, 400);
// });

// drower.addEventListener("click", (e) => {
//   e.stopPropagation();
// });
// closeDrower.addEventListener("click", (e) => {
//   e.preventDefault();
//   drower.classList.remove("active");
//   setTimeout(() => {
//     drowerParent.classList.remove("active");
//   }, 400);
// });

//image chackings

// function isImagePathValid(imagePath, callback) {
//   var img = new Image();

//   img.onload = function () {
//     // Image is loaded successfully
//     callback(true);
//   };
//   img.onerror = function () {
//     // Image failed to load

//     callback(false);
//   };
//   img.src = imagePath;
// }

// // Usage
// var imagePath =
//   "https://cdn.pixabay.com/photo/2020/12/07/18/24/eagle-5812500_1280.jpg";

// isImagePathValid(imagePath, function (isValid) {
//   if (isValid) {
//     console.log("Image path is valid.");
//   } else {
//     console.log("Image path is not valid or image does not exist.");
//   }
// });
