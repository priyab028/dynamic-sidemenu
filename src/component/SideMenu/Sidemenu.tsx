import React, { useState } from 'react';
import './style.css';

interface MenuItem {
  title: string;
  subItems?: string[];
}

interface SideMenuProps {
  menuConfig: MenuItem[];
}

const SideMenu: React.FC<SideMenuProps> = ({ menuConfig }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleBtnClick = (title: string) => {
    if (expandedItem === title) {
      setExpandedItem(null);
    } else {
      setExpandedItem(title);
    }
  };

  const renderSideMenu = (subItems: string[] | undefined, title: string) => {
    if (!subItems || subItems.length === 0) {
      return null;
    }

    const ulTestId = `ul-${title.toLowerCase()}`;

    return (
      <ul data-test-id={ulTestId}>
        {subItems.map((subItem) => (
          <li
            key={`${title.toLowerCase()}-${subItem.toLowerCase()}`}
            data-test-id={`li-${title.toLowerCase()}-${subItem.toLowerCase()}`}
          >
            {subItem}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="menu-wrapper">
      {menuConfig.map((menuItem) => {
        const { title, subItems } = menuItem;
        const divTestId = `first-level-${title.toLowerCase()}`;
        const buttonTestId = `button-${title.toLowerCase()}`;
        const isExpanded = expandedItem === title;

        return (
          <div
            key={title}
            data-test-id={divTestId}
            className={`menu-item ${isExpanded ? 'expanded' : ''}`}
          >            <div className="title">{title}</div>
            {subItems && subItems.length > 0 && (
              <button
                data-test-id={buttonTestId}
                onClick={() => handleBtnClick(title)}
                className={`expand-btn ${isExpanded ? 'expanded' : ''}`}
              >
                {isExpanded ? 'Hide' : 'Expand'}
              </button>
            )}
            {isExpanded && renderSideMenu(subItems, title)}
          </div>
        );
      })}
    </div>
  );
};

export default SideMenu;
