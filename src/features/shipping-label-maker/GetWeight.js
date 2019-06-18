import React, { useContext } from "react";
import WizardContext from "../../core/component/wizard/WizardContext";

const formStyles = {
  label: "col-sm-2 col-form-label"
};
export default function GetWeight(props) {
  const context = useContext(WizardContext);
  const handleChange = e => {
    const key = e.target.name;
    const value = e.target.value;
    props.onChange([key, value]);
  };

  return (
    <div>
      <h2 className="py-4">Enter the weight</h2>
      <div class="form-group row">
        <label className={formStyles.label} htmlFor="weight">
          Weight
        </label>
        <div class="col-sm-10">
          <input
            className={"form-control"}
            type="text"
            id="weight"
            onChange={handleChange}
            value={context.context.weight}
          />
        </div>
      </div>
    </div>
  );
}
