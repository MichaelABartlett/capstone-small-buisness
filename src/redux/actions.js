export const addListing = (listing) => {
    return {
        type: 'ADD_LISTING',
        value: listing
    }
}

export const removeListing = (index) => {
    return {
        type: 'REMOVE_LISTING',
        value: index
    }
}

export const logInUser = (user) => {
    return {
        type: 'LOG_IN_USER',
        value: user
    }
}

export const logOutUser = (user) => {
    return {
        type: 'LOG_OUT_USER',
        value: ""
    }
}

