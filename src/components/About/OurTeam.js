import React, { useState, useEffect } from 'react';
import img1 from '../../assets/Jaspreet Singh.png';
import img2 from '../../assets/Anil_unops_0.jpg';
import img3 from '../../assets/Mukesh Sadana.png';
import img4 from '../../assets/Rakhi Sahay.png';
import img5 from '../../assets/Rajkumar.jpg';
import img6 from '../../assets/ujjwal.jpeg';
import img7 from '../../assets/nidhi.png';
import img8 from '../../assets/Hrash.jpeg';

const teamMembers = [
    {
        name: 'Jaspreet Singh',
        title: 'Managing Trustee & Principal',
        focus: 'Inclusive Finance & Resilient Development',
        image: img1,
        fullBio: `Jaspreet is a seasoned banker and development finance expert with over two decades of experience advancing sustainable development goals, particularly in financial health and economic inclusion.

He has led global work on digital finance, financial health, and consumer protection with UNCDF, collaborating with governments and private sector actors across Asia, Africa, and the Pacific.

He has contributed to the UN Secretary General's Task Force on Digital Financing for the SDGs and served on the UNSGSA Working Group on Financial Health. His work has focused on leveraging tech-enabled finance and impact investments to improve the lives of low- and moderate-income populations.

Jaspreet previously held leadership roles at ICICI Bank and advised institutions such as the World Bank, IFC, and global consulting firms on inclusive finance.

Currently, he leads Access Assist and serves on the boards and advisory groups of impact funds and organizations like IFMR Lead Krea and the Gates Foundation–supported South-South Agriculture Alliance, with a focus on advancing financial well-being for women, informal workers, smallholder farmers, and the aging.`,
    },
    {
        name: 'Nidhi Gupta',
        title: 'Trustee & Executive Director',
        focus: null,
        image: img7,
        fullBio: `Nidhi has over 17 years of practical experience in digital and data economy with a focus on financial services in both commercial and low-income/SME space. She has worked on various projects related to digital financial services, outcome/data measurement, and outcome-based financing models across Asia and Africa, addressing the challenges and opportunities around MSME finance, education and health finance, and venture capital supply chain.

She has been an investment banker working on both structured and unstructured financial products, especially around treasury markets, to drive financing gap across sectors and regions. She likes to shape new financial and digital innovations, driven by outcome-focused agenda of resilience and security for customers at the last mile.

Nidhi has a master's degree in economics and in Business Administration.`,
    },
    {
        name: 'Anil Chandrika',
        title: 'Trustee & Principal',
        focus: 'Inclusive Growth in Fragile Contexts',
        image: img2,
        fullBio: `Anil Chandrika is a seasoned development leader with over 25 years of experience advancing inclusive governance, gender equity, social protection, and sustainable livelihoods in disaster-affected and post-conflict settings.

As a Partner at Access Assist, he brings deep expertise in designing and delivering impactful development and financing solutions across fragile contexts in India and globally.

Anil has held senior leadership roles within the UN system, including as Country Manager for UNOPS in Iraq, where he led strategic planning, operations, and gender-focused programming. His work spans Syria, Nepal, Thailand, Somalia, and Afghanistan with UNDP, UNHCR, and UN Women—where he shaped national policies, built resilient institutions, and promoted women's economic rights in post-conflict recovery.

Earlier in his career, Anil worked with IFAD, ICIMOD, and the Aga Khan Foundation on community-driven natural resource management and inclusive rural development across South Asia. His programs have strengthened local governance, supported grassroots women's groups, and advanced cooperative models for food and livelihood security.

Anil holds a Master's in Development Management from the Asian Institute of Management, an M.Phil in Education (Development Studies) from Kathmandu University, and a Master of Social Work from Tata Institute of Social Sciences. He also holds certifications in federalism, human rights, peacebuilding, and PRINCE2® project management.`,
    },
    {
        name: 'Raj Kumar',
        title: 'Trustee & Principal',
        focus: 'Rural Development & Livelihoods',
        image: img5,
        fullBio: null,
    },
    {
        name: 'Mukesh Sadana',
        title: 'Principal',
        focus: 'Climate & Green Finance',
        image: img3,
        fullBio: `Mukesh Sadana is a seasoned expert in digital finance and rural banking, with over 23 years of experience leading large-scale projects across Asia and Africa.

He brings deep expertise in digital financial services, policy and regulatory engagement, risk management, and financial inclusion. As former head of USAID's Digital Financial Inclusion work in India, Mukesh has worked extensively with financial institutions, telecom operators, regulators, and donor agencies in countries including India, Indonesia, Nepal, Vietnam, Kenya, and the U.S.

He has developed digital banking strategies, advised government and regulatory bodies, designed inclusive financial products, and led sector-wide studies for global development organizations. Mukesh holds a Post Graduate Diploma in Rural Management from IRMA and currently serves as an advisor to a leading private sector bank. At Access Assist, he leads the Climate and Green Finance vertical, focusing on embedding sustainability and resilience into inclusive financial systems.`,
    },
    {
        name: 'Ujjwal Pokhrel',
        title: 'Principal',
        focus: 'Private Sector Development & Green Growth',
        image: img6,
        fullBio: `Ujjwal Pokhrel is Principal – Private Sector Development & Green Growth at Access Assist, bringing over 23 years of international experience in designing and leading programmes that promote inclusive private sector development, market systems transformation, and sustainable economic growth across South and Southeast Asia.

He has successfully led multi-million-dollar initiatives supported by leading development partners, including USAID, GIZ, UNCDF, the European Union, FCDO, WWF, SNV, Deloitte, and PwC, working closely with governments, financial institutions, development agencies, and private sector stakeholders.

Ujjwal's expertise spans private sector and MSME development, market systems development, value chain development, green finance, ESG integration, sustainable finance, climate-resilient investments, and business enabling environment reforms. He has played a pivotal role in strengthening business ecosystems through policy reforms, business development services, public-private partnerships, challenge funds, and innovative access-to-finance solutions.

A recognized leader in green growth and sustainable enterprise development, he has contributed to the development of Nepal's Green Finance Taxonomy and has supported enterprises in adopting energy-efficient technologies, cleaner production practices, renewable energy solutions, wastewater management, and circular economy approaches. His work also includes pioneering initiatives in bamboo value chains, carbon sequestration, carbon footprint assessment, bamboo-based construction, and nature-based climate solutions.

With deep expertise in value chain finance, blended finance, and financial inclusion, Ujjwal has enabled hundreds of enterprises to access formal finance, strengthen market linkages, and improve competitiveness. His cross-sector experience spans agriculture, forestry, manufacturing, tourism, renewable energy, and green industries, helping institutions and businesses build resilient, low-carbon, and inclusive growth pathways.`,
    },
    {
        name: 'Rakhi Sahay',
        title: 'Senior Specialist',
        focus: 'Knowledge Management & Communications',
        image: img4,
        fullBio: `Rakhi Sahay is a seasoned development professional with over 20 years of experience across inclusive finance, impact investment, and knowledge management in Asia.

She has led multi-country programs in digital finance, climate finance, gender inclusion, and financial health with organizations such as UNCDF, Impact Investment Exchange, Indian Institute for Human Settlements, MicroSave Consulting, and Intellecap.

Rakhi brings deep expertise in translating complex insights into scalable impact, particularly in areas of climate adaptation and inclusive growth. She has worked closely with governments, regulators, and private sector actors to support high-impact initiatives.

An alumna of the U.S. Department of State's International Visitor Leadership Program, Rakhi holds a Master's from Tata Institute of Social Sciences, a Bachelor's from Miranda House (Delhi University), and a certificate from the Frankfurt School of Finance & Management.`,
    },
    {
        name: 'Harsh Pandey',
        title: 'Senior Specialist',
        focus: 'Livelihoods & Enterprise Development',
        image: img8,
        fullBio: `Harsh Pandey is Senior Specialist – Livelihoods & Enterprise Development at Access Assist, with over 22 years of experience in development finance, financial inclusion, and enterprise development across South Asia, Southeast Asia, and Africa. He has worked with banks, microfinance institutions, fintechs, NBFCs, governments, development finance institutions, and international development partners to design and strengthen inclusive financial ecosystems that create sustainable livelihood opportunities.

His expertise spans financial inclusion, digital financial services, MSME and agri-value chain finance, institutional transformation, investment due diligence, market research, product development, strategic planning, and risk management. He has successfully led business transformation and capacity-building initiatives that have strengthened governance, improved operational efficiency, expanded access to finance, and enhanced institutional performance.

Harsh has extensive experience in designing innovative financing solutions for agriculture, rural enterprises, and MSMEs, supporting financial institutions in developing market-responsive and climate-resilient financial products. He has also advised development finance institutions and impact investors on investment due diligence, institutional assessments, and portfolio development, enabling responsible capital deployment and sustainable growth.

He has led and supported multi-country programmes funded by organizations including the World Bank and Asian Development Bank, working closely with public and private sector stakeholders to mobilize finance, strengthen institutions, promote enterprise development, and deliver measurable social and economic impact for underserved communities.`,
    },
];

