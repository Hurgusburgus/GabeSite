export class Resume {
    name: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
    works: Work[];
    educations: Education[];
    skills: string[];
    addlInfo: string[];
}

export class Education {
    date: string;
    institution: string;
    href: string;
    degree: string;
    descriptions: string[];
}

export class Work {
    company: string;
    position: string;
    date: string;
    location: string;
    href: string;
    descriptions: string[];
}

export const gabeResume: Resume = {
    name: "Gabriel Rimmon",
    email: "gxrimn@gmail.com",
    phone: "Los Angeles",
    location: "Tel Aviv",
    summary: "Full-stack Software Engineer with 5 years professional experience. I have a specialty in IoT cloud-based web applications as consultant for many organizations and industries including healthcare and manufacturing. Currently a Data Science Fellow at Israel Tech Challenge.",
    works: [
        {
            company: "Innoviz",
            date: "2019",
            position: "Software Engineer",
            href: "https://innoviz.tech/",
            location: "Rosh Ha'ayin, Israel",
            descriptions: [
                "Responsible for autonomous vehicle trip data collection, transformation, and storage, along with a full Angular7 front-end for visualization and export of rosbag data"
            ]
        },
        {
            company: "BlueMetal Architects, Insight",
            date: "2018",
            position: "Software Engineer II",
            href: "https://www.insight.com/en_US/home.html",
            location: "Boston, MA",
            descriptions: [
                "Full-stack developer Microsoft Azure Cloud/IoT applications, working with a variety of different projects and technologies in a variety of different industries",
                "Front-end lead on a security camera IoT troubleshoot web app for Avigilon (react.js/Redux)",
                "Web services lead on 2 IoT dashboard webapps in the manufacturing and foodservice industries (ASP.NET Core)"
            ]
        },
        {
            company: "BlueMetal Architects, Insight",
            date: "2016-2017",
            position: "Software Engineer I",
            href: "https://www.insight.com/en_US/home.html",
            location: "Boston, MA",
            descriptions: [
                "Web services consultant for a big data/predictive analytics project for Stewart Healthcare",
                "Lead mobile developer for an IoT mobile application for Otis Elevator Company (iOS, swift)",
                "Company-wide MVP award Q2 2017"
            ]
        },
        {
            company: "Epic Systems",
            date: "2013-2015",
            position: "Software Developer",
            href: "https://www.epic.com/",
            location: "Madison, WI",
            descriptions: [
                "Developed, enhanced, & maintained various features of infrastructure & data trending tools of Ambulatory application",
                "Certified in VB / Cache programming and Ambulatory Applications",
                "Gained significant knowledge of US healthcare industry its regulations"
            ]
        }  
    ],
    educations: [
        {
            date: "2018-2019",
            institution: "Israel Tech Challenge",
            degree: "Data Science Fellows",
            href: "https://www.itc.tech/",
            descriptions: [
                "five-month full-time training course in collaboration with leading tech companies, which qualifies talented STEM BSc/MSc graduates as professional Data Scientists. Main focus is hands-on experience and skill-set in Machine Learning, Deep Learning, Computer Vision, and more, through exercises, self-led learning, and teamwork"
            ]
        },
        {
            date: "2009-2013",
            institution: "Boston University",
            degree: "B.A. Computer Science",
            href: "http://www.bu.edu/cs/",
            descriptions: [
                "Dean’s List 2013",
                "Courses in Networks, Databases, Computer Graphics, Information Security, Computer Systems, Algorithms"
            ]
        }
    ],
    skills: [
        "Python, C# ASP.NET (Core), Azure Resource Management, Javascript (React.js/Redux), Java, C, C++, SQL, Docker, Spark, Git, Linux, sklearn, Keras, Tensorflow.",
        "Data Science topics: Exploration, modeling, feature engineering, dimensionality reduction, regularization techniques and model tuning, clustering, neural networks, optimization, computer vision, NLP, serving models",
        "Software development skills: Software architecture, cloud resource management (IoT specialty), and front-end and web service development, Agile/Scrum"
    ],
    addlInfo: [
        "Native English speaker",
        "Intermediate-level Hebrew",
        "Avid biker and rock climber"
    ]


} 
