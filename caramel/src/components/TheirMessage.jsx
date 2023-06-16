import React from 'react';

const TheirMessage = ({lastMessage,message}) => {

const IsFirstMessageByUser = !lastMessage || lastMessage.send.username !==message.send.username;


    return (
        <div className="message-row">
                {IsFirstMessageByUser && (
            <div
                className="message-avatar"
                style={{ backgroundImage:`url( ${message?.sender?.avatar})` }}


                        />
            )}

          {message?.attachments?.length > 0
         ?(
            <img 
            src={message.attachments[0].file}
            alt="message-attachment" 
            className="message-image"
            style={{marginLeft:IsFirstMessageByUser ? "4px" : "48px"}}
            />
                    ) :(
            <div className="message"  style={{float:"left",backgroundColor:"#CABCDC"}}>
                        {message.text}
            </div>

                    )
            }
 
        
        </div>
    );
}

export default TheirMessage;
