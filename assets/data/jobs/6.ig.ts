export const igindex = {
    title: "IG Group",
    company: "IG Group",
    startDate: "2011-12-01",
    endDate: "2015-06-31",
    position: "Developer",

    intro: `
        At IG I introduced the entire web-team to testing and ran lessons/sessions on both testing and javascript itself.
    `,

    full: ``,

    projects: [
        {
            title: `Building IG.com`,
            text: `Consolidating IG’s multiple websites (12 – one per country) down to just ig.com. This involved moving from a custom internal CMS to Adobe’s CQ CMS (now AEM). It posed a number of design and SEO challenges that had to be solved as well.`,
        },
        {
            title: `Improving the deployment process`,
            text: `The objective was to move from a 4-week release cycle down to 2 weeks, which involved introducing unit tests and functional testing as well as a script to run for the deploy process itself. I introduced and trained the team in writing and using unit and functional tests.`,
        },
        {
            title: `Making IG.com responsive`,
            text: `In order to comply with Google’s ‘mobile-friendly’ directives we established a number of best practices for the content teams to follow and tweaked components to make them work across as many devices as possible.`,
        },
        {
            title: `Stronger Encryption`,
            text: `In order to address a potential https exploit on an Akamai Edge server we had to work with several teams to implement a version of the password reset functionality that added another layer of encryption to the password being submitted. This work was also designed to follow the principals of graceful degradation and progressive enhancement.`,
        },
    ],

    tech: [
        "Javascript",
        "HTML",
        "CSS",
        "LESS",
        "Jasmine",
        "jQuery",
        "ExtJS",
        "Mocha",
        "Chai",
        "Sinon",
        "CasperJS",
        "Grunt",
        "Karma",
        "CQ",
        "Java",
        "SVN",
        "Maven",
        "Bamboo",
        "Jenkins",
        "JSP",
        "Apache",
        "Node",
        "curl",
    ]
};
