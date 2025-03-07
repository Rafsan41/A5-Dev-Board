

const theme = document.getElementById('theme')
const themeBtn = document.getElementById('theme-btn')
themeBtn.addEventListener('click', function () {

    theme.style.backgroundColor = colorrgb();
    console.log(theme)

})

function colorrgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}
colorrgb()

