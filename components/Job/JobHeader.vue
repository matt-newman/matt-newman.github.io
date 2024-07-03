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
        <h2 class="job--company">{{ company }}</h2>
        <h3 class="job--position">{{ position }}</h3>
        <JobDates :startDate="startDate" :endDate="endDate" />
    </header>
</template>