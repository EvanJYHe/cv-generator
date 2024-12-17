import uniqid from "uniqid";

const exampleData = {
    personalInfo: {
        fullName: "SpongeBob SquarePants",
        email: "sponge.bob@gmail.com",
        phoneNumber: "29,998,559,671,349",
    },

    educationInfo: [
        {
            degree: "Fry Cook Certification",
            schoolName: "Krusty Krabs Culinary Institute",
            location: "Bikini Bottom, SEA",
            startDate: "1986/10/03",
            endDate: "present",
            id: uniqid(),
        }
    ],    
    
    experienceInfo: [
        {
            company: "Krusty Krabs",
            job: "fry cook",
            location: "Canada",
            startDate: "1986-07-14",
            endDate: "2024-10-01",
            description: "Prepared the world-famous Krabby Patties and ensured high-quality customer service",
            id: uniqid(),
        },
    ],

};

export default exampleData;