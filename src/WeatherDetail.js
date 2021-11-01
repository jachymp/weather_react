function WeatherDetail(props) {
    return(
        <div>
            <p>Wind: {props.detail.wind}</p>
            <p>Humidity: {props.detail.humidity}</p>
            <p>Percipitation: {props.detail.percipitation}</p>
        </div>
    )
}

export default WeatherDetail;