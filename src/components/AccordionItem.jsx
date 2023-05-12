import {useState} from "react";

export const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className='accordion-item'>
            <button onClick={toggleAccordion} className='accordion-item-button'>
                {title}
                <span className='accordion-icon'>{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && <p className='accordion-item-contents'>
                {content}
            </p>}
        </div>
    )
}