import React, {useState} from "react";
import PriceListComponentItem from "./PriceListComponentItem";
import PriceListComponentPriceList from "./PriceListComponentPriceList";

const PriceListComponent = () => {
    const [itemTitle, setItemTitle] = useState("For Children");

    return (
        <div className="priceListComponentWrapper">
            <div>
                <div className="priceListComponentBackgroundTitleContainer">
                    <div>
                        <p>Price List</p>
                    </div>
                </div>
                <div className="priceListComponentColorBox"/>
            </div>
            <div className="priceListComponentContentWrapper">
                <div className="priceListComponentContentContainer">
                    <div className="priceListComponentTitle">
                        <p>Price List</p>
                    </div>
                    <div className="priceListComponentCategories">
                        <PriceListComponentItem tooth="tooth1" onPress={setItemTitle} title={itemTitle} />
                        <PriceListComponentItem tooth="tooth2" onPress={setItemTitle} title={itemTitle} />
                        <PriceListComponentItem tooth="tooth3" onPress={setItemTitle} title={itemTitle} />
                    </div>
                    <div className="priceListComponentPrices">
                        <PriceListComponentPriceList title={itemTitle} />
                    </div>
                    <div className="priceListComponentButtonContainer">
                        <div className="priceListComponentButton">
                            <p>
                                See All
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceListComponent;