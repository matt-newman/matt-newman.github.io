<script setup>
import Job from './Job/Job';

const recentJobsNumber = 4;
const recentJobs = { path: '/jobs', limit: recentJobsNumber, sort: [{ startDate: -1 }] };
const oldJobs = { path: '/jobs', skip: recentJobsNumber, sort: [{ startDate: -1 }] };
</script>

<template>
    <h2>Experience:</h2>
    <ContentList :query="recentJobs" v-slot="{ list }">
        <section>
            <Job v-for="job in list" :key="job._path" v-bind="job" />
        </section>
    </ContentList>
    <ContentList :query="oldJobs" v-slot="{ list }">
        <section>
            <Job v-for="oldJob in list" :key="oldJob._path" v-bind="oldJob" />
        </section>
    </ContentList>
</template>