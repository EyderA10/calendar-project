<template>
    <div class="filter">
        <label class="filter__label">Seleccione fecha: </label>
        <VueDatePicker v-model="date" range :enable-time-picker="false" :partial-range="false" :format="format" />
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name: 'Filter',
    data() {
        return {
            date: new Date(2021, 7, 2),
            dateFrom: '',
            dateTo: ''
        }
    },
    mounted() {
        const startDate = new Date(2021, 7, 2)
        const endDate = new Date(new Date(2021, 7, 2).setDate(startDate.getDate()))
        this.date = [startDate, endDate]
    },
    watch: {
        date(value) {
            this.dateFrom = moment(value[0]).format('DD-MM-YYYY')
            this.dateTo = moment(value[1]).format('DD-MM-YYYY')
            this.$emit('getDates', {dateFrom: this.dateFrom, dateTo: this.dateTo})
        }
    },
    methods: {
        format(date) {
            const dateFrom = moment(date[0]).format('DD/MM/YYYY')
            const dateTo = moment(date[1]).format('DD/MM/YYYY')
            return `${dateFrom} - ${dateTo}`
        }
    }
}
</script>

<style scoped>
.filter {
    width: 40%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 25px 40px;
}
</style>