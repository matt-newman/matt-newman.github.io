<script setup>
import JobHeader from './JobHeader.vue';

defineProps({
    index: Number,
    job: Object,
})

const [model] = defineModel();
const recentJobMaxIndex = 4;
</script>

<style scoped>
.job-wrapper {
    margin-bottom: 2rem;
}

.job--intro {
    margin-bottom: 0.5rem;
}

.job-heading {
    border-bottom: solid 2px var(--decorative-underline);
    display: inline-block;
    margin-bottom: 0.5rem;
}

.project-list--title {
    font-size: 0.8rem;
    margin-bottom: 0;
}

.project-list--item {
    margin-bottom: 0.5rem;
}

.tech-list {
    font-size: 0.75rem;
    padding-left: 0;
}

.tech-list--item {
    display: inline-block;
}

.tech-list--item::after {
    content: ", ";
    padding-right: 0.3rem;
}

.tech-list--item:last-child::after {
    content: "";
}

@media screen and (min-width: 1000px) {
    .job {
        margin-left: 0.5rem;
    }
}
</style>

<template>
    <div class="job-wrapper">
        <div class="job tab">

            <input type="checkbox" :name="`job--accordion--${index}`" :id="`job--${index}`" v-model="model"
                :checked="index === 0">

            <JobHeader :company="job.company" :position="job.position" :startDate="job.startDate"
                :endDate="job.endDate" />

            <div class="job--intro" :class="`${index > recentJobMaxIndex ? 'print' : ''}`">
                <div v-html="job.intro"></div>
            </div>

            <div class="job--full tab__content" :class="`${index > recentJobMaxIndex ? 'no-print' : ''}`">
                
                <div v-html="job.full"></div>

                <section class="content content--projects" v-if="job.projects.length > 0">
                    <h4 class="title--project job-heading">
                        Projects
                    </h4>
                    <div class="projects-list">
                        <template v-for="(project) in job.projects" :key=project>
                            <div class="project-list--item">
                                <h5 class="project-list--title">{{ project.title }}</h5>
                                <div class="project-list--text">{{ project.text }}</div>
                            </div>
                        </template>
                    </div>
                </section>

                <section class="content content--tech" v-if="job.tech.length > 0">
                    <h4 class="title--tech job-heading">
                        Tech
                    </h4>
                    <div class="tech-list--wrapper">
                        <ul class="tech-list">
                            <li v-for="(tech) in job.tech" :key=tech class="tech-list--item">
                                {{ tech }}
                            </li>
                        </ul>
                    </div>
                </section>

            </div>

            <label :for="`job--${index}`" class="tab__label no-print"><span class="hidden">Show / Hide</span></label>
        </div>
    </div>
</template>