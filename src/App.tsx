import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Layout from "./components/organisms/Layout/Layout";
import Home from "./page/Home/Home";

function App() {
    return (
        <>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/contact"
                            element={<div>Contact...</div>}
                        />
                        <Route path="/about" element={<div>About...</div>} />
                    </Routes>
                </Layout>
            </Router>
        </>
    );
}

export default App;
