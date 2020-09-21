import React from "react";
import {Star} from "./Star";

export function Stars({count}) {
    Stars.defaultProps = 0
    if (count < 0 || count > 5 || isNaN(count)) {
       return null
    } else {
        return (
            <ul className="card-body-stars u-clearfix">
                {[...Array(count)].map((e, i) => <Star key={i}/>)}
            </ul>
        )
    }

}