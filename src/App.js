import HomeSection from "./Component/HomeSection/HomeSection";
import { Layout } from "./Component/Layout/Layout";
import Blog from './Component/Blog/Blog'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlateformSolution from "./Component/PlateformSolution/PlateformSolution"
function App() {
  return (
    <Layout>
       <Router>
      <Routes>
        <Route exact path="/" element={<HomeSection />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/plateform" element={<PlateformSolution /> } />
        <Route path="*" element={<HomeSection />} />
      </Routes>
    </Router>
    </Layout>
  );
}
export default App;
