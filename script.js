function time() {

    let Number = Intl.NumberFormat("en-US", {
        minimumIntegerDigits: 2
    })

    let date = new Date()

    document.querySelector(".phone span").textContent = Number.format(date.getHours()) + ":" + Number.format(date.getMinutes()) + ":" + Number.format(date.getSeconds())

    window.requestAnimationFrame(time)

}
time()