import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Layout from "./components/organisms/Layout/Layout";
import Home from "./page/Home/Home";
import Contact from "./page/Contact/Contact";
import FAQ from "./page/FAQ/FAQ";

function App() {
    return (
        <>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/faq" element={<FAQ />} />
                    </Routes>
                </Layout>
            </Router>
        </>
    );
}

export default App;
