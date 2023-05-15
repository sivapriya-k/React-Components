import {useState, useId, useRef} from "react";
import './Tabs.css';

const getTabListItemId = (tabId, name) => (
    `${tabId}-item-${name}`
)

const getTabListPanelId = (tabId, name) => (
    `${tabId}-panel-${name}`
)


export const Tabs = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabRef = useRef({});
    const tabId = useId();

    const changeTab = (index) => {
       setActiveIndex(index)
    }

    const focusTab = (index) => {
        setActiveIndex(index);
        tabRef.current[index].focus();
    }
    const handleKeyDown = (event) => {
        const count = items.length;
        const nextTab = () => focusTab((activeIndex + 1) % count);
        const prevTab = () => focusTab((activeIndex -1 + count) %count);
        const firstTab = () => focusTab(0);
        const lastTab = () => focusTab(count -1);

        const keyMap = {
            ArrowRight: nextTab,
            ArrowLeft: prevTab,
            Home: firstTab,
            End: lastTab,
        };

        const action = keyMap[event.key];
        if (action) {
            event.preventDefault();
            action();
        }
    }

    return (
        <div className="tabs">
            <div className="tabs-list">
                {items.map(({id, name}, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <button role="tab"
                                id={getTabListItemId(tabId, id)}
                                aria-controls={getTabListPanelId(tabId, id)}
                                aria-selected={isActive}
                                className={[
                            "tabs-list-item", isActive && "tabs-list-item--active"
                        ].filter(Boolean).join(' ')}
                                onClick={() => changeTab(index)}
                                ref={(element) => tabRef.current[index] = element}
                                onKeyDown={handleKeyDown}
                                tabIndex={isActive ? 0 : -1}
                        >
                            {name}
                        </button>
                    )
                })}
            </div>
            <div className="tabs-panel-list">
                {items.map(({id, panel}, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <div role="tabpanel"
                             id={getTabListPanelId(tabId, id)}
                             aria-labelledby={getTabListItemId(tabId, id)}
                             className="tabs-panel-list-item"
                             hidden={!isActive}
                             tabIndex={0}
                        >
                            {panel}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}