import {useState, useId} from "react";
import {Tree} from "./Tree";

export const TreeNode = ({ data }) => {
    const {name, icon, children} = data
    const hasChildren = children?.length > 0;
    const [childVisible, setChildVisible] = useState(false);
    const treeNodeId = useId();

    return (
        <li role="treeitem" key={treeNodeId} aria-label={name} aria-selected={childVisible}>
            <div className="treeitem-title" onClick={() => setChildVisible(!childVisible)}>
                {hasChildren && (
                    <span>{childVisible? '-': '+'}</span>
                )
                }
                <div>
                    {hasChildren && <span>{icon}</span>}
                    <span>{name}</span>
                </div>
            </div>

            {childVisible && hasChildren &&  (
                <Tree data={children} />
            )}
        </li>
    )
}