const AVATAR_ACCENTS = [
    'from-[#ED1C24] to-[#8a0f14]',
    'from-[#1B2A4A] to-[#0c1424]',
    'from-[#B3151B] to-[#3d1013]',
    'from-[#2C3E60] to-[#111a2c]',
];

const getAccent = (name) => {
    const sum = name.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    return AVATAR_ACCENTS[sum % AVATAR_ACCENTS.length];
};

const getInitials = (name) =>
    name
        .split(' ')
        .map((part) => part.charAt(0))
        .join('')
        .slice(0, 2)
        .toUpperCase();

const MemberPhoto = ({ member, className }) => {
    if (member.image) {
        return <img src={member.image} alt={member.name} className={className} />;
    }
    return (
        <div
            className={`flex items-center justify-center bg-gradient-to-br ${getAccent(
                member.name
            )} ${className}`}
        >
            <span className="font-semibold tracking-wide text-white/90">
                {getInitials(member.name)}
            </span>
        </div>
    );
};

const TeamCard = ({ member, onSeeMore }) => {
    return (
        <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
            {/* Photo block */}
            <div className="relative h-64 w-full shrink-0 overflow-hidden bg-slate-100">
                <MemberPhoto
                    member={member}
                    className="h-full w-full object-cover object-top text-5xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent" />
            </div>

            <div className="h-[3px] w-full shrink-0 bg-gradient-to-r from-[#ED1C24] via-[#ED1C24]/70 to-transparent" />

            <div className="flex flex-1 flex-col px-5 py-5">
                <div className="flex-1">
                    <h3 className="text-lg font-bold leading-snug text-[#0F1B2D]">
                        {member.name}
                    </h3>
                    <p className="mt-0.5 text-sm font-semibold uppercase tracking-wide text-[#ED1C24]">
                        {member.title}
                    </p>
                    {member.focus && (
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                            {member.focus}
                        </p>
                    )}
                </div>


                <div className="mt-4 border-t border-slate-100 pt-4">
                    {member.fullBio ? (
                        <button
                            type="button"
                            onClick={() => onSeeMore(member)}
                            className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#0F1B2D] px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-[#ED1C24]"
                        >
                            View Profile
                            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                                →
                            </span>
                        </button>
                    ) : (
                        <div className="flex w-full items-center justify-center rounded-lg border border-dashed border-slate-200 px-4 py-2.5 text-xs font-medium uppercase tracking-wide text-slate-300">
                            Profile coming soon
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const TeamModal = ({ member, onClose }) => {
    useEffect(() => {
        if (!member) return undefined;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [member]);

    if (!member) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-[#fafafa] shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow transition-colors hover:bg-[#ED1C24] hover:text-white"
                >
                    ✕
                </button>

                {/* Header */}
                <div className="px-6 pb-2 pt-8 text-center">
                    <div className="mb-4 flex justify-center">
                        <MemberPhoto
                            member={member}
                            className="h-40 w-40 rounded-full border-4 border-white object-cover text-3xl shadow-lg"
                        />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F1B2D]">{member.name}</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-[#ED1C24]">
                        {member.title}
                    </p>
                    {member.focus && <p className="text-sm text-slate-500">{member.focus}</p>}
                </div>

                {/* Body */}
                <div className="overflow-y-auto border-t border-black/5 px-6 py-6">
                    <p className="whitespace-pre-line text-[15px] leading-8 text-slate-700">
                        {member.fullBio}
                    </p>
                </div>

                {/* Footer */}
                <div className="flex justify-center border-t border-black/5 bg-white px-6 py-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-full bg-[#ED1C24] px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#c2151b]"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

const TeamCards = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const handleClose = () => setSelectedMember(null);

    return (
        <section className="bg-[#fafafa] py-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-[#ED1C24] md:text-4xl">
                        BOARD OF ADVISORY
                    </h2>
                    <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#ED1C24]/70" />
                </div>

                <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member) => (
                        <TeamCard member={member} onSeeMore={setSelectedMember} key={member.name} />
                    ))}
                </div>
            </div>

            <TeamModal member={selectedMember} onClose={handleClose} />
        </section>
    );
};

export default TeamCards;