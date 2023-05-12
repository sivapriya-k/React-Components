import {useId, useState} from "react";

function getAccordionHeaderId(accordionId, value) {
    return accordionId + '-header-' + value;
}

function getAccordionPanelId(accordionId, value) {
    return accordionId + '-panel-' + value;
}

export const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false)
    const id = useId();
    const headerId = getAccordionHeaderId(id, title)
    const panelId = getAccordionPanelId(id, title)

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className='accordion-item'>
            <button onClick={toggleAccordion} className='accordion-item-button' id={headerId} aria-controls={panelId} aria-expanded={isOpen}>
                {title}
                <span aria-hidden={true} className='accordion-icon'>{isOpen ? '-' : '+'}</span>
            </button>
            <p className='accordion-item-contents' aria-labelledBy={headerId} id={panelId} hidden={!isOpen}>
                {content}
            </p>
        </div>
    )
}