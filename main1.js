const counter = () => {
    let seconds = 0;


    const timer = () => {
        seconds++;
        document.body.textContent = `jesteś na stronie ${seconds} sekund`;
    }

    return timer
}

const start = counter()
setInterval(start, 1000);