import { useEffect, useState } from "react";
import { useNavigate, Link, createSearchParams } from "react-router-dom";


const Viewpost = () => {
    const [usersList, setUsersList] = useState([]);
    const [username, setUsername] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("name"));
        setUsername(items);

        fetch("http://localhost:3010/post")
            .then((resp) => resp.json())
            .then((info) => {
                let tempList = [];
                let localData = localStorage.getItem("id");
                let teacherID = JSON.parse(localData);
                console.log(teacherID, ":: ")
                info.map((item) => {
                    if (item.teacherid === teacherID) {
                        tempList.push(item)
                        setUsersList(tempList)
                    }
                })

            });
    }, []);

    return (
        <div>
            <h3>View-Post</h3>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarButtonsExample"
                        aria-controls="navbarButtonsExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarButtonsExample">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item bg-light">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item bg-light">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item bg-light">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>

                        <div class="d-flex align-items-center">
                            <button type="button" class="btn btn-danger px-3 me-2" onClick={() => { navigate('/') }} >
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="parent">
                <div className="child-1">
                    <div style={{ paddingTop: 50 }}><button type="button" class="btn btn-dark btn-lg px-2" onClick={() => { navigate('/teacheredit') }}>Edit Account</button></div>
                    <div style={{ paddingTop: 50 }}><button type="button" class="btn btn-dark btn-lg px-2 " onClick={() => { navigate('/Createpost') }}>Create Post</button></div>
                    <div style={{ paddingTop: 50 }}><button type="button" class="btn btn-dark btn-lg px-3 " onClick={() => { navigate('/viewpost') }}>View Post</button></div>
                </div>
                <div classname="child-2" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {usersList.map((items) => (
                        <div class="card" style={{ width: 300, padding: 10, margin: 20, }}>
                            <div class="card-body">
                                <ul>
                                    <li>{items.id}</li>
                                    <li>{items.name}</li>
                                    <li>{items.title}</li>
                                    <li>{items.body}</li>
                                </ul>
                                <div style={{ justifyContent: 'space-between', width: '100%', }}>
                                    <button type="button" class="btn btn-success me-2" onClick={() => {
                                        navigate({
                                            pathname: '/Editpost',
                                            search: createSearchParams({
                                                postId: items.id
                                            }).toString()
                                        })
                                    }} >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-success  me-2"
                                        onClick={() => {
                                            alert("Are you sure you want to delete this post");
                                        }}
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Viewpost;
