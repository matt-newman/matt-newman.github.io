<script setup>

import JobDates from './JobDates';

defineProps({
    company: String,
    position: String,
    startDate: String,
    endDate: String,
})
</script>

<style scoped>

.job--header {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    border-bottom: solid 2px var(--decorative-underline);
    margin-bottom: 0.5rem;
    width: fit-content;
}

.job--header::before {
    /* content: ""; */
    position: absolute;
    width: 1rem;
    height: 1rem;
    clip-path: polygon(0% 0, 100% 50%, 0 100%);
    background: linear-gradient(#fc3 50%, #c93 50%);
    transform: translate(-25px, 2px);
}

.job--header > * {
    margin-bottom: 0;
}

.job--company {
    color: var(--header-color--secondary);
    font-weight: 500;
}

.job--company::after {
    content: "-";
    margin: 0 0.5rem;
}

.job--position {

}
</style>

<template>
    <header class="job--header">
        <h3 class="job--company">{{ company }}</h3>
        <h4 class="job--position">{{ position }}</h4>
        <JobDates :startDate="startDate" :endDate="endDate" />
    </header>
</template>