import './EditorsPick.css';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import moment from 'moment';
import { Link } from 'react-router-dom';


const EditorsPick = () => {
    const { blogs } = useContext(AppContext);

    const editorsPickBlogs = blogs.filter(blog => blog.editorsPick);

    return (
        <section className="editor-pick-wrapper">
            <div className="title-wrapper">
                <h1>Editor&apos;s Pick</h1>
                <hr className="title-underline" />
            </div>

            <div className="posts-wrapper">

                {editorsPickBlogs.map((blog) => (
                    <Link to={"/articles/" + blog._id}  key={blog._id} style={{ color: "inherit", textDecoration: "none" }}>

                    <div className="post-wrapper">
                        <div className="image-wrapper">
                            <img src={blog.postImg} alt="envelope" />
                        </div>
                        <div className="post-desc">

                            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }} >
                                {blog.categories.map((cat, index) => (<h3 key={index}>{cat}</h3>
                                ))}
                            </div>

                            <h1>{blog.title}</h1>
                            <div className="name-date">
                                <p>{blog.author_Id.name}</p>
                                <p>
                                    {moment(blog.createdAt).format("MMMM Do YYYY")}
                                    <span>(10mins read)</span>
                                </p>
                            </div>
                            <p>
                                {blog.description.length > 300 ? blog.description.slice(0, 300) : blog.description}
                            </p>
                        </div>
                    </div>
                    </Link>
                ))}

                {/* <div className="post-wrapper">
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
                </div> */}

            </div>

        </section>
    )
}

export default EditorsPick