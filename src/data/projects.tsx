import {
    apiProjectImage,
    siakadProjectImage,
    mecProjectImage,
    hexamProjectImage,
    limsProjectImage,
    nihrProjectImage,
    signmateProjectImage,
    sphaProjectImage,
    larazillowProjectImage,
    startupProjectImage,
    feederProjectImage,
    sipointProjectImage,
} from "./images";

export const projects = [
    {
        name: "SIAKAD",
        link: "https://demo.siakad.net",
        image: siakadProjectImage,
        description:
            "SIAKAD (Sistem Informasi Akademik) is a comprehensive project designed for college students, integrating academic management with a banking system to provide a seamless and efficient experience. The platform offers essential features such as course registration, grades tracking, and scheduling, while also incorporating financial functionalities like tuition payment processing, balance inquiries, and transaction history. This unique combination allows students to manage both their academic and financial needs within a single, intuitive platform.",
        techs: ["MySQL", "CodeIgniter", "JavaScript"],
    },
    {
        name: "Malang Eye Center",
        link: "https://apps.malangeyecenter.net",
        image: mecProjectImage,
        description:
            "Malang Eye Center is a specialized hospital system designed to streamline and enhance the management of eye care services. This system offers comprehensive features, including patient registration, appointment scheduling, medical record management, and billing processes, all tailored to meet the specific needs of an eye care facility. With a focus on efficiency and user-friendly design, the system ensures smooth coordination between patients, medical staff, and administrative teams. ",
        techs: ["MySQL", "CodeIgniter", "JavaScript"],
    },
    {
        name: "HEXAM",
        link: "https://hexam.kimedaka.com",
        image: hexamProjectImage,
        description:
            "Hexam is an advanced exam app designed for both teachers and students, creating an interactive and efficient platform for assessments. Teachers can use the app to create, manage, and schedule quizzes, while leveraging features like question banks, grading automation, and detailed analytics to streamline their workflow. Students, on the other hand, can easily access and take exams, view their results in real-time, and track their progress over time.",
        techs: ["MySQL", "CodeIgniter", "JavaScript"],
    },
    {
        name: "LIMS PT. JX Nippon",
        link: "https://",
        image: limsProjectImage,
        description:
            "LIMS (Laboratory Information Management System) is a specialized system designed to optimize and manage processes in oil manufacturing. This system provides robust features for monitoring production workflows, tracking raw materials, managing quality control, and generating detailed reports. With a focus on precision and efficiency, LIMS ensures that every stage of the oil-making process adheres to industry standards and best practices.",
        techs: ["MySQL", "CodeIgniter", "JavaScript"],
    },
    {
        name: "NIHR",
        link: "https://nihr.siakad.net",
        image: nihrProjectImage,
        description:
            "NIHR (National Institute for Health Research) is a budgeting system specifically designed to assist doctors in managing their financial resources for medical projects and research. This system provides tools for creating and tracking budgets, allocating funds to various categories such as research, equipment, and operational costs, and generating detailed financial reports. With an intuitive interface, NIHR ensures that doctors can easily manage their funding, making it easier to stay within budget while maintaining the financial integrity of their medical initiatives.",
        techs: ["MySQL", "Laravel", "JavaScript", "Tailwind CSS"],
    },
    {
        name: "SignMate",
        link: "https://github.com/donywahyur/hackfest_signmate",
        image: signmateProjectImage,
        description:
            "Sign Mate is an innovative app designed to bridge communication gaps by translating sign language gestures into written alphabetic characters. The app uses advanced recognition technology to accurately interpret hand movements, finger placements, and gestures, converting them into text in real-time. This makes it easier for users to communicate with individuals who may have hearing impairments or those unfamiliar with sign language. ",
        techs: ["Firebase", "Python", "Flutter", "Sqlite"],
    },
    {
        name: "SPHA",
        link: "https://github.com/donywahyur/TUGAS-AKHIR",
        image: sphaProjectImage,
        description:
            "SPHA (Sistem Prediksi Harga Ayam) isan advanced system designed to predict the price of chicken using a GRU (Gated Recurrent Unit) algorithm. This system leverages historical data, market trends, and various influencing factors such as weather, supply, and demand to generate accurate price forecasts. By utilizing the GRU algorithm, SPHA efficiently analyzes time-series data to capture patterns and fluctuations in poultry pricing, providing reliable predictions. ",
        techs: ["MySQL", "Python", "Flask", "Tailwind CSS", "React"],
    },
    {
        name: "Larazillow",
        link: "https://github.com/donywahyur/larazillow11",
        image: larazillowProjectImage,
        description:
            "Larazillow is an innovative project designed to facilitate land bidding, where users can place bids on available properties in a transparent and efficient manner. The platform allows users to view detailed land listings, monitor bid progress, and interact with other participants in real-time.",
        techs: ["MySQL", "Laravel", "Vue", "Tailwind CSS"],
    },
    {
        name: "Startup Project",
        link: "https://github.com/donywahyur/go_startup_api",
        image: startupProjectImage,
        description:
            "The Startup Project is an initiative focused on collecting funds for a specific purpose, aimed at supporting a new business or community-driven initiative. This platform allows individuals or organizations to contribute money towards a common goal, whether it be for launching a product, funding a social cause, or supporting a project that requires financial backing.",
        techs: ["MySQL", "Go lang", "Nuxt 3", "Tailwind CSS", , "Docker"],
    },

    {
        name: "Restaurant API",
        link: "https://github.com/donywahyur/go-restaurant-app",
        image: apiProjectImage,
        description:
            "Restaurant API is a versatile interface that provides access to a range of features for managing restaurant-related data and operations. Through this API, developers can integrate restaurant services into mobile apps, websites, or third-party platforms, enabling seamless user experiences for both customers and restaurant staff. It can also provide real-time availability of tables, order status updates, and dynamic pricing.",
        techs: ["PostgreSQL", "Go lang", "Docker"],
    },

    {
        name: "Social App",
        link: "https://github.com/donywahyur/go_social_app",
        image: apiProjectImage,
        description:
            "A Social App built using Go is a platform designed for users to connect, share, and engage with each other in a digital environment. The app could include features like user profiles, friend requests, posts, comments, likes, and multimedia sharing, as well as personalized news feeds.",
        techs: ["PostgreSQL", "Go lang", "Docker"],
    },

    {
        name: "Feeder Bridge",
        link: "",
        image: feederProjectImage,
        description:
            "A Feeder Bridge is a middleware application designed to facilitate seamless data integration between a university's Academic Information System (commonly known as SIAKAD) and Neo Feeder, the centralized data system managed by Indonesia's Ministry of Education. Its primary function is to automate the process of synchronizing academic data—such as student information, course registrations, grades, and curriculum structures—ensuring compliance with national standards and regulations.",
        techs: ["MySQL", "Tailwind CSS", "Laravel", "Docker"],
    },

    {
        name: "SiPoint Desktop",
        link: "",
        image: sipointProjectImage,
        description:
            "This application was developed to support PPOB (Payment Point Online Bank) transactions at PT Teleanjar Mitra Global. It facilitates various bill payments by providing a reliable and efficient platform connected to multiple service providers.",
        techs: ["Java"],
    },
];

export default projects;
