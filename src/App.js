import HomeSection from "./Component/HomeSection/HomeSection";
import { NavBar } from "./Component";
import { Layout } from "./Component/Layout/Layout";
import Footer from './Component/Footer/Footer';
// import Blog from './Component/Blog/Blog'
function App() {
  return (
    <Layout>
      <NavBar />
      <HomeSection />
      {/* <Blog /> */}
      <Footer />
    </Layout>
  );
}
export default App;
