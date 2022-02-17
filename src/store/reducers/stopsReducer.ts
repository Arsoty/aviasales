import { StopsState, StopsActionTypes, StopsAction } from '../../types/stops'

const initialState: StopsState = {
    stops: [],
}

export const stopsReducer = (
    // eslint-disable-next-line default-param-last
    state = initialState,
    action: StopsAction
): StopsState => {
    switch (action.type) {
        case StopsActionTypes.STOPS_CHANGE:
            return { stops: action.payload }
        default:
            return state
    }
}
