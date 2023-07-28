
const API_KEY = '5p9dN02xzAco38kWsLVZYuOYUHQmPW2W';

// Função para fazer a solicitação assíncrona à API do Tomorrow.io
async function fetchWeatherData() {
   
    const API_ENDPOINT = `https://api.tomorrow.io/v4/timelines?location=40.75872069597532,-73.98529171943665&fields=temperature&timesteps=1h&units=metric&apikey=5p9dN02xzAco38kWsLVZYuOYUHQmPW2W`;

    try {
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar os dados climáticos:', error);
        return null;
    }
}

// Função para atualizar os dados climáticos na página
function updateWeatherData(weatherData) {
    const temperatureDiv = document.getElementById('temperature');
    const descriptionDiv = document.getElementById('description');

    if (weatherData && weatherData.data && weatherData.data.timelines[0]) {
        const temperature = weatherData.data.timelines[0].intervals[0].values.temperature_2m;
        const description = weatherData.data.timelines[0].intervals[0].values.weather_code;

        temperatureDiv.innerHTML = `Temperatura atual: ${temperature} °C`;
        descriptionDiv.innerHTML = `Descrição do tempo: ${description}`;
    } else {
        temperatureDiv.innerHTML = 'Falha ao obter os dados climáticos.';
        descriptionDiv.innerHTML = '';
    }
}

// Função principal para iniciar o processo
async function getWeatherData() {
    try {
        const weatherData = await fetchWeatherData();
        updateWeatherData(weatherData);
    } catch (error) {
        console.error('Erro ao buscar os dados climáticos:', error);
    }
}

// Chama a função principal quando a página carrega
window.onload = getWeatherData;
