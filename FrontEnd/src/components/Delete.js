import { useState } from 'react';
import axios from 'axios';

const Delete = () => {
    const [info, setInfo] = useState();
    const [status, setStatus] = useState('');

    function handleChange(e) {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        });
    }

    async function send() {
        const res = await axios.delete(
            `http://127.0.0.1:3001/book/${info.id}`,
            info
        );
        setStatus(res.data);
    }

    return (
        <>
            <div className="delete">
                <input
                    type="number"
                    name="id"
                    onChange={handleChange}
                    placeholder="ID"
                ></input>

                <div className="divider"></div>

                <input type="submit" onClick={send}></input>
            </div>

            <p className="status">{status}</p>
        </>
    );
};

export default Delete;
