import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className='note__main-content'>
            <NotesAppBar />
           
            <div className='notes__content'>
                <input
                    type='text'
                    placeholder='Some awesome title'
                    className='notes__title-input' 
                    autoComplete='off'
                    />
                <textarea
                    placeholder='What happended today'
                    className='notes__textarea'
                ></textarea>

                <div className='notes__image'>
                    <img
                        src='https://elements-video-cover-images-0.imgix.net/files/8fca4aac-6cd3-4c89-90f5-a46fae6892c2/inline_image_preview.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=fb1712598665daf44065f21cf3401094'
                        alt='imagen'
                    />
                </div>
           
            </div>
        </div>
    )
}
