import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/landingpage/Home';
import Footer from './components/Footer';
import "./App.css"
import { createTheme, ThemeProvider } from '@mui/material';
import AboutHome from './components/About/AboutHome';
import KnowledgeCapitalHome from './components/knowledgecapital/KnowledgeCapitalHome';
import OurWorkHome from './components/ourwork/OurWorkHome';
import CareersHome from './components/careers/CareersHome';
import ContactHome from './components/contact/ContactHome';
import OurProjectsHome from './components/ourprojects/OurProjectsHome';
import AdvisoryForFarmers from './components/ourprojects/AdvisoryForFarmers';
import CapacityBuildingForFarmers from './components/ourprojects/CapacityBuildingForFarmers';
import CapacityBuildingOfGIZ from './components/ourprojects/CapacityBuildingOfGIZ';
import ConsumerData from './components/ourprojects/ConsumerData';
import DigitalAgriTrans from './components/ourprojects/DigitalAgriTrans';
import IncomeEnhance from './components/ourprojects/IncomeEnhance';
import MarketScan from './components/ourprojects/MarketScan';
import Olm from './components/ourprojects/Olm';
import PortfolioAssessment from './components/ourprojects/PortfolioAssessment';
import SuperwomenBuddhi from './components/ourprojects/SuperwomenBuddhi';
import SaishyaMam from './components/ourprojects/SaishyaMam';
import Blog from "./components/blog/Blog";
import BlogDetail from './components/blog/BlogDetail';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Quicksand',
      'sans-serif',
    ].join(','),
  },});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutHome/>} />
        <Route path="/ourwork" element={<OurWorkHome/>} />
        <Route path="/ourprojects" element={<OurProjectsHome/>} />
        <Route path="/knowledgecapital/UPMIP" element={<KnowledgeCapitalHome/>} />
        <Route path="/careers" element={<CareersHome/>} />
        <Route path="/contact" element={<ContactHome/>} />
        <Route path="/advisoryforfarmers" element={<AdvisoryForFarmers/>} />
        <Route path="/capacitybuildingforfarmers" element={<CapacityBuildingForFarmers/>} />
        <Route path="/capacitybuildingofgiz" element={<CapacityBuildingOfGIZ/>} />
        <Route path="/consumerdata" element={<ConsumerData/>} />
        <Route path="/digitalagritrans" element={<DigitalAgriTrans/>} />
        <Route path="/incomeenhance" element={<IncomeEnhance/>} />
        <Route path="/marketscan" element={<MarketScan/>} />
        <Route path="/olm" element={<Olm/>} />
        <Route path="/portfolioassessment" element={<PortfolioAssessment/>} />
        <Route path="/superwomenbuddhi" element={<SuperwomenBuddhi/>} />
        <Route path="/dashboard" element={<SaishyaMam/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </ThemeProvider>
  </>
  );
}

export default App;
