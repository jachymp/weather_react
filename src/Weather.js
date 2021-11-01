import WeatherDetail from "./WeatherDetail";

function Weather(props) {
    return(
        <div onClick={() => props.setDetail(props.day)}>
            <h3>{props.day}</h3>
            <p>Min: {props.min}, Max: {props.max}</p>
            {props.selected &&
                <div>
                    <WeatherDetail detail={props.detail} />
                </div>
            }
        </div>
    )
}

export default Weather;