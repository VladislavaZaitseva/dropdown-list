const active = document.querySelector('.active');

active.addEventListener('click', () => {
    const wrapper = document.querySelector('.wrapper')
    if (wrapper.hidden) {
        wrapper.hidden = false;
        document.querySelector('.arrow').style = 'background-image: url(./assets/Chevron2.svg)'
    } else{
        wrapper.hidden = true;
        document.querySelector('.arrow').style = 'background-image: url(./assets/Chevron.png)';
    }
})