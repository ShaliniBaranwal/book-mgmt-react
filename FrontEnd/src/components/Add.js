import axios from "axios";
import { useState } from "react";

const Add = () => {
    const [info, setInfo] = useState();
    const [status, setStatus] = useState('');

    function handleChange(e) {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        });
    }

    async function send() {
        const res = await axios.post(`http://127.0.0.1:3001/book`, info);
        setStatus(res.data);
    }

    return (
        <>
            <div className="add">
                <input type="text" name="bookname" onChange={handleChange} placeholder="book name"></input>
                <input type="text" name="author" onChange={handleChange} placeholder="book author"></input>
                <input type="number" name="quantity" onChange={handleChange} placeholder="book quantity"></input>

                <div className="divider"></div>

                <input type="submit" onClick={send}></input>
            </div>

            <p className="status">{status}</p>
        </>
    );
};

export default Add;