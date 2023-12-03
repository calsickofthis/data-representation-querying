import { useEffect, useState } from "react";
import axios from "axios";
import Books from "./books";


// This is the function to view book items
function Read() {

    const [data, setData] = useState([]);

    useEffect(
        () => {

            axios.get('http://localhost:4000/api/books')
                .then(
                    (response) => {
                        setData(response.data)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error);
                    }
                )

        }, []
    );

    const Reload = (e) => {
        axios.get('http://localhost:4000/api/books')
            .then(
                (response) => {
                    setData(response.data)
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )
    }

    return (
        <div>
            <h2>Hello from Read Component!</h2>
            <Books myBooks={data} ReloadData={Reload}></Books> //passing reload down as ReloadData pass them from read to books

        </div>
    );

}

export default Read;