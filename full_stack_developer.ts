/**
 * July 2017
 *
 * Genialis is looking for full-stack developer.
 *
 * We build software to help biologists make the next big breakthrough,
 * find the next elusive cure, discover the next wonder drug.
 *
 * We are only successful because of the camaraderie and teamwork that
 * percolates throughout the entire organization.
 **/
export class Genialis extends Startup {

    public responsibilities: string[] = [
        "Participate in every stage of feature development from brainstorming and design through implementation " +
        "including fixing that last critical bug under a tight release deadline",
        "Implement major features from scratch with well-structured and tested code",
        "Mentor colleagues and perform code reviews"
    ];

    public requirements: string[] = [
        "Strong technical background with leading edge technologies",
        "Solid understanding of the full web technology stack",
        "Experience with interactive and responsive web user interfaces",
        "Positive, make-it-happen, lead-by-example approach"
    ];

    public whatWeOffer: string[] = [
        "A nurturing environment where people are given room to learn and innovate",
        "Encouragement to contribute to open source projects",
        "Competitive salary: 24,000 to 60,000 EUR/year (depends on experience)",
        "International team and openness to remote work",
        "Equity options"
    ];

    public locations: string[] = [
        "Ljubljana, Slovenia, EU",
        "Remote",
    ];

    private _stack: string[] = [
        "Angular",
        "Karma, PhantomJS, Jasmine",
        "TypeScript",
        "JSPM",
        "Gulp",
        "Resolwe",
        "Django REST Framework",
        "Django",
        "PostgreSQL",
        "Redis",
        "Docker"
    ];

    constructor(
        emailFrom: string   = "you@awesome-dev.si",
        emailTo: string     = "jobs@genialis.com"
    ) {
        super();
        sendEmail(emailFrom, emailTo, "Hi!");
    }
}
