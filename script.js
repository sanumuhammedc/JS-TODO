function increment() {
    let counter = document.getElementById("counter");
    counter.innerHTML = Number(counter.innerHTML) + 1;
}

function decrement() {
    let counter = document.getElementById("counter");
    counter.innerHTML = Number(counter.innerHTML) - 1;
}

function reset() {
    let counter = document.getElementById("counter");
    counter.innerHTML = 0;
}