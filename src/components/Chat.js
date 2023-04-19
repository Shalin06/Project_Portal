import React, { useState, useEffect, useRef } from "react";
import { auth, database } from "../firebase"; // import the database Database from firebase
import { ref, orderByChild, onValue, off, get, push, query, equalTo, limitToLast } from "firebase/database"
export const Chat = ({ room }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const messagesContainerRef = useRef(null);
    const messagesRef = ref(database, "messages/");
    var username
    useEffect(() => {
        async function getusername() {
            get(ref(database, `users/${auth.currentUser.uid}/UserName`)).then((snapshot) => {
                username = snapshot.val()
            })
        }
        getusername()
    }, [])
    useEffect(() => {
        const queryMessages = query(
            messagesRef,
            orderByChild("room"),
            equalTo(room),
            limitToLast(100)
        );

        const unsubscribe = onValue(queryMessages, (snapshot) => {
            const messages = [];
            snapshot.forEach((childSnapshot) => {
                messages.push({ ...childSnapshot.val(), id: childSnapshot.key });
            });
            console.log(messages);
            setMessages(messages);
        });

        return () => unsubscribe();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        var username = ""
        const userid = (auth.currentUser.uid).toString()
        console.log(userid)
        await get(ref(database, `users/${auth.currentUser.uid}/UserName`)).then((snapshot) => {
            username = snapshot.val();
        });
        if (newMessage === "") return;
        await push(messagesRef, {
            text: newMessage,
            createdAt: new Date().getTime(),
            user: username,
            userid: userid,
            room,
        });

        setNewMessage("");
    };
    useEffect(() => {
        // get the DOM element from the ref
        if (messagesContainerRef.current !== null && messagesContainerRef.scrollHeight !== null) {
            const messagesContainer = messagesContainerRef.current;

            // scroll to the bottom of the container
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
        // rest of the effect code
    }, [messages]);

    return (

        <div className="chat-app" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'sans-serif',
            width: '90%',
            margin: '0 auto',
            borderRadius: '5px',
            overflow: 'hidden',
            border: '2px solid #3b5998',

        }}>
            <div className="header" style={{
                backgroundColor: '#3b5998',
                color: 'white',
                width: '100%',
                textAlign: 'center'
            }}>
                <h1>Welcome to: {room.toUpperCase()}</h1>
            </div>
            <div className="messages" ref={messagesContainerRef} style={{
                display: 'flex',
                flexDirection: " column",
                alignItems: "flex-start",
                width: "100%",
                height: "350px",
                overflowY: " scroll",
                padding: "10px",
                marginBottom: "10px",
            }
            }>
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`message ${message.userid === auth.currentUser.uid ? 'sent' : ''}`}

                        style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: message.userid === auth.currentUser.uid ? 'flex-end' : 'flex-start',
                            marginBottom: '10px',
                            alignSelf: message.userid === auth.currentUser.uid ? 'flex-end' : 'flex-start',
                            backgroundColor: message.userid === auth.currentUser.uid ? '#3b5998' : 'white',
                            color: message.userid === auth.currentUser.uid ? 'white' : '#333',
                            borderRadius: message.userid === auth.currentUser.uid ? '15px 0 15px 15px' : '0 15px 15px 15px',
                            padding: '10px',
                        }}
                    >
                        <span className="user" style={{
                            fontWeight: 'bold',
                            marginRight: '10px',
                            color: message.userid === auth.currentUser.uid ? 'white' : '#333'
                        }}>
                            {message.user}:
                        </span>
                        {message.text}
                    </div>
                ))}

            </div>
            <form onSubmit={handleSubmit} className="new-message-form" style={{
                display: 'flex',
                width: '100%',
                padding: '10px'
            }}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(event) => setNewMessage(event.target.value)}
                    className="new-message-input"
                    placeholder="Type your message here..."
                    style={{
                        flex: '1',
                        border: 'none',
                        outline: 'none',
                        background: 'transparent',
                        fontSize: '16px',
                        color: '#333',
                        padding: '10px',
                        borderRadius: '5px 0 0 5px'
                    }}
                />
                <button type="submit" className="send-button" style={{
                    border: 'none',
                    outline: 'none',
                    background: '#3b5998',
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: 'bold'
                }}>
                    Send
                </button>
            </form>
        </div>
    );
};
export default Chat;