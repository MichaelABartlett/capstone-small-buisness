export const addListing = (aListing) => {
    return {
        type: 'ADD_LISTING',
        value: aListing
    }
}

export const removeListing = (index) => {
    return {
        type: 'REMOVE_LISTING',
        value: index
    }
}