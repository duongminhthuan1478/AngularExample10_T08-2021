export const observal = {
    next: (val) => console.log('nextValue', val),
    error: (err) => console.error('error', err),
    complete: () => console.log('complete')
}

export const URL_GET_EARTHQUAKE = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-20";