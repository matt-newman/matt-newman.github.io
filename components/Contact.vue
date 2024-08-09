<script setup>
import { contactDetails } from '../assets/data/contact';
</script>

<style scoped>
.contact-list--title {
    color: var(--side-header-color);
    display: inline-block;
}

.link {
    padding-left: 1rem;
}
</style>

<!-- components/Contact/Contact.vue -->
<template>
    <section class="content content--contact">
        <h3 class="title title--contact">
            Contact
        </h3>
        <div class="contact-list">
            <template v-for="(item) in contactDetails" :key=item>
                <div class="contact-list--item">
                    <h4 class="contact-list--title" :class="`contact-list--title--${item.type}`">{{ item.type }}:</h4>
                    <a class="link contact-list--link" :href="`${item.url}`" target="_blank">{{ item.text }}</a>
                </div>
            </template>
        </div>
    </section>
</template>