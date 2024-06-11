import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Navbar from "../common/Navbar/navbar";
import "./homepage.css";

const HomePage = (props) => {
    const typedElement = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                "Image Creator from Designer helps you generate images based on your words with AI. Learn more." 
            ],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1500,
            loop: false,
            showCursor: true,
            cursorChar: '|',
        };

        const typed = new Typed(typedElement.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <Navbar page="home" />
            <div className="homepage-main-container">
                <div className="explore-content">
                    <h1>Create images from words with AI</h1>
                    <p>signer makes creating your own images easy. Just write a description of the image you'd like and watch the text to image transformation happen in seconds. You'll get vivid, high-resolution images with stunning detail.</p>
                    
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p ref={typedElement}></p>
                </div>
                <div className="img-col">
                    <img src="https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D" />
                    <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <img src="https://plus.unsplash.com/premium_photo-1670430623154-24626c42fb33?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <img src="https://images.unsplash.com/photo-1613244317058-dec340356062?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
