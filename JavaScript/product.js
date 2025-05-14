// let previewContainer = document.querySelector('.products-preview');
// let previewBox = previewContainer.querySelectorAll('.preview');

// document.querySelectorAll('.products-container .product').forEach(product => {
//     product.onclick = () => {
//         previewContainer.style.display = 'flex';
//         let name = product.getAttribute('data-name');
//         previewBox.forEach(preview => {
//             let target = preview.getAttribute('data-target');
//             if (name == target){
//                 preview.classList.add('active');
//             }
//         })
//     }
// })

document.querySelectorAll('.card .btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const card = this.closest('.card');
    const name = card.getAttribute('data-name');
    const previewBox = document.querySelector('.products_preview');
    const preview = previewBox.querySelector(`.preview[data-target="${name}"]`);

    previewBox.style.display = 'flex';
    preview.classList.add('active');
  });
});

document.querySelectorAll('.close-btn').forEach(btn => {
btn.onclick = () => {
  document.querySelector('.products_preview').style.display = 'none';
};
});
function showPopup(element) {
  document.getElementById("popup").style.display = "block";

  const title = element.getAttribute("data-title");
  const caption = element.getAttribute("data-caption");
  const image = element.getAttribute("data-image");

  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-caption").innerText = caption;
  document.getElementById("popup-image").src = image;
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
}



function showPopup() {
    document.getElementById('hpl_section').style.display = 'block';
  }
  
  function hidePopup() {
    document.getElementById('hpl_section').style.display = 'none';
  }