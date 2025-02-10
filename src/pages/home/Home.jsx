import FlowerVase from "../../assets/FlowerVase.png";
import Banner from "../../components/Banner/Banner"
import Banner2 from "../../components/Banner2/Banner2"
import EditorsPick from "../../components/EditorsPick/EditorsPick"
import TagSection from "../../components/TagSection/TagSection"

const Home = () => {
  return (
    <div>
      <Banner />
      <EditorsPick />
      <Banner2 image={FlowerVase} />
      <TagSection />
    </div>
  )
}

export default Home