import React from 'react';
import MessageList from "../Test/MessageList";
import firebase from "firebase";
import MessageBox from "../Test/MessageBox";
import Header from "../Test/Header";

const News = (props) => {
    return(
        <div>
            <Header />
        <div className="columns">
            <div className="column is-3"></div>
            <div className="column is-6">
                <MessageList db={firebase} />
            </div>
        </div>
        <div className="columns">
        <div className="column is-3"></div>
    <div className="column is-6">
        <MessageBox db={firebase} />
    </div>
        </div>
    </div>
    )
}

export default News;