<script setup>
    import Job from './Job/Job';
    const queryForJobs = { path: '/jobs', limit: 5, sort: [{ startDate: -1 }] }
</script>

<template>
    <main>
        <ContentList :query="queryForJobs" v-slot="{ list }">
            <section>
                <Job v-for="job in list" 
                    :key="job._path" 
                    v-bind="job"
                />
            </section>
        </ContentList>
    </main>
</template>