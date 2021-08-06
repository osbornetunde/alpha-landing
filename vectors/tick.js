import React from 'react';

const Tick = () => {
    return (
        <svg width="111" height="111" viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
                <rect x="27" y="13" width="71" height="71" rx="35.5" fill="#ffffff"/>
            </g>
            <g filter="url(#filter1_di)">
                <g clipPath="url(#clip0)">
                    <path d="M58.9951 59.6826C58.7094 59.97 58.3195 60.1303 57.9146 60.1303C57.5096 60.1303 57.1198 59.97 56.834 59.6826L48.2044 51.0515C47.3088 50.156 47.3088 48.7037 48.2044 47.8098L49.2849 46.729C50.1808 45.8334 51.6313 45.8334 52.5269 46.729L57.9146 52.117L72.4729 37.5584C73.3687 36.6628 74.8207 36.6628 75.7148 37.5584L76.7954 38.6392C77.691 39.5348 77.691 40.9867 76.7954 41.8809L58.9951 59.6826Z" fill="#12DF64"/>
                </g>
            </g>
            <defs>
                <filter id="filter0_d" x="0" y="0" width="111" height="111" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dx="-7" dy="7"/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0291667 0 0 0 0 0.0291667 0 0 0 0 0.0291667 0 0 0 0.11 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <filter id="filter1_di" x="36.5327" y="31.5327" width="43.9344" height="45.9344" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dx="-4" dy="7"/>
                    <feGaussianBlur stdDeviation="3.5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="3" dy="-2"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.183767 0 0 0 0 0.604167 0 0 0 0 0.326703 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                </filter>
                <linearGradient id="paint0_linear" x1="62.5" y1="13" x2="62.5" y2="84" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FEFEFE"/>
                    <stop offset="1" stopColor="#D9D9D9"/>
                </linearGradient>
                <clipPath id="clip0">
                    <rect x="47.5327" y="33.5327" width="29.9344" height="29.9344" rx="14.9672" fill="white"/>
                </clipPath>
            </defs>
        </svg>

    );
};

export default Tick;
