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

<style scoped>
.job--dates {
    font-size: 0.75rem;
}

.job--dates::before {
    content: "[";
    margin-left: 0.25rem;
}
.job--dates::after {
    content: "]";
}
</style>

<template>
    <h5 class="job--dates">
        <span class="job--start-date">{{ dateFormatter(startDate, dateOptions) }}</span>
        <span v-if="endDate" class="job--date-seperator"> &hyphen; </span>
        <span v-if="endDate" class="job--end-date">{{ dateFormatter(endDate, dateOptions) }}</span>
    </h5>
</template>