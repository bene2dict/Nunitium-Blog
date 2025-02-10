import "./SearchedArticles.css";
import Envelope from "../../assets/envelope.png"



const SearchedArticles = () => {
  return (
    <section className="editor-pick-wrapper">    
                <div className="posts-wrapper">
                  
                    <div className="post-wrapper">
                        <div className="image-wrapper">
                            <img src={Envelope} alt="envelope" />
                        </div>
                        <div className="post-desc">
                            <h3>Minimalism</h3>
                            <h1>World&apos;s Most Dangerous Technology Ever Made</h1>
                            <div className="name-date">
                                <p>Ralph Hawkins</p>
                                <p>
                                    May 7, 2019
                                    <span>(10mins read)</span>
                                </p>
                            </div>
                            <p>
                                Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna. 
                            </p>
                        </div>
                    </div>
    
                    <div className="post-wrapper">
                        <div className="image-wrapper">
                            <img src={Envelope} alt="envelope" />
                        </div>
                        <div className="post-desc">
                            <h3>Technology</h3>
                            <h1>Amet non Ex Officia nulla Cupidatat</h1>
                            <div className="name-date">
                                <p>Ralph Hawkins</p>
                                <p>
                                    May 7, 2019
                                    <span>(10mins read)</span>
                                </p>
                            </div>
                            <p>
                                Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.
                            </p>
                        </div>
                    </div>
    
                    <div className="post-wrapper">
                        <div className="image-wrapper">
                            <img src={Envelope} alt="envelope" />
                        </div>
                        <div className="post-desc">
                            <h3>Minimalism</h3>
                            <h1>World&apos;s Most Dangerous Technology Ever Made</h1>
                            <div className="name-date">
                                <p>Ralph Hawkins</p>
                                <p>
                                    May 7, 2019
                                    <span>(10mins read)</span>
                                </p>
                            </div>
                            <p>
                                Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.
                            </p>
                        </div>
                    </div>
                    
                </div>
    
            </section>
  )
}

export default SearchedArticles