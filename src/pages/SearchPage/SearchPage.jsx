import { useContext } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import "./SearchPage.css";
import SearchedArticles from '../../components/SearchedArticles/SearchedArticles';
import AppContext from '../../context/AppContext';

const tags = [
    "#technology", "#lifeandlove", "#essentialism", "#webdevelopment", "#fashion",
    "#lifestyle", "#architecture", "#sports", "#entertainment", "#culinaryarts",
    "#travel", "#worldhistory", "#aeronautics", "#games", "#minimalism",
    "#finearts", "#graphicdesign", "#filmmaking", "#bitcoin", "#computers",
    "#machinelearning"
];

const SearchPage = () => {
    const {searched} = useContext(AppContext);
    
    console.log(searched);

  return (
    <section className='tags-page-wrapper'>
    <SearchBar />
    
    <div className="tags-list">
        {tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
    </div>

    {
      searched && (
        <SearchedArticles />
      )
    }
</section>
  )
}

export default SearchPage;