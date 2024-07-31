<script setup>

import JobDates from './JobDates';

defineProps({
    company: String,
    position: String,
    startDate: String,
    endDate: String,
})

</script>

<template>
    <header class="job--header">
        <h3 class="job--company">{{ company }}</h3>
        <h4 class="job--position">{{ position }}</h4>
        <JobDates :startDate="startDate" :endDate="endDate" />
    </header>
</template>