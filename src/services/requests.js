import { filterDatesCalendar, routeCalendar, allRoutes } from './api.js'

export const getDataCalendar = async (dateFrom, dateTo = null) => {
    try {
        const response = await filterDatesCalendar(dateFrom, dateTo)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getDataByRouteId = async (routeId) => {
    try {
        const response = await routeCalendar(routeId)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getRoutes = async () => {
    try {
        const response = await allRoutes()
        return response.data
    } catch (error) {
        console.log(error)
    }
}