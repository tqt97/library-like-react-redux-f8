const init = {
    cars: ['BMV']
}

export default function reducer (state = init, action, args) {
    console.log(action, args)

    switch (action) {
        case 'CREATE':
            const [newCar] = args
            return {
                ...state,
                cars: [...state.cars, newCar]
            }
            break
        default:
            return state
    }
}