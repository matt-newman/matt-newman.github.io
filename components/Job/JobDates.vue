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

const monthDiff = (start, end) => {
    let months;
    months = (end.getFullYear() - start.getFullYear()) * 12;
    months -= start.getMonth();
    months += end.getMonth();
    return months <= 0 ? 0 : months;
}

const pluralise = ( text, num ) => {
    return text + (num > 1 ? 's' : '');
}

const calculateTimeDifference = (start, end) => {
    let output = '';
    let startDate = new Date(start);
    let endDate = new Date(end);

    let totalMonths = monthDiff(startDate, endDate);
    let years = Math.floor( totalMonths / 12 );
    let months = totalMonths % 12;

    if ( years > 0 ) {
        output += years;
        output += pluralise(' year', years);
    }

    if ( months > 0 ) {
        output += ' ' + months;
        output += pluralise(' month', months);
    }

    return output;
}
</script>

<style scoped>
.job--dates {
    font-size: 0.75rem;
    font-weight: normal;
}

@media screen and (min-width: 1350px) {
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