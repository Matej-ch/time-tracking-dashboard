type Hours = {
    current: number,
    previous: number,
}

type Timeframes = {
    [daily: string]: Hours,
    [weekly: string]: Hours,
    [monthly: string]: Hours,
}

type Activity = {
    title: string,
    timeframes: Timeframes,
}

export default Activity;