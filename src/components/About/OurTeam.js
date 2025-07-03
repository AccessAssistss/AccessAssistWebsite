import React, {useState} from 'react';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    IconButton,
    Collapse,
    Avatar,
    CardMedia,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {styled} from '@mui/material/styles';
import img1 from '../../assets/Jaspreet Singh.png';
import img2 from '../../assets/Anil_unops_0.jpg';
import img3 from '../../assets/Mukesh Sadana.png';
import img4 from '../../assets/Rakhi Sahay.png';
import img5 from '../../assets/amit gurung.jpg';
import img6 from '../../assets/Sixit-Bhatta.jpg';
import Button from "@mui/material/Button";

// Expand button style
const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({expand}) => ({
    transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
    marginLeft: 'auto',
    transition: 'transform 0.3s',
}));

// Team data with placeholder images (replace with real)
const teamMembers = [
    {
        name: 'Jaspreet Singh',
        title: 'Anchor Partner – Inclusive Finance & Resilient Development',
        image: img1,
        shortBio: `Jaspreet is a seasoned banker and development finance expert with over two decades of experience advancing sustainable development goals, particularly in financial health and economic inclusion.`,
        fullBio: `He has led global work on digital finance, financial health, and consumer protection with UNCDF, collaborating with governments and private sector actors across Asia, Africa, and the Pacific.

He has contributed to the UN Secretary General’s Task Force on Digital Financing for the SDGs and served on the UNSGSA Working Group on Financial Health. His work has focused on leveraging tech-enabled finance and impact investments to improve the lives of low- and moderate-income populations.

Jaspreet previously held leadership roles at ICICI Bank and advised institutions such as the World Bank, IFC, and global consulting firms on inclusive finance.

Currently, he leads Access Assist and serves on the boards and advisory groups of impact funds and organizations like IFMR Lead Krea and the Gates Foundation–supported South-South Agriculture Alliance, with a focus on advancing financial well-being for women, informal workers, smallholder farmers, and the aging.`,
    },

    {
        name: 'Anil Chandrika',
        title: 'Operating Partner - Inclusive Growth in Fragile Contexts',
        image: img2,
        shortBio: `Anil Chandrika is a seasoned development leader with over 25 years of experience advancing inclusive governance, gender equity, social protection, and sustainable livelihoods in disaster-affected and post-conflict settings.`,
        fullBio: `As a Partner at Access Assist, he brings deep expertise in designing and delivering impactful development and financing solutions across fragile contexts in India and globally.

Anil has held senior leadership roles within the UN system, including as Country Manager for UNOPS in Iraq, where he led strategic planning, operations, and gender-focused programming. His work spans Syria, Nepal, Thailand, Somalia, and Afghanistan with UNDP, UNHCR, and UN Women—where he shaped national policies, built resilient institutions, and promoted women’s economic rights in post-conflict recovery.

Earlier in his career, Anil worked with IFAD, ICIMOD, and the Aga Khan Foundation on community-driven natural resource management and inclusive rural development across South Asia. His programs have strengthened local governance, supported grassroots women’s groups, and advanced cooperative models for food and livelihood security.

Anil holds a Master’s in Development Management from the Asian Institute of Management, an M.Phil in Education (Development Studies) from Kathmandu University, and a Master of Social Work from Tata Institute of Social Sciences. He also holds certifications in federalism, human rights, peacebuilding, and PRINCE2® project management.`,
    },
    {
        name: 'Mukesh Sadana',
        title: 'Senior Advisor - Climate and Green Finance',
        image: img3,
        shortBio: `Mukesh Sadana is a seasoned expert in digital finance and rural banking, with over 23 years of experience leading large-scale projects across Asia and Africa.`,
        fullBio: `He brings deep expertise in digital financial services, policy and regulatory engagement, risk management, and financial inclusion. As former head of USAID’s Digital Financial Inclusion work in India, Mukesh has worked extensively with financial institutions, telecom operators, regulators, and donor agencies in countries including India, Indonesia, Nepal, Vietnam, Kenya, and the U.S.

He has developed digital banking strategies, advised government and regulatory bodies, designed inclusive financial products, and led sector-wide studies for global development organizations. Mukesh holds a Post Graduate Diploma in Rural Management from IRMA and currently serves as an advisor to a leading private sector bank. At Access Assist, he leads the Climate and Green Finance vertical, focusing on embedding sustainability and resilience into inclusive financial systems.`,
    },
    {
        name: 'Rakhi Sahay',
        title: 'Operating Partner - Knowledge Management and Communications',
        image: img4,
        shortBio: `Rakhi Sahay is a seasoned development professional with over 20 years of experience across inclusive finance, impact investment, and knowledge management in Asia.`,
        fullBio: `She has led multi-country programs in digital finance, climate finance, gender inclusion, and financial health with organizations such as UNCDF, Impact Investment Exchange, Indian Institute for Human Settlements, MicroSave Consulting, and Intellecap.

Rakhi brings deep expertise in translating complex insights into scalable impact, particularly in areas of climate adaptation and inclusive growth. She has worked closely with governments, regulators, and private sector actors to support high-impact initiatives.

An alumna of the U.S. Department of State’s International Visitor Leadership Program, Rakhi holds a Master’s from Tata Institute of Social Sciences, a Bachelor's from Miranda House (Delhi University), and a certificate from the Frankfurt School of Finance & Management.`,
    },
    {
        name: 'Amit Gurung',
        title: 'Senior Advisor - Digital Financial Inclusion',
        image: img5,
        shortBio: `Amit Gurung is a digital finance and technology expert with over 20 years of experience advancing inclusive growth through digital solutions across Asia.`,
        fullBio: `He has provided strategic and technical support to governments, financial institutions, and tech providers, with a focus on expanding access to digital financial services.

Amit has worked closely with the Government of India, global corporates, and banks to enhance digital service delivery and remittance offerings. He has also supported microfinance institutions in adopting cloud-based MIS platforms and led large-scale ICT infrastructure initiatives, including the Government of Afghanistan’s satellite communications program.

Amit holds a Bachelor of Commerce from Panjab University and a Postgraduate Diploma in Business Management from the Symbiosis Institute of Management Studies.`,
    },
    {
        name: 'Sixit Bhatta',
        title: 'Senior Advisor - Digital Public Infrastructure',
        image: img6,
        shortBio: `Sixit Bhatta is a digital governance and innovation expert with over 20 years of experience across telecommunications, digital finance, mobility, and public infrastructure.`,
        fullBio: `As the founder and architect of Tootle—South Asia’s first motorcycle ride-hailing platform—he pioneered inclusive mobility solutions that empowered gig workers and advanced financial inclusion in Nepal.

Sixit now focuses on Digital Public Infrastructure (DPI) and AI-led innovations, working to build scalable, inclusive systems that accelerate digital transformation and economic opportunity.

His career spans leadership roles in telecom, banking, and entrepreneurship, alongside active engagement in academia, policy dialogues, and DPI ecosystems. Sixit brings deep cross-sectoral expertise and a strong commitment to designing resilient, people-centered digital systems for social and economic impact.`,
    },
];


