<script setup>
import Job from './Job/Job';

const recentJobsNumber = 4;
const recentJobs = { path: '/jobs', limit: recentJobsNumber, sort: [{ startDate: -1 }] };
const oldJobs = { path: '/jobs', skip: recentJobsNumber, sort: [{ startDate: -1 }] };

// expand all

const checkedJobs = ref([]);
const checkboxSelector = '.job input[type=checkbox]';

const expandAll = () => {
    const checkboxes = document.querySelectorAll(checkboxSelector);
    const checkboxesArray = Array.from(checkboxes);

    checkboxesArray.forEach(element => {
        element.checked = true;
    });
}

const collapseAll = () => {
    const checkboxes = document.querySelectorAll(checkboxSelector);
    const checkboxesArray = Array.from(checkboxes);

    checkboxesArray.forEach(element => {
        element.checked = false;
    });
}
</script>

<style scoped>
.jobs--toggle-wrapper {
    display: inline-block;
    transform: translate(2rem, -0.5rem);
}
</style>

<template>
    <section class="content content--jobs">

        <h2 class="title title--experience">Experience</h2>

        <div class="jobs--toggle-wrapper">
            <button class="jobs--toggle jobs--toggle--expand" @click="expandAll()">Expand All</button>
            <span class="jobs--toggle--seperator"> / </span>
            <button class="jobs--toggle jobs--toggle--collapse" @click="collapseAll()">Collapse All</button>
        </div>

        <ContentList :query="recentJobs" v-slot="{ list }">
            <Job v-for="(job, index) in list" :key="job._path" v-bind=job :index=index v-model="checkedJobs[index]" />
        </ContentList>

        <ContentList :query="oldJobs" v-slot="{ list }">
            <Job v-for="(job, index) in list" :key="job._path" v-bind="job" :old=true
                :index="(index + recentJobsNumber)" v-model="checkedJobs[(index + recentJobsNumber)]" />
        </ContentList>

    </section>
</template>