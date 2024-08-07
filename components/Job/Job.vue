<script setup>
import JobHeader from './JobHeader';

defineProps({
    oldJob: Boolean,
    company: String,
    position: String,
    startDate: String,
    endDate: String,
    intro: String,
    body: Object,
    excerpt: Object,
    index: Number,
    old: Boolean,
})

const [model] = defineModel();

</script>

<style scoped>
.job-wrapper {
    margin-bottom: 2rem;
}

/* Core styles/functionality */
.tab input {
    position: absolute;
    opacity: 0;
    z-index: -1;
}

.tab__content {
    max-height: 0;
    overflow: hidden;
    transition: all 0.35s;
}

.tab input:checked~.tab__content {
    max-height: 100rem;
}

.tab input:checked~.job--intro {
    display: none;
}

.tab__label,
.tab__close {
    display: flex;
    cursor: pointer;
}

.tab__label {
    align-items: center;
    padding: 0.25rem;
    font-family: monospace;
    font-size: 0.8rem;
    width: fit-content;
    color: var(--header-color--secondary);
}

.tab__label:hover {
    align-items: center;
    color: var(--header-color);
}

.tab__label::after,
.tab__label::before {
    padding: 0 0.25em 0 0.25em;
}

.tab__label::after {
    align-self: flex-start;
    content: "more() ...";
}

.tab__label::before {
    content: "\276F";
    color: var(--prompt-color);
    text-align: center;
    transform: rotate(0deg) translateY(-1px);
    transition: all 0.35s;
}

.tab input:checked~.tab__label::after {
    content: "less()";
}

/* .tab input:checked ~ .tab__label::before {
    transform: rotate(270deg);
} */

.tab__close {
    justify-content: flex-end;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
}

/* Arrow animation */
/* .tab input:not(:checked) ~ .tab__label:hover::before {
    animation: bounce 2.5s infinite;
} */

@keyframes bounce {
    25% {
        transform: rotate(90deg) translate(.25rem);
    }

    75% {
        transform: rotate(90deg) translate(0);
    }
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
            <input type="checkbox" :name="`job--accordion--${index}`" :id="`job--${index}`" v-model="model" :checked="index === 0">

            <JobHeader :company="company" :position="position" :startDate="startDate" :endDate="endDate" />

            <div class="job--intro" :class="`${old ? 'print' : ''}`">
                <ContentRendererMarkdown :value="excerpt" />
            </div>

            <div class="job--full tab__content" :class="`${old ? 'no-print' : ''}`">
                <ContentRendererMarkdown :value="body" />
            </div>

            <label :for="`job--${index}`" class="tab__label no-print"></label>
        </div>
    </div>
</template>