<script setup>
defineProps({
    seperator: String,
    startDate: String,
    endDate: String,
})

const dateOptions = {
    month: 'short',
    year: 'numeric'
};

const calculateTimeDifference = (start, end) => {
    let output = '';
    let startDate = new Date(start);
    let endDate = new Date(end);
    let years = endDate.getFullYear() - startDate.getFullYear();
    let totalMonths = years * 12 - startDate.getMonth() + endDate.getMonth();
    let months = totalMonths % 12;

    if ( years > 0 ) {
        output += years;
        output += ' year' + (years > 1 ? 's' : '')
    }

    if ( months > 0 ) {
        output += ' ' + months;
        output += ' month' + (months > 1 ? 's' : '')
    }

    return output;
}
</script>

<style scoped>
.job--dates {
    font-size: 0.75rem;
    font-weight: normal;
}

@media screen and (min-width: 1000px) {
    .job--dates::before {
        content: "(";
        margin-left: 0.25rem;
    }

    .job--dates::after {
        content: ")";
    }
}
</style>

<template>
    <h5 class="job--dates">
        {{ calculateTimeDifference(startDate, endDate) }}
    </h5>
</template>