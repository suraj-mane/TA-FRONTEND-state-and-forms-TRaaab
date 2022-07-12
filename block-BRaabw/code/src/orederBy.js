import React from "react";

function OrderBy(props){
    return(
        <div className="d-flex">
            <label className="me-3" htmlFor="pricefilter">Oreder by</label>
            <select className="form-select" id="pricefilter" onChange={props.filterProduct}>
              <option defaultValue>select by</option>
              <option value="low">Lowest to Highest</option>
              <option value="high">Highest to Lowest</option>
            </select>
        </div>
    )
}

export default OrderBy;