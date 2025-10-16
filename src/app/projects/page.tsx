'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import {Button} from "@/components/button";

const projects = [
    {
        title: 'Examify - Online Exam Portal',
        description: 'A showcase of my full-stack capabilities. I built a complete web application using a robust Spring Boot backend and a dynamic React.js frontend, proving my ability to handle everything from database management with MongoDB to secure user authentication with JWT.',
        tags: ['Spring Boot', 'React.js', 'Java', 'MongoDB', 'JWT', 'Redux'],
        image: '/projects/exam-portal.jpg',
        githubUrl: 'https://github.com/nikts27/Examify.git'
    },
    {
        title: 'Blockchain Crowdfunding App',
        description: 'This dApp highlights my ability to work with cutting-edge Web3 technologies. I wrote and deployed Solidity smart contracts on the Ethereum network and built a React.js interface, demonstrating skills in both blockchain logic and frontend integration.',
        tags: ['Solidity', 'Ethereum', 'React.js', 'Blockchain'],
        image: '/projects/blockchain.jpg',
        githubUrl: 'https://github.com/nikts27/blockchain-crowdfunding.git'
    },
    {
        title: 'NikosGPT - AI Chatbot',
        description: 'This projects demonstrates my foundational skills in Python and AI. I developed a command-line chatbot from scratch, focusing on basic Natural Language Processing to create a conversational user experience.',
        tags: ['Python', 'NLP', 'CLI'],
        image: '/projects/chatbot.webp',
        githubUrl: 'https://github.com/nikts27/nikosgpt-chatbot'
    },
    {
        title: 'Automated Rover Planner',
        description: 'My undergraduate thesis, which proves my deep analytical and research skills in AI. This projects involved a scientific comparison of different planning algorithms, showcasing my ability to tackle complex, abstract problems.',
        tags: ['AI Planning', 'PDDL', 'Python'],
        image: '/projects/planning.png',
        githubUrl: 'https://github.com/nikts27/thesis-rover-planner.git'
    },
    {
        title: 'My Personal Portfolio',
        description: 'This website is a testament to my modern frontend development skills. Built with Next.js and TypeScript, it demonstrates my proficiency in creating responsive, animated user interfaces with Tailwind CSS and Framer Motion.',
        tags: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
        image: '/projects/website.png',
        githubUrl: 'https://github.com/nikts27/portfolio_website'
    }
];

export default function ProjectsPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">My Work</h1>
                <p className="mt-4 text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto">
                    Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge and a learning opportunity.
                </p>
            </motion.section>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden flex flex-col group"
                    >
                        <div className="overflow-hidden">
                            <Image
                                src={project.image}
                                alt={`${project.title} screenshot`}
                                width={600}
                                height={350}
                                className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105" // <-- Bonus: Zoom στην εικόνα
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-2xl font-bold">{project.title}</h2>
                            <p className="mt-2 text-[var(--foreground)]/70 flex-grow">{project.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                                ))}
                            </div>
                            <div className="mt-6 flex items-center gap-4">
                                <Button
                                    href={project.githubUrl}
                                    variant="primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="py-2 px-4 text-sm"
                                >
                                    View Code
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}