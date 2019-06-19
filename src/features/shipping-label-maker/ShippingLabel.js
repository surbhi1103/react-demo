import React, { useContext } from "react";

export default function ShippingLabel(props) {
  return (
    <div class="container my-5">
      <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 bd-highlight">PRIORITY MAIL 2-DAY</div>
      </div>
      <div class="d-flex bd-highlight">
        <div class="p-2 bd-highlight"> {props.label.from.name}</div>
        <div class="p-2 bd-highlight">
          {props.label.from.street}, {props.label.from.city}
        </div>
      </div>
      <div class="d-flex justify-content-center bd-highlight">
        <div class="p-2 bd-highlight"> {props.label.to.name}</div>
      </div>
      <div class="d-flex flex-row-reverse bd-highlight">
        <div class="p-2 bd-highlight">Cost</div>
        <div class="p-2 bd-highlight">{props.cost}</div>
      </div>
    </div>
  );
}
