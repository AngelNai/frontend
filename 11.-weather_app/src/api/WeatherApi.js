export const getWeather = async () => {
    const key = "f5419501acf44ea2b00173047243004"
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=Tuxtepec&aqi=no&Lang=es`
    const response = await fetch(url)
    const weather = await response.json()

    //console.log(weather)
return weather

}