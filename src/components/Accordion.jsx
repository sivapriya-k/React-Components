import {AccordionItem} from "./AccordionItem";
import './Accordion.css';

export const Accordion = ({contents}) => {
    return (
        <div className={'accordion'}>
            {contents.map(({id, title, content}) => (
                <AccordionItem id={id}  title={title} content={content} />
            ))}
        </div>
    )
}

