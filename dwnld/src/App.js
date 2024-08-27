import React from 'react'
import "./App.css";


const VIDEO = "http://ondemandwebcast.niyamasabha.org/videos/kla_11072024/110724-Qstn-1-1.mp4";

funsction App() {
    const downloadFile = {url} => {
        const fileName = url.split("/"").pop();
        const aTag = document.createElement('a');
        aTag.href=url;
        aTag.setAttribute('download',fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };
    return (
        <div className="App">
            <button onClick={() => {downloadFile(VIDEO);
}}>Download</button>
        </div>
    );
}

export default App;
