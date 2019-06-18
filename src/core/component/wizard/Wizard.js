import React from "react";
import PropTypes from "prop-types";
import Steps from "./Steps";
import WizardContext from "./WizardContext";

// enum
export const WizardAction = {
  prev: 1,
  next: 2,
  end: 3
};

export const proptypes = {
  header: PropTypes.func.isRequired,
  step: PropTypes.array.isRequired,
  wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired
};

class Wizard extends React.Component {
  state = {
    currentStep: 1,
    onAction: this.props.onAction,
    context: this.props.wizardContext
  };

  onAction = action => {
    const parsedAction = parseInt(action);
    if (parsedAction === WizardAction.end) {
      // TODO:
      this.props.onComplete();
    } else if (parsedAction === WizardAction.next) {
      this.setState({ currentStep: this.state.currentStep + 1 });
    } else if (parsedAction === WizardAction.prev) {
      this.setState({ currentStep: this.state.currentStep - 1 });
    }
  };

  handleChange = newValue => {
    const key = newValue[0];
    this.setState(prevState => ({
      ...prevState,
      context: {
        ...prevState.context,
        from: {
          ...prevState.context.from,
          [key]: newValue[1]
        },
        to: {
          ...prevState.context.to,
          [key]: newValue[1]
        },
        weight: newValue[1],
        shippingOption: newValue[1]
      }
    }));
  };

  render() {
    // TODO setup max value for progressbar
    return (
      <div className="container border py-4 px-4">
        <WizardContext.Provider value={this.state}>
          <Steps
            header={this.props.header}
            wizardContext={WizardContext}
            onAction={this.onAction}
          >
            {this.props.steps.map((step, index) => {
              const Step = step;
              return (
                <div>
                  {this.state.currentStep === index + 1 && (
                    <Step key={index.toString()} onChange={this.handleChange} />
                  )}
                </div>
              );
            })}
          </Steps>
        </WizardContext.Provider>
      </div>
    );
  }
}

Wizard.propTypes = proptypes;

export default Wizard;
