function time() {

    let number = Intl.NumberFormat("en-US", {
        minimumIntegerDigits: 2
    })

    let date = new Date()

    document.querySelector(".phone span").textContent = number.format(date.getHours()) + ":" + number.format(date.getMinutes()) + ":" + number.format(date.getSeconds())

    window.requestAnimationFrame(time)

}
time()