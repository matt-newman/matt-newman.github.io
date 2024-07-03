<script setup>
import { dateFormatter } from '../dateFormatter';

defineProps({
    seperator: String,
    startDate: String,
    endDate: String,
})

const dateOptions = {
    month: 'short',
    year: 'numeric'
};
</script>

<template>
    <h4 class="job--dates">
        <span class="job--start-date">{{ dateFormatter(startDate, dateOptions) }}</span>
        <span class="job--date-seperator"> &hyphen; </span>
        <span class="job--end-date">{{ dateFormatter(endDate, dateOptions) }}</span>
    </h4>
</template>