<script setup>
import JobHeader from './JobHeader';

defineProps({
    company: String,
    position: String,
    startDate: String,
    endDate: String,
    intro: String,
    excerpt: String,
    body: String,
})
</script>

<template>
    <JobHeader :company="company" :position="position" :startDate="startDate" :endDate="endDate" />
    <div class="job--intro">
        <ContentRendererMarkdown :value="excerpt" />
    </div>
    <div class="job--full" style="color: red">
        <ContentRendererMarkdown :value="body" />
    </div>
</template>