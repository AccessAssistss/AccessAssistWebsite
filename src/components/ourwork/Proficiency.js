import React, { useState } from 'react';
import finance from '../../assets/inclusive_finance.png';
import climate from '../../assets/climate_action.png';
import digital from '../../assets/digital_interventions.png';
import handimg from '../../assets/Rectangle 1698.png';

const Proficiency = () => {
    const [activeTab, setActiveTab] = useState('financial-inclusion'); 
    const proficiencyData = {
        'financial-inclusion': {
            title: 'Inclusive Finance',
            img: finance
        },
        'digital-interventions': {
            title: 'Digital Interventions',
            img: digital
        },
        'climate-action': {
            title: 'Climate Action',
            img: climate
        }
    };

    return (
        <div className='lg:p-10 p-5 '>
        <div className="bg-[#FFF5CE] px-8 py-12 rounded-3xl ">
            {/* Section Title */}
            <div className="text-center">
                <h2 className="text-red-600 md:text-3xl text-xl font-bold headingfont">OUR PROFICIENCY</h2>
                <p className="text-gray-700 mt-4 text-lg leading-relaxed">
                    With the nation’s economic growth as our ultimate goal, our transformative work links backwards to our interventions for achieving economic wellbeing of individuals. We work across farmers, women, youth, gig workers, and MSME with clear economic outcomes as the bullseye.
                </p>
            </div>

            {/* Main Image */}
            <div className="mt-8 text-center">
                <img src={handimg} alt="Proficiency" className="w-full h-auto rounded-lg" />
            </div>

            {/* "Our Proficiency Lies In" Section */}
            <div className="flex flex-col sm:flex-row mt-16 text-center sm:justify-between sm:items-center">
                {/* Section Title */}
                <h3 className="text-red-600 md:text-3xl text-xl font-bold  mb-4 headingfont">Our Proficiency Lies In</h3>

                {/* Slider Tabs */}
                <div className="mt-4 flex justify-center gap-6 w-full sm:w-auto ">
                    <button
                        className={`hover:scale-105 transform transition-all duration-300 text-sm font-semibold py-2 px-4 rounded-3xl  ${activeTab === 'financial-inclusion' ? 'bg-red-600 text-white' : 'bg-[#FFF5CE] border-2 border-black '}`}
                        onClick={() => setActiveTab('financial-inclusion')}
                    >
                        Financial Inclusion
                    </button>
                    <button
                        className={`hover:scale-105 transform transition-all duration-300 text-sm font-semibold py-2 px-4 rounded-3xl ${activeTab === 'digital-interventions' ? 'bg-red-600 text-white' : 'bg-[#FFF5CE] border-2 border-black'}`}
                        onClick={() => setActiveTab('digital-interventions')}
                    >
                        Digital Interventions
                    </button>
                    <button
                        className={`hover:scale-105 transform transition-all duration-300 text-sm font-semibold py-2 px-4 rounded-3xl ${activeTab === 'climate-action' ? 'bg-red-600 text-white' : 'bg-[#FFF5CE] border-2 border-black'}`}
                        onClick={() => setActiveTab('climate-action')}
                    >
                        Climate Action
                    </button>
                </div>
            </div>
           
                <div>
                    <img
                        
                        src={proficiencyData[activeTab].img}
                        alt={proficiencyData[activeTab].title}
                    />
                </div>
                </div>
           
        </div>
    );
};

export default Proficiency;
