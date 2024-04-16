import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Layout from "./components/organisms/Layout/Layout";
import Home from "./page/Home/Home";
import Contact from "./page/Contact/Contact";
import FAQ from "./page/FAQ/FAQ";
import LegalWarning from "./page/LegalWarning/LegalWarning";
import PrivacyPolicies from "./page/PrivacyPolicies/PrivacyPolicies";

function App() {
    return (
        <>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route
                            path="/legal-warning"
                            element={<LegalWarning />}
                        />
                        <Route
                            path="/privacy-policies"
                            element={<PrivacyPolicies />}
                        />
                    </Routes>
                </Layout>
            </Router>
        </>
    );
}

export default App;
