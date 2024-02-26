const generateQuote = () => {
    console.log("Fetching quotes...");

    let url = "https://type.fit/api/quotes";
    fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(function (data) {
            console.log("Data received:", data);

            let randomNum = Math.floor((Math.random() * data.length) + 1);
            let randomQuote = data[randomNum];
            
            console.log("Random Quote:", randomQuote);

            document.getElementById("quote").innerHTML = `${randomQuote.text}`;
            document.getElementById("author").innerHTML = `${randomQuote.author ? randomQuote.author : ""}`;
        })
        .catch(function (error) {
            console.error("Error fetching quotes:", error);
        });
}
