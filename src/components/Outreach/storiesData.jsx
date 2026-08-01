export const rawStories = [
    {
        title: "Introducing iCure to Chuka University",
        location: "Chuka University",
        date: "March 14, 2026",
        dateString: "2026-03-14",
        image: "/gallery-8.jpg",
        excerpt: "Our team visited Chuka University to inspire over 150 students by demystifying technology through live mobile repair and diagnostic demonstrations.",
        body: [
            "Our team spent an incredible morning with over 150 bright students at Chuka University. The goal was simple: demystify technology and show these young minds that fixing things is just as creative as building them.",
            "We set up a fully functional mobile repair bench right in the main assembly hall. The students watched in awe during live diagnostics and screen replacement demonstrations. A few volunteers even tried their hand at basic safe diagnostics.",
            "The curiosity was off the charts. We left inspired, having gifted the school's tech club a beginner tool kit to keep their curiosity buzzing."
        ],
    },
    {
        title: "E-Waste Collection Drive",
        location: "Community Hall — Nairobi",
        date: "May 09, 2026",
        dateString: "2026-05-09",
        image: "/gallery-15.jpg",
        excerpt: "Residents dropped off old phones, laptops, and accessories. We salvaged usable parts for training and safely disposed of the rest.",
        body: [
            "In partnership with local environmental youth groups, we hosted our quarterly E-Waste Collection Drive at the Kilimani Community Hall.",
            "The response from residents was overwhelming. Over the course of a single Saturday, we collected more than 240 legacy devices, including old smartphones, laptops, and desktop towers.",
            "Our training team sorted through every single item. We successfully harvested dozens of functioning components—screens, batteries, RAM sticks, and charging ports—which will now serve as vital practice materials for our youth students."
        ],
    },
    {
        title: "Volunteer Teaching Session",
        location: "Kawangware Youth Centre",
        date: "June 22, 2026",
        dateString: "2026-06-22",
        image: "/gallery-11.jpg",
        excerpt: "A hands-on afternoon teaching youths the basics of electronics, safe tool handling, and simple repairs.",
        body: [
            "We took our tools and passion to the Kawangware Youth Centre for an intensive, practical workshop designed to spark vocational interest in electronics.",
            "Working in small groups, the youths were introduced to multi-meters, thermal cameras, and standard repair toolsets. Instead of just lecturing, we let them handle mock boards.",
            "Seeing that lightbulb moment when a student successfully tracked down a power failure reminds us why these community outreach sessions matter so much."
        ],
    },
    // Add this block at the very end of your array to test:
    // {
    //     title: "TEST: This Should Appear First!",
    //     location: "Test Location Hub",
    //     date: "July 23, 2026",
    //     dateString: "2026-07-23", // A date that is newer than your other stories
    //     image: "/gallery-8.jpg",
    //     excerpt: "If you see this card as the first item in the grid, your chronological sorting snippet is working flawlessly.",
    //     body: [
    //         "Success! The array sorting function successfully re-ordered the elements behind the scenes based on the ISO dateString parameter."
    //     ],
    // }

];

export const sortedStories = [...rawStories].sort(
    (a, b) => new Date(b.dateString).getTime() - new Date(a.dateString).getTime()
);
