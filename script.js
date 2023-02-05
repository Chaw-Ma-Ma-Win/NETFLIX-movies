const pos = document.querySelectorAll('.pos');
const button = document.querySelector('.button');
console.log(button);

pos.forEach((img) =>
  img.addEventListener('mouseover', () => {
    removeActive();
    img.classList.add('active');
  })
);

function removeActive() {
  pos.forEach((img) => {
    img.classList.remove('active');
  });
}
