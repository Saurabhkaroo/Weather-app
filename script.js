const apiKey = "d43f6a62107341af9e5165641261701";

function getWeather() {
    const location = document.getElementById("locationInput").value;
    const resultDiv = document.getElementById("result");

    if (location === "") {
        resultDiv.innerHTML = "❌ Please enter a city name";
        return;
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                resultDiv.innerHTML = "❌ City not found!";
            } else {
                const temp = data.current.temp_c;
                const city = data.location.name;
                const country = data.location.country;
                const condition = data.current.condition.text;

                resultDiv.innerHTML = `
                    <h3>${city}, ${country}</h3>
                    <p>🌡 Temperature: ${temp} °C</p>
                    <p>☁ Condition: ${condition}</p>
                `;
            }
        })
        .catch(error => {
            resultDiv.innerHTML = "⚠ Error fetching data!";
            console.log(error);
        });
}
