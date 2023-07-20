import axios from 'axios'

export const filterDatesCalendar = async (dateFrom, dateTo = null) => (
    await axios.get(`/filter-dates-calendar/${dateFrom}/${dateTo !== null ? dateTo : ''}`)
)

export const routeCalendar = async (routeId) => (
    await axios.get(`/route-calendar/${routeId}`)
)

export const allRoutes = async () => (
    await axios.get(`/routes`)
)