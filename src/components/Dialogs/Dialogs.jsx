import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Солбон" id="1"/>
                <DialogItem name="Сэсэг" id="2"/>
                <DialogItem name="Бальжинима" id="3"/>
                <DialogItem name="Чимит" id="4"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="Here"/>
                <Message message="Ideals"/>


            </div>
        </div>
    )
}

export default Dialogs;