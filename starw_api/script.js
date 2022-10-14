async function show() {
    let people = await fetch('https://swapi.dev/api/people/')
    let resp_text = await people.text()
    console.log(resp_text)
    console.log(JSON.parse(resp_text))
}

window.onload = () => {
    show()
}