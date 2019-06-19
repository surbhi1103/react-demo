import React from "react";
import Wizard from "../../core/component/wizard/Wizard";

import GetSenderAddress from "./GetSenderAddress";
import GetReceiverAddress from "./GetReceiverAddress";
import GetShippingOption from "./GetShippingOption";
import GetWeight from "./GetWeight";
import Confirm from "./Confirm";

import ShippingLabel from "./ShippingLabel";

class ShippingLabelMaker extends React.Component {
  state = { shippingInfo: {}, printLabel: false };

  ShippingOption = {
    ground: 1,
    priority: 2
  };

  // TODO: remove the values in the object properties
  ShippingInfo = {
    from: {
      name: "John Smith",
      street: "131 Dartmouth St",
      city: "Boston",
      state: "MA",
      zip: "02116"
    },
    to: {
      name: "Linda Jackson",
      street: "40 Fulton St",
      city: "New York",
      state: "NY",
      zip: "10038"
    },
    weight: 2,
    shippingOption: 1
  };

  calculateCost = () => {
    const shippingCost =
      this.ShippingInfo.weight *
      ShippingLabelMaker.shippingRate *
      (this.ShippingInfo.shippingOption === this.ShippingOption.ground
        ? 1
        : 1.5);
    console.log(shippingCost);
    return shippingCost;
  };

  onComplete = () => {
    this.setState({ printLabel: true });
    alert("worked");
  };

  render() {
    console.log(this);
    return (
      <div className="shipping-label">
        {/* <button onClick={this.calculateCost}>click</button> */}
        {this.state.printLabel ? (
          <ShippingLabel label={this.ShippingInfo} cost={this.calculateCost} />
        ) : (
          <Wizard
            wizardContext={this.ShippingInfo}
            steps={[
              GetSenderAddress,
              GetReceiverAddress,
              GetWeight,
              GetShippingOption,
              Confirm
            ]}
            header={this.props.header}
            onComplete={this.onComplete}
          />
        )}
      </div>
    );
  }
}
ShippingLabelMaker.shippingRate = 0.4;
// ShippingLabelMaker.propTypes = proptypes;

export default ShippingLabelMaker;
