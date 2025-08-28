import React from 'react';

const Impact = () => {
    const stats = [
        { id: 1, label: 'Clothes Donated', value: '5000+' },
        { id: 2, label: 'Volunteers', value: '100+' },
        { id: 3, label: 'Divisions Covered', value: '7' },
        { id: 4, label: 'Active Campaigns', value: '8' }
    ];
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-3xl font-bold mb-10">Our Impact</h2>


                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map(stat => (
                        <div key={stat.id} className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition">
                            <h3 className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</h3>
                            <p className="text-gray-700 font-semibold">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Impact;