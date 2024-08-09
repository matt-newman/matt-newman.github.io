<script setup>

defineProps({
    jobs: Object,
})

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

const sortJobs = ((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB - dateA;
});
</script>

<style scoped>

.no-js .jobs--toggle-wrapper {
    display: none;
}

.jobs--toggle-wrapper {
    display: inline-block;
    font-size: 0.7rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
}

@media screen and (min-width: 1000px) {
    .jobs--toggle-wrapper {
        margin-left: 2rem;
        transform: translateY(-0.5rem);
    }
}
</style>

<template>
    <section class="content content--jobs">
        <h2 class="title title--experience">Experience</h2>

        <div class="jobs--toggle-wrapper no-print">
            <button class="jobs--toggle jobs--toggle--expand" @click="expandAll()">Expand All</button>
            <span class="jobs--toggle--seperator"> / </span>
            <button class="jobs--toggle jobs--toggle--collapse" @click="collapseAll()">Collapse All</button>
        </div>

        <div v-for="(job, index) in Object.values(jobs).sort(sortJobs)" :key="job">
            <Job :job="job" :index=index v-model="checkedJobs[index]" />
        </div>

    </section>
</template>