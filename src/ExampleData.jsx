import uniqid from "uniqid";

const exampleData = {
    personalInfo: {
        fullName: "SpongeBob SquarePants",
        email: "sponge.bob@gmail.com",
        phoneNumber: "647-874-4740",
    },

    educationInfo: [
        {
            degree: "Fry Cook Certification",
            schoolName: "Krusty Krabs Culinary Institute",
            location: "Bikini Bottom, SEA",
            startDate: "Oct, 1986",
            endDate: "Present",
            id: uniqid(),
        },
        {
            degree: "Marine Biology Basics",
            schoolName: "Bikini Bottom Community College",
            location: "Bikini Bottom, SEA",
            startDate: "Jan, 1990",
            endDate: "Jun, 1992",
            id: uniqid(),
        },
        {
            degree: "Underwater Hospitality Management",
            schoolName: "Coral Reef Academy",
            location: "Pacific Ocean, SEA",
            startDate: "Sep, 2000",
            endDate: "Jun, 2004",
            id: uniqid(),
        }
    ],

    experienceInfo: [
        {
            company: "Krusty Krabs",
            job: "Fry Cook",
            location: "Bikini Bottom, SEA",
            startDate: "Jul, 1986",
            endDate: "Present",
            description: "Prepared Krabby Patties and maintained kitchen efficiency.",
            id: uniqid(),
        },
        {
            company: "The Salty Spitoon",
            job: "Event Caterer",
            location: "Bikini Bottom, SEA",
            startDate: "Mar, 2010",
            endDate: "Dec, 2015",
            description: "Designed and delivered catering services for events.",
            id: uniqid(),
        },
        {
            company: "Weenie Hut Jr's",
            job: "Shift Supervisor",
            location: "Bikini Bottom, SEA",
            startDate: "Jan, 2005",
            endDate: "Aug, 2009",
            description: "Managed daily operations and supervised staff.",
            id: uniqid(),
        },
        {
            company: "Anchor Arms Gym",
            job: "Fitness Snack Specialist",
            location: "Bikini Bottom, SEA",
            startDate: "Jan, 2008",
            endDate: "Jul, 2013",
            description: "Developed and served healthy snacks for gym members.",
            id: uniqid(),
        },
    ],
};

export default exampleData;
