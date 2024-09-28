//I had to get help from chatGPT because I was totally lost I asked questions
//and got help formatting this code.
//https://chatgpt.com/share/66f756cf-57bc-8009-8857-b71f9f9cf276


const themeSelector = document.querySelector("#themeSelector");

function changeTheme() {
    const currentTheme = themeSelector.value;
    const body = document.body;
    const logo = document.querySelector("#logo");

    if (currentTheme === 'dark') {
        body.classList.add("dark");
        logo.src = "white-logo.png";
    }
    else{
        body.classList.remove("dark");
        logo.src = "blue-logo.png";
    }
}

themeSelector.addEventListener("change", changeTheme);