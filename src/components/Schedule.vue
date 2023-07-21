<template>
    <div class="schedule">
        <Header />
        <Filter @getDates="getDates" />
        <div class="schedule__calendar">
            <div>
                <Calendar :attributes="attributes" title-position="left" />
            </div>
            <RouteList @getRouteId="findByRoute"/>
        </div>
    </div>
</template>

<script>
import Filter from './Filter.vue'
import Header from './Header.vue'
import RouteList from './RouteList.vue'
import { Calendar } from 'v-calendar';
import { getDataCalendar, getDataByRouteId } from '../services/requests.js'

export default {
    components: { Header, Filter, RouteList, Calendar },
    name: 'Schedule',
    data() {
        return {
            attributes: [],
        }
    },
    updated() {
        this.attributes = []
    },
    methods: {
        getDates({ dateFrom, dateTo }) {
            if (dateFrom === dateTo) {
                getDataCalendar(dateFrom).then((data) => {
                    this.showDataToCalendar(data)
                })
                    .catch((err) => console.log(err))
            } else {
                getDataCalendar(dateFrom, dateTo).then((data) => {
                    this.showDataToCalendar(data)
                })
                    .catch((err) => console.log(err))
            }
        },
        showDataToCalendar({ data }) {
            let reservations = []
            let daysDisabled = []
            let routeCapacity = []
            if (data.length === 0) return
            data.forEach((calendar) => {
                if (calendar.route.reservations.length > 0) {
                    calendar.route.reservations.map((reservation) => reservations.push(new Date(reservation.created_at)))
                }
                if (calendar.calendar.days_disabled.length > 0) {
                    calendar.calendar.days_disabled.map((daysD) => daysDisabled.push(new Date(daysD.day)))
                }
                routeCapacity.push(new Date(calendar.route.start_timestamp))
            })
            this.attributes.push(
                {
                    highlight: {
                        color: 'green',
                        fillMode: 'solid'
                    },
                    dates: [reservations]
                },
                {
                    highlight: {
                        color: 'orange',
                        fillMode: 'solid'
                    },
                    dates: daysDisabled
                },
                {
                    highlight: {
                        color: 'gray',
                        fillMode: 'solid'
                    },
                    dates: routeCapacity
                },
            )
        },
        findByRoute(id) {
            getDataByRouteId(id).then((data) => {
                this.showDataToCalendar(data)
            })
            .catch(err => console.log(err))
        }
    }
}
</script>

<style scoped>

.schedule {
    margin: 0 50px;
}
.schedule .schedule__calendar {
    display: flex;
    justify-content: space-around;
}
</style>