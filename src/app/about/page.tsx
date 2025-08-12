'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {Button} from "@/components/button";

const skillCategories = [
    {
        title: 'Languages',
        skills: [
            { name: 'Java', logo: '/icons/java.svg', href: 'https://dev.java/' },
            { name: 'Python', logo: '/icons/python.svg', href: 'https://www.python.org/doc/' },
            { name: 'C', logo: '/icons/c.svg', href: 'https://devdocs.io/c/' },
            { name: 'JavaScript', logo: '/icons/js.svg', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
            { name: 'Solidity', logo: '/icons/solidity.svg', href: 'https://soliditylang.org/' },
        ]
    },
    {
        title: 'Frameworks & Libraries',
        skills: [
            { name: 'React.js', logo: '/icons/react.svg', href: 'https://react.dev/' },
            { name: 'Next.js', logo: '/icons/next.svg', href: 'https://nextjs.org/docs' },
            { name: 'Spring Boot', logo: '/icons/spring.svg', href: 'https://spring.io/projects/spring-boot' },
        ]
    },
    {
        title: 'Databases & Web',
        skills: [
            { name: 'MongoDB', logo: '/icons/mongo.svg', href: 'https://www.mongodb.com/docs/' },
            { name: 'SQL', logo: '/icons/sql.svg', href: 'https://developer.mozilla.org/en-US/docs/Web/SQL' },
            { name: 'HTML', logo: '/icons/html.svg', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
            { name: 'Tailwind CSS', logo: '/icons/tailwind.svg', href: 'https://tailwindcss.com/docs' },
        ]
    },
    {
        title: 'Tools & Platforms',
        skills: [
            { name: 'Docker', logo: '/icons/docker.svg', href: 'https://docs.docker.com/' },
            { name: 'Git', logo: '/icons/git.svg', href: 'https://git-scm.com/doc' },
            { name: 'Postman', logo: '/icons/postman.svg', href: 'https://learning.postman.com/docs/getting-started/introduction/' },
            { name: 'VS Code', logo: '/icons/vsc.svg', href: 'https://code.visualstudio.com/docs' }, // <-- ΠΡΟΣΘΗΚΗ
            { name: 'IntelliJ IDEA', logo: '/icons/intellij.svg', href: 'https://www.jetbrains.com/idea/documentation/' }, // <-- ΠΡΟΣΘΗΚΗ
            { name: 'WebStorm', logo: '/icons/webstorm.svg', href: 'https://www.jetbrains.com/webstorm/documentation/' }, // <-- ΠΡΟΣΘΗΚΗ
        ]
    }
];

export default function AboutPage() {
    useEffect(() => {
        document.title = 'About | Nikolaos Tsaridis';
    }, []);

    return (
        <div className="max-w-5xl mx-auto px-4 py-16">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                <motion.div
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    className="md:col-span-1 flex justify-center"
                >
                    <Image
                        src="/personalpic.jpg"
                        alt="Nikolaos Tsaridis"
                        width={250}
                        height={250}
                        className="rounded-lg object-cover shadow-lg"
                    />
                </motion.div>
                <motion.div
                    initial={{opacity: 0, x: 20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="md:col-span-2 flex flex-col justify-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                        A Bit About Me
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        I am a final-year Applied Informatics student at the University of Macedonia, passionate about
                        building complete software solutions. With strong problem-solving skills and a commitment to
                        continuous learning, I enjoy tackling challenges and collaborating in team environments.
                    </p>
                </motion.div>
            </section>

            <section className="mt-24">
                <h2 className="text-3xl font-bold text-center tracking-tighter">My Tech Stack</h2>
                <div className="mt-10 space-y-12">
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                        >
                            <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-6">{category.title}</h3>
                            <div className="flex flex-wrap justify-center items-center gap-8">
                                {category.skills.map((skill) => (
                                    <a
                                        key={skill.name}
                                        href={skill.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center gap-2 group"
                                    >
                                        <Image
                                            src={skill.logo}
                                            alt={`${skill.name} logo`}
                                            width={48}
                                            height={48}
                                            className="transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <span
                                            className="text-sm text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {skill.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="mt-24 text-center">
                <h2 className="text-3xl font-bold tracking-tighter">Beyond the Code</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    When I'm not typing away, you'll probably find me planning my next move in a game of chess,
                    a challenge I love for its strategic nature. I am also a fan of team sports and video games,
                    where cooperation and problem solving are key.
                    The gym and running are my way of clearing my mind and getting ready for the next challenge in code.
                </p>
            </section>

            <section className="mt-24 text-center">
                <h2 className="text-3xl font-bold tracking-tighter">Let's Connect</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    I'm always excited to discuss new projects or opportunities. Feel free to explore my work or get in
                    touch.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Button href="/projects" variant="primary">
                        See my projects
                    </Button>
                    <Button href="/contact" variant="secondary">
                        Contact me
                    </Button>
                </div>
            </section>
        </div>
    );
}
