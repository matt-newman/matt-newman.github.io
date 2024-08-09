<script setup>
useHead({
    bodyAttrs: {
        class: 'no-js',
    },
});

const noJS = () => {
    document.querySelector('body').classList.remove('no-js');
}

onMounted(() => {
    setTimeout(() => {
        noJS();
    }, 1) // this is required for DOM to exist in vuejs
})

import * as jobs from '../assets/data/jobs';

</script>


<template class="no-js">
    <a href="#site-content" class="skip-to-main-content-link screen-reader-text">Skip to main content</a>

    <div class="site-wrapper site-grid">
        <header class="site-header">
            <h1 class="site-title">Matt Newman</h1>
            <div class="site-subtitle no-print">Engineer</div>
        </header>

        <main class="site-content">
            <Jobs :jobs="jobs" />
        </main>

        <aside class="aside-wrapper site-sidebar">
            <About />
            <Skills />
            <Contact />
        </aside>
    </div>

    <a href="#top" class="back-to-top no-print">
        <span>Back to top</span>
    </a>

</template>
