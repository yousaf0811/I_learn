import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Post = () => {
    const [name, setName] = useState(null);
    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);
    const navigate = useNavigate();
    const handleSubmit = () => {
        const npost = {
            name: name,
            title,
            details: body,
        }
        localStorage.setItem("name", JSON.stringify(name));
        fetch("http://localhost:3010/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(npost),
        })
            .then((resp) => resp.json())
            .then((info) => navigate("/teacheraccount"));
        navigate("/teacheraccount")
    };
    return (
        <div>
            < nav class="navbar navbar-expand-lg navbar-light bg-light"><h3>Create-Post</h3></nav>
            <div class="container-2">

                <form name="blog_post" className="form-horizontal">
                    <div className="username">
                        <label className="form__label">Name</label>
                        <input
                            className="form-control"
                            type="text"
                            id="name"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                        />
                    </div>

                    <div className="Title">
                        <label className="form__label">Title</label>
                        <input
                            className="form-control"
                            type="text"
                            id="text"
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title"
                        />
                    </div>
                    <div className="username">
                        <label className="form__label">Body</label>
                        <input
                            className="form-control"
                            type="text"
                            id="name"
                            onChange={(e) => setBody(e.target.value)}
                            placeholder="Body"
                        />
                    </div>
                    <div className="form-group">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-12">
                            <button type="button" class="btn btn-success btn-lg"
                                data-mdb-ripple-color="dark" onClick={() => handleSubmit()} >Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};
export default Post;
