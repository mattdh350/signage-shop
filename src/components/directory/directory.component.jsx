import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          id: 1,
          title: "Samsung Signage Displays",
          subtitle: "Smart Signage Displays Powered by Tizen OS",
          linkUrl: "shop/samsung",
          imageUrl:
            "https://purepng.com/public/uploads/medium/purepng.com-led-televisiontvtelecommunicationmonochrometelevisionoldlcd-televisionsamsung-1421526536548xnsuf.png",
          color: "samsung-blue",
        },
        {
          id: 2,
          title: "LG Signage Displays",
          subtitle: "Smart Signage Displays Powered by WebOS",
          linkUrl: "shop/lg",
          imageUrl:
            "https://lh3.googleusercontent.com/proxy/6hYDDrH8eX56TMjtvX3VBGXOnMTve_Q-I5nQcKhtGHB2YB1D75vnSJC6kmnsIxqsCLDh-zdee5zPsMtI5veoaTHVGFWfoC5QyF9rX6amMPTh0FEadkMqb6ySrgSsSP0k81cqySeHz54RS1ssN3oPMUoKVDKAYGr6kE7VE_UI2SL_7zppqxqyzHRWbuE",
          color: "lg-red",
        },
        {
          id: 3,
          title: "Brightsign Signage Products",
          subtitle: "Cost-effective and reliable Signage devices",
          linkUrl: "shop/brightsign",
          imageUrl:
            "https://www.brightsign.biz/application/files/7015/2710/1198/XT1144-fancy.png",
          color: "brightsign-purple",
        },
        {
          id: 4,
          title: "Certified Signage Windows PCs",
          subtitle: "Dediciated Windows devices certfied for Signage use-cases",
          linkUrl: "shop/windows",
          imageUrl:
            "https://signagelive.com/wp-content/uploads/2013/10/Windows_Logo1.png",
          size: "large",
          color: "sky-blue",
        },
        {
          id: 5,
          title: "Signage CMS Bundles",
          subtitle: "Cost-effective and reliable Signage devices",
          linkUrl: "shop/cms-bundles",
          imageUrl:
            "https://www.myeasycms.com/wp-content/uploads/2019/09/LCDs.png",
          size: "large",
          color: "orange",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory">
        {this.state.categories.map(({ id, ...otherCategoryProps }) => (
          <MenuItem key={id} {...otherCategoryProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
