import React, { useContext } from "react";
import WizardContext from "../../core/component/wizard/WizardContext";

export default function GetShippingOption(props) {
  const context = useContext(WizardContext);
  const handleChange = e => {
    const key = e.target.name;
    const value = e.target.value;
    props.onChange([key, value]);
  };

  return (
    <div>
      <h2 className="py-4">Enter shipping option:</h2>{" "}
      <div class="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="shipping-option">
          Shipping Option
        </label>
        <div class="col-sm-10">
          <input
            className="form-control"
            type="text"
            id="shipping-option"
            onChange={handleChange}
            value={context.context.shippingOption}
          />
        </div>
      </div>
    </div>
  );
}
