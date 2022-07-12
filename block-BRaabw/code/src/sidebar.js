import React from "react";
function SideBar(props) {
        let tag = props.product.products.map(ele => ele.availableSizes).flat();
        let all =[...new Set(tag)];
        var {size} = props;
    return(
        <div className="d-flex justify-content-between mt-5">
            <div className="tag">
                <ul className="text-center d-flex ps-0 flex-wrap ">
                    {
                        all.map(ele => <span key={ele} onClick={() => props.filterProductOnSize(ele)} className={`${size.includes(ele) ? "btn btn-warning tags m-2 p-2 text-light rounded-circle":"btn btn-dark tags m-2 p-2 text-light rounded-circle"}`}>{ele}</span>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default SideBar;