async function getData(username) {
    const url = `https://api.github.com/users/${username}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}



function updateDOM(data) {
    const app = document.getElementById('app')

    const username = document.createElement('h3')
    username.textContent = data.login

    const image = document.createElement('img')
    image.src = data.avatar_url

    const profile = document.createElement('p')
    profile.innerHTML = `<a href=${data.html_url} target='_blank'>Profile</a>`

    const tags = [username, image, profile]

    if (data.location) {
        const location = document.createElement('p')
        location.textContent = `Location: ${data.location}`
        tags.push(location)
    }

    app.append(...tags)

}

async function main() {
    const userData = await getData('cameronotoole')

    updateDOM(userData)
}

main()