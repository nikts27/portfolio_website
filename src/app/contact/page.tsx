'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import clsx from "clsx";
import {Button} from "@/components/button";

export default function ContactPage() {
    const [status, setStatus] = useState('');
    const [emailError, setEmailError] = useState('');

    useEffect(() => {
        document.title = 'Contact | Nikolaos Tsaridis';
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEmailError('');

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Please enter a valid email address.');
            return;
        }

        setStatus('sending');
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                (event.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
            console.log(error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Let&apos;s Build Something Together</h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Have a project/opportunity in mind or just want to connect? Drop me a line below or find me on social media.
                    If you want, you can also call me on +30 698-664-2104.
                </p>

                <div className="mt-8 flex justify-center gap-6">
                    <a
                        href="https://www.linkedin.com/in/ntsaridis/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 group"
                    >
                        <Image
                            src="linkedin2.svg"
                            alt="LinkedIn Icon"
                            width={80}
                            height={80}
                            className="transition-transform duration-300 group-hover:scale-110"
                        />
                    </a>

                    <a
                        href="https://www.instagram.com/nikos_tsaridis/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-pink-600 group"
                    >
                        <Image
                            src="/icons/instagram.svg"
                            alt="Instagram Icon"
                            width={80}
                            height={80}
                            className="transition-transform duration-300 group-hover:scale-110"
                        />
                    </a>
                </div>
            </motion.section>

            <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="mt-12 max-w-xl mx-auto space-y-6"
            >
                <div className="relative">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="Full Name"
                        className="w-full bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-0 p-2 transition-colors"
                    />
                </div>
                <div className="relative">
                    <input
                        type="email" name="email" id="email" required placeholder="Email Address"
                        className={clsx(
                            "w-full bg-transparent border-0 border-b-2 p-2 transition-colors focus:ring-0",
                            emailError
                                ? "border-red-500 focus:border-red-500"
                                : "border-gray-300 dark:border-gray-600 focus:border-blue-500"
                        )}
                    />
                    {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                </div>
                <div className="relative">
          <textarea
              name="message"
              id="message"
              rows={4}
              required
              placeholder="Your Message"
              className="w-full bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-0 p-2 transition-colors resize-none"
          ></textarea>
                </div>
                <div>
                    <Button
                        type="submit"
                        variant="primary"
                        disabled={status === 'sending'}
                        className="w-full"
                    >
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </Button>
                </div>
                {status === 'success' && <p className="text-green-600 text-center">Message sent successfully!</p>}
                {status === 'error' && <p className="text-red-600 text-center">Something went wrong. Please try again.</p>}
            </motion.form>
        </div>
    );
}