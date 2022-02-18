import { StopsState, StopsActionTypes, TStopsAction } from '../../types/stops'

const initialState: StopsState = {
    stops: [-1, 0, 1, 2, 3],
}

export const stopsReducer = (
    // eslint-disable-next-line default-param-last
    state = initialState,
    action: TStopsAction
): StopsState => {
    switch (action.type) {
        case StopsActionTypes.STOPS_CHANGE:
            return {
                stops: state.stops.includes(action.payload)
                    ? state.stops
                          .filter((stop) => stop !== action.payload)
                          .filter((stop) => stop !== -1)
                    : [...state.stops, action.payload],
            }
        default:
            return state
    }
}
