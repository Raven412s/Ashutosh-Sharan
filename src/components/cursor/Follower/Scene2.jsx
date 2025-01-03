'use client';
import React from 'react'
import Cursor from "./Cursor";
import { useState } from 'react';
import { TextGenerateEffect } from '../../ui/text-generate-effect';

export default function Scene2() {
    const [isActive, setIsActive] = useState(false);
    const string = "Crafting seamless animations that turn interactions into unforgettable experiences."
    return (
        <div className='h-[100vh] flex items-center justify-center'>
            <h1 onMouseOver={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className="text-[4.5vw] max-w-[90vw] text-center text-white p-20">
                <TextGenerateEffect words={string}/>
            </h1>
            <Cursor isActive={isActive}/>
        </div>
    )
}
