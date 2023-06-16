import React, { useState } from 'react';
import { sendMessage,isTyping } from 'react-chat-engine';
import {SendOutlined,PictureOutlined} from '@ant-design/icons';


const MessageForm = (props) => {

    const [value , setValue] = useState('');
    const{chatId,creds}=props

    const handleSubmit=(e)=>{
        e.preventDefault();
         console.log(value);
        const text = value?.trim();
        
       
        if (text?.length > 0) sendMessage(creds,chatId,{text});
        setValue();

    }

    const handleChange=(e)=>{
        setValue(e.target.value);

        isTyping(props,chatId);
}
        const handleUpload =(e)=>{
        sendMessage(creds,chatId,{files:e.target.files,text:''});
        }
    
    return (
        <div>
           <form className="message-form" onSubmit={handleSubmit}>
                <input 
                className="message-input" 
                style = {{width:1000}}
                placeholder="send a message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
               
                  />
                 <label htmlFor="upload-button">
                    <span className="image-button">

                <PictureOutlined className="picture-icon" />
                    </span>

            </label>
           <input 
                    type="file"
                    multiple={false}
                    id="upload-button"
                    style={{display:'none'}}
                    onChange={handleUpload}
           />
           <button type="submit" className="send-button" >
                        <SendOutlined />
            </button>
           </form>
        </div>
    );
}

export default MessageForm;
