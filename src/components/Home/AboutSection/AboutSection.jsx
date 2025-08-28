import React from 'react';
import AboutImage from '../../../assets/4934413.jpg'
const AboutSection = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">


                {/* Image/Illustration */}
                <div className="md:w-1/2">
                    <img
                        src={AboutImage}
                        alt="Mission Illustration"
                        className="rounded-lg shadow-lg"
                    />
                </div>


                {/* Text Content */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
                    <p className="mb-4 text-gray-700">
                        We are dedicated to collecting and distributing clothes to underprivileged people in Bangladesh.
                    </p>


                    <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
                    <p className="mb-4 text-gray-700">
                        Our goal is to ensure that every homeless person stays warm during winter and every child has access to basic clothing.
                    </p>


                    <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Transparency in all donations</li>
                        <li>Compassion and care for every beneficiary</li>
                        <li>Community support and local engagement</li>
                    </ul>


                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                        Donate Now
                    </button>
                </div>


            </div>
        </section>
    );
};

export default AboutSection;