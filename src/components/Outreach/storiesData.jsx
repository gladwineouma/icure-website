export const rawStories = [
    {
        title: "Introducing iCure to Chuka University",
        location: "Chuka University",
        date: "March 14, 2026",
        dateString: "2026-03-14",
        image: "/chuka1 (2).JPG",
        excerpt: "Our team engaged over 150 students at Chuka University through live mobile repair demonstrations, practical diagnostics, and conversations around technology and hands-on skills.",
        body: [
            "Our team visited Chuka University for an engaging session with over 150 students, focused on making technology more accessible and demonstrating the practical opportunities that come with learning technical skills.",
            "We set up a mobile repair workstation in the main assembly hall and demonstrated real-world repair processes, including device diagnostics and screen replacement. The session gave students a closer look at what happens behind the technology they use every day and showed how technical skills can be developed through hands-on practice.",
            "The session sparked curiosity and meaningful conversations around electronics, repair, and technology as a practical career path. We also donated a beginner tool kit to the university's tech club to encourage students to continue exploring and developing their technical skills."
        ],
    },
    {
        title: "E-Waste Drive",
        location: "Dr Thuo E-Waste — Naivasha",
        date: "May 09, 2026",
        dateString: "2026-05-09",
        image: "/10.jpg",
        excerpt: "An educational visit exploring e-waste recycling and collecting refurbished equipment to support practical training at our centre.",
        body: [
            "In partnership with local environmental youth groups, we visited Dr Thuo E-Waste in Naivasha to learn more about e-waste management, recycling, and how discarded electronic materials can be given a second life.",
            "During the visit, we explored how e-waste can be transformed into useful products such as doors, windows, and storage solutions, giving us a deeper understanding of the value that can be created from materials that would otherwise be discarded.",
            "We also collected refurbished electronic devices and equipment that were taken back to our training centre to support students during practical sessions and hands-on technical training."
        ],
    },
    {
        title: "Volunteer Teaching Session",
        location: "St Charles Lwanga Vocational Training Centre — Kibera, Nairobi",
        date: "June 22, 2026",
        dateString: "2026-06-22",
        image: "/4.jpg",
        excerpt: "A hands-on session introducing young people to electronics, safe tool handling, and practical repair skills.",
        body: [
            "We visited St Charles Lwanga Vocational Training Centre in Kibera, Nairobi, for an intensive practical session focused on introducing young people to electronics and basic repair skills.",
            "Working closely with the trainees, we introduced them to multimeters, standard repair tools, and safe handling techniques. Rather than focusing only on theory, we encouraged them to work with the tools and practice basic diagnostics on electronic boards.",
            "The session was an opportunity to share practical knowledge, encourage vocational skills development, and inspire young people to explore electronics repair as a valuable and sustainable skill."
        ],
    },
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
