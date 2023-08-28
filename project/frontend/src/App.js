import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import LandingPage from "./components/landingPage/LandingPage";
import DdrPage from "./components/ddr/DdrPage";
import VdrPage from "./components/vdr/VdrPage";
import CorpPage from "./components/corp/CorpPage";
import VypPage from "./components/vyp/VypPage";
import ThanksWindow from "./components/ThanksWindow";
import LinkToBackEnd from "./components/LinkToBackEnd";

function App() {
    const [content, setContent] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [modalActive, setModalActive] = useState(false)
    const [bodyModalActive, setBodyModalActive] = useState(false);
    const [urls, setUrls] = useState('')


    useEffect(() => {
        axios
            .get(`${LinkToBackEnd()}/contacts/`)
            .then((response) => {
                setContacts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        axios
            .get(`${LinkToBackEnd()}/yandex-api/`)
            .then((response) => {
                setUrls(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        axios
            .get(`${LinkToBackEnd()}/content/landing/`)
            .then((response) => {
                setContent(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return <BrowserRouter>
        <div>
            <Routes>
                <Route path="/" element={
                    contacts.length > 0 &
                    content.length > 0 &
                    urls.length > 0 &&
                    <LandingPage
                        contacts={contacts}
                        content={content}
                        setModalActive={setModalActive}
                        modalActive={modalActive}
                        bodyModalActive={bodyModalActive}
                        setBodyModalActive={setBodyModalActive}

                        urls={urls}
                    />
                }/>
                <Route path="/ddr" element={
                    contacts.length > 0 &
                    content.length > 0 &
                    urls.length > 0 &&
                    <DdrPage
                        contacts={contacts}
                        setModalActive={setModalActive}
                        modalActive={modalActive}
                        bodyModalActive={bodyModalActive}
                        setBodyModalActive={setBodyModalActive}
                        urls={urls}
                    />
                }/>
                <Route path="/vdr" element={
                    contacts.length > 0 &
                    content.length > 0 &
                    urls.length > 0 &&
                    <VdrPage
                        contacts={contacts}
                        setModalActive={setModalActive}
                        modalActive={modalActive}
                        bodyModalActive={bodyModalActive}
                        setBodyModalActive={setBodyModalActive}
                        urls={urls}
                    />
                }/>
                <Route path="/corp" element={
                    contacts.length > 0 &
                    content.length > 0 &
                    urls.length > 0 &&
                    <CorpPage
                        contacts={contacts}
                        setModalActive={setModalActive}
                        modalActive={modalActive}
                        bodyModalActive={bodyModalActive}
                        setBodyModalActive={setBodyModalActive}
                        urls={urls}
                    />
                }/>
                <Route path="/vyp" element={
                    contacts.length > 0 &
                    content.length > 0 &
                    urls.length > 0 &&
                    <VypPage
                        contacts={contacts}
                        setModalActive={setModalActive}
                        modalActive={modalActive}
                        bodyModalActive={bodyModalActive}
                        setBodyModalActive={setBodyModalActive}
                        urls={urls}
                    />
                }/>
                <Route path="/thanks" element={<ThanksWindow/>}></Route>
            </Routes>
        </div>
    </BrowserRouter>
}

export default App;
