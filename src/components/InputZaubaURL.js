import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function InputZaubaURL() {
    var printdata = "";
    const [zaubaurl, setZaubaurl] = useState("");
    const [zaubaCompaniesList, setZaubaCompaniesList] = useState("");
    const handleZaubaUrlInput = (e) => {
        setZaubaurl(e.target.value);
    }
    const scrapeOnePageFromZauba = () => {
        fetch('http://127.0.0.1:8000/scrapezaubaaiohttp/',
            {
                method: 'POST',
                headers: {
                    'accept': '*/*',
                    'Content-Type': 'application/json',
                    mode: 'cors', // no-cors, *cors, same-origin
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: 'same-origin',
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36 Edg/101.0.1210.53',
                    'Accept-Language': 'en-US,en;q=0.9,it;q=0.8,es;q=0.7',
                    'referer': 'https://www.google.com/',
                },
                body: JSON.stringify({
                    "url": zaubaurl
                })
            })
            .then((response) => response.json())
            .then((data) => setZaubaCompaniesList(data.pagesJson))
            .then((data) => console.log(zaubaCompaniesList));
        printdata = JSON.stringify(JSON.parse(JSON.stringify(zaubaCompaniesList)));
        console.log(printdata);
    }
    return (
        //<!-- Image and text -->
        <>
            <form>
                <div className="form-group">
                    <br />
                    <label htmlFor="ZaubaURL">URL from Zaubacorp.com</label>
                    <input value={zaubaurl} onChange={handleZaubaUrlInput} type="url" className="form-control" id="ZaubaURL" aria-describedby="ZaubaURL" placeholder="write the url here" />
                </div>
                <br />
                <button type="submit" className="btn btn-primary" onClick={scrapeOnePageFromZauba}>Find companies</button>
            </form>
            {/* {zaubaCompaniesList} */}
            <table>
                {/* <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Link</th>
                    <th>Location</th>
                </tr> */}
                {Object.values(zaubaCompaniesList).map((item, i) => {
                    return <tr><td>{item.id}</td><td>{item.name}</td><td>{item.link}</td><td>{item.location}</td></tr>
                })}
            </table>
            {/* {{printdata}} */}

        </>
    );
}

{/* <img src={logo} height="50" alt="" className="m-1 mx-4"/> collect
<div className="m-1 mx-4 text-white pull-right">
collector
</div> */}

export default InputZaubaURL;