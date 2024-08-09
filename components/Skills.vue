await queryContent('/hello').findOne()
<script setup>
import { skills } from '../assets/data/skills';
</script>

<style scoped>
.skills-list {
    margin-bottom: 1em;
}

.skills-list--title {
    font-size: 1.3rem;
    font-variant: small-caps;
    margin-bottom: 0.25em;
    margin-left: 0;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
}

.skills-list--list {
    list-style: none;
    margin: 0;
    padding: 0;
}

.skills-list--item {
    display: inline;
    font-size: 1rem;
    line-height: 1.4rem;
}
</style>

<!-- components/Contact/skills.vue -->
<template>
    <section class="content content--skills">
        <h3 class="title skills-header no-print">
            Skills
        </h3>
        <template v-for="(value, key) in skills" :key=value>
            <div class="skills-list" :class="`${key === 'cms'? 'no-print' : ''}`">
                <h4 class="title skills-list--title">{{ key }}</h4>
                <ul class="skills-list--list">
                    <template v-for="(term, index) in value" :key=term>
                        <li class="skills-list--item">{{ term }}<span v-if="index != value?.length - 1">, </span></li>
                    </template>
                </ul>
            </div>
        </template>
    </section>
</template>