// Individual card with vertical layout
const TeamCard = ({member, onSeeMore}) => {
    const [expanded, setExpanded] = useState(false);
    const toggleExpand = () => setExpanded(!expanded);

    return (
        <Card sx={{borderRadius: 3, boxShadow: 4, height: '100%', display: 'flex', flexDirection: 'column'}}>
            <CardMedia
                component="img"
                image={member.image}
                alt={member.name}
                sx={{height: '250px', width: '100%', objectFit: 'contain', backgroundColor: '#f2f2f2'}}
            />
            <CardContent sx={{flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <Box>
                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                        <Avatar sx={{mr: 1}}>{member.name.charAt(0)}</Avatar>
                        <Box>
                            <Typography variant="subtitle1" fontWeight="bold">{member.name}</Typography>
                            <Typography variant="body2" color="text.secondary">{member.title}</Typography>
                        </Box>
                    </Box>
                    <Typography variant="body2" color="text.secondary">{member.shortBio}</Typography>
                </Box>
                <Box mt={2} sx={{display: 'flex', justifyContent:'end',alignItems:'end', textTransform:'toLowercase'}}>
                    <Button  sx={{ textTransform: 'none' }}  variant="outlined" size="small" onClick={() => onSeeMore(member)}>
                        See More
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

// Team cards section
const TeamCards = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClose = () => setSelectedMember(null);
    return (
        <>
            <h2 className="text-2xl md:text-4xl font-bold text-[#ED1C24] text-center my-4 headingfont">
                Our Team
            </h2>
            <Grid container spacing={4} sx={{ p: 3, px: { md: 10 } }}
            >
                {teamMembers.map((member, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <TeamCard member={member} onSeeMore={setSelectedMember}/>
                    </Grid>
                ))}
            </Grid>

            {/* Enhanced Dialog */}
            <Dialog
                open={Boolean(selectedMember)}
                onClose={handleClose}
                fullScreen={fullScreen}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: 4,
                        p: 2,
                        backgroundColor: '#fafafa',
                    },
                }}
            >
                {selectedMember && (
                    <>
                        <DialogTitle
                            sx={{
                                textAlign: 'center',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                mb: 0,
                            }}
                        >
                            {selectedMember.name}
                            <Typography variant="subtitle2" color="text.secondary">
                                {selectedMember.title}
                            </Typography>
                        </DialogTitle>

                        <DialogContent
                            dividers
                            sx={{
                                maxHeight: '60vh',
                                overflowY: 'auto',
                                p: 3,
                            }}
                        >
                            <Box sx={{display: 'flex', justifyContent: 'center', mb: 3}}>
                                <Box
                                    component="img"
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    sx={{
                                        width: 180,
                                        height: 180,
                                        objectFit: 'cover',
                                        borderRadius: '50%',
                                        boxShadow: 3,
                                        backgroundColor: '#fff',
                                    }}
                                />
                            </Box>
                            <Typography variant="body1" sx={{whiteSpace: 'pre-line', lineHeight: 1.8}}>
                                {selectedMember.fullBio}
                            </Typography>
                        </DialogContent>

                        <DialogActions sx={{justifyContent: 'center'}}>
                            <Button variant="contained" color="error" onClick={handleClose}>
                                Close
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </>
    );
};

export default TeamCards;
