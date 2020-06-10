let x = document.querySelector('#rotateX');
let y = document.querySelector('#rotateY');
let perspective = document.querySelector('#perspective');

let container = document.querySelector('.perspective');
let box = document.querySelector('.element');

perspective.value = filterInput(container.style.perspective)

x.addEventListener('input', () => { 
    x.value = filterInput(x.value)
    setValues()
});

y.addEventListener('input', () => { 
    y.value = filterInput(y.value)
    setValues()
});

perspective.addEventListener('input', () => { 
    perspective.value = filterInput(perspective.value)
    setValues()
});

x.addEventListener('wheel', (e) => {
    x.value = OnMouseScroll(x.value, e.deltaY)
    setValues()
})

y.addEventListener('wheel', (e) => {
    y.value = OnMouseScroll(y.value, e.deltaY)
    setValues()
})

perspective.addEventListener('wheel', (e) => {
    perspective.value = OnMouseScroll(perspective.value, e.deltaY)
    setValues()
})

function filterInput (input) {
    return input.replace(/[^0-9]/g, "")
}

function OnMouseScroll(data, direction) {
    if (direction > 0) {
        return Number(data) - 10
    } else {
        return Number(data) + 10
    }
}

function setValues() {
    container.style.perspective = `${perspective.value}px`;
    box.style.transform = `rotateX(${x.value}deg) rotateY(${y.value}deg)`;
}