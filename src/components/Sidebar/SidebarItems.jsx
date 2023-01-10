import React, { useState } from "react";
import {FormattedMessage} from "react-intl"
import { Link } from "react-router-dom";
import {
  ItemsList,
  ItemContainer,
  ItemWrapper,
  ItemName,
} from "./SidebarStyles";

import { dummyData } from "..";

const SidebarItems = ({ displaySidebar }) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <ItemsList>
      {dummyData.map((itemData, index) => (
        <ItemContainer
          key={index}
          onClick={() => setActiveItem(itemData.id)}
          className={itemData.id === activeItem ? "active" : ""}
        >
          <Link to={itemData.path}>
            <ItemWrapper>
              {itemData.icon}
              <ItemName displaySidebar={displaySidebar}>
                
                <FormattedMessage id={itemData.name}/>
              </ItemName>
            </ItemWrapper>
          </Link>
        </ItemContainer>
      ))}
    </ItemsList>
  );
};

export default SidebarItems;
