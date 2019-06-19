import React, { useContext } from "react";
import WizardContext from "../../core/component/wizard/WizardContext";

const formStyles = {
  label: "col-sm-2 col-form-label"
};

// TODO: change this conditional component
export default function GetReceiverAddress(props) {
  const context = useContext(WizardContext);
  const handleChange = e => {
    const key = e.target.id;
    const value = e.target.value;
    props.onChange([key, value]);
  };
  return (
    <div>
      <h2 className="py-4">Enter the receiver's address:</h2>
      <div class="form-group row">
        <label className={formStyles.label} htmlFor="name">
          Name
        </label>
        <div class="col-sm-10">
          <input
            className="form-control"
            type="text"
            id="name"
            onChange={handleChange}
            value={context.context.to.name}
          />
        </div>
      </div>
      <div class="form-group row">
        <label className={formStyles.label} htmlFor="street">
          Street
        </label>
        <div class="col-sm-10">
          <input
            className="form-control"
            type="text"
            id="street"
            onChange={handleChange}
            value={context.context.to.street}
          />
        </div>
      </div>
      <div class="form-group row">
        <label className={formStyles.label} htmlFor="city">
          City
        </label>
        <div class="col-sm-2">
          <input
            className="form-control"
            type="text"
            id="city"
            onChange={handleChange}
            value={context.context.to.city}
          />
        </div>
        <label className={formStyles.label} htmlFor="state">
          State
        </label>
        <div class="col-sm-2">
          <input
            className="form-control"
            type="text"
            id="state"
            onChange={handleChange}
            value={context.context.to.state}
          />
        </div>
        <label className={formStyles.label} htmlFor="zip">
          Zip
        </label>
        <div class="col-sm-2">
          <input
            className="form-control"
            type="text"
            id="zip"
            onChange={handleChange}
            value={context.context.to.zip}
          />
        </div>
      </div>
    </div>
  );
}
