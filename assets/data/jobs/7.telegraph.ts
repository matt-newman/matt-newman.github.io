export const telegraph = {
    title: "The Telegraph",
    company: "Telegraph Media Group",
    startDate: "2015-09-01",
    endDate: "2018-12-31",
    position: "Senior Engineer",

    intro: `
        As a Senior Engineer at the Telegraph I played a leading role in cleaning up the implementation of their templates and renderers used. This has the long term aim of simplifying and improving: development, maintenance, testing and performance. This meant understanding the entire breadth of the offering of the Telegraph, its 45 different page types and their implementation details.
    `,

    full: ``,

    projects: [
        {
            title: `Rebuilding lists`,
            text: `lists form more than 60 % of the telegraph website.The first step constituted replacing 6500 topic pages`,
        },
        {
            title: `Front - end build process`,
            text: `Improving build and iteration time for front - end development on the AEM platform`,
        },
        {
            title: `CSS and JS linting for TMG`,
            text: `To help consistency of development approach and standards`,
        },
        {
            title: `Adding user - commenting`,
            text: `Integration with 3rd Party commenting system Livefyre`,
        },
        {
            title: `MyTelegraph`,
            text: `Allowing registered users to follow Journalists and Topics`,
        },
        {
            title: `Performance improvements`,
            text: `Part of a small set of people who drastically improved the performance of the Telegraph, taking Speed Index from 12s(5mb / 1mb 20ms latency) to 4s.That improvement was achieved incrementally on an old codebase, with the new implementation of templates, brought SI down to less than 2 seconds, see: [https://www.telegraph.co.uk/health/](https://www.telegraph.co.uk/health/) the overall performance measure was changed to leverage lighthouse reports.`,
        },
        {
            title: `Apple News Integration`,
            text: `Allowing telegraph news(open and premium) to be read on AppleNews`,
        },
        {
            title: `Launching Travel vertical`,
            text: `Bring the Travel section's 3rd party parts onto the telegraph.co.uk domain`,
        }
    ],

    tech: [
        "AEM / CQ",
        "Git",
        "Javascript",
        "HTML",
        "CSS",
        "SASS",
        "BASH",
        "Jest",
        "Node / NPM",
        "Akamai",
        "React",
        "Mocha",
        "BackstopJS",
        "Java",
        "Jenkins",
        "Apache",
        "AWS",
        "curl",
    ],
};
