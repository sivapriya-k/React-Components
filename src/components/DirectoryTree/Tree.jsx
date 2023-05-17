import {TreeNode} from "./TreeNode";
import "./Tree.css";
import {useId} from "react";

export const Tree = ({ data, isRoot}) => {
    const treeId = useId();

    return (
        <div>
            <ul role={isRoot? 'tree' : 'group'} className={"tree"} id={treeId}>
                {data.map(node => {
                    return (
                        <TreeNode data={node} />
                    )
                })}
            </ul>
        </div>
    )
}