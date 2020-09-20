export const filterByData = (filterType) => {
    return filterType
}

export const deleteFilter = (filters, filterKeyToDelete) => {
    return Object.fromEntries(Object.entries(filters).filter(([key, value]) => {
        return key !== filterKeyToDelete
    }))
}