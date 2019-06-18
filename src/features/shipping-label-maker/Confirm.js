import React, { useContext } from "react";
import WizardContext from "../../core/component/wizard/WizardContext";

export default function Confirm() {
  const context = useContext(WizardContext);

  return (
    <div>
      <h2 className="py-4">Confirm</h2>
      <div class="row">
        <div class="col">Name: {context.context.from.name}</div>
        <div class="col">
          Street: {context.context.from.street}, Address:{" "}
          {context.context.from.city}, {context.context.from.state} -{" "}
          {context.context.from.zip}{" "}
        </div>
      </div>
    </div>
  );
}
