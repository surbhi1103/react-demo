import React from "react";
import PropTypes from "prop-types";
import { WizardAction } from "../wizard/Wizard";
import ProgressBar from "react-bootstrap/ProgressBar";

const stepsPropTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};

export default class Steps extends React.Component {
  onAction = event => {
    event.preventDefault();
    const action = event.target.value;
    console.log(this);
    /*TODO: check received action is present in the WizardAction Object */
    // if (action === "number" && WizardAction[action]) {
    //   this.props.onAction(action);
    // } else {
    //   throw new Error("Something went wrong!");
    // }
    this.props.onAction(action);
  };

  render() {
    const WizardContext = this.props.wizardContext;
    return (
      <WizardContext.Consumer>
        {context => (
          <form>
            <h1 className="wizard-header pb-4"> {this.props.header}</h1>
            <ProgressBar min={1} max={5} now={context.currentStep} />
            {this.props.children}
            <div class="d-flex justify-content-center">
              <button
                className="btn btn-primary btn-lg mr-2"
                onClick={this.onAction}
                value={WizardAction.prev}
                disabled={context.currentStep === 1}
              >
                Previous
              </button>
              <button
                className="btn btn-primary btn-lg mx-2"
                onClick={this.onAction}
                value={
                  context.currentStep === 5
                    ? WizardAction.end
                    : WizardAction.next
                }
              >
                {context.currentStep === 5 ? "Confirm" : "Next"}
              </button>
            </div>
          </form>
        )}
      </WizardContext.Consumer>
    );
  }
}

Steps.propTypes = stepsPropTypes;
