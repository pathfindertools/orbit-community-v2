import * as React from "react";
import { linkTarget } from "../helpers/utilities";
import { ThemeContext } from "./layout";

export const Buttons = ({
  className = "",
  buttons,
  parentField = ""
}) => {
  
  const classes = (button) => {
    const theme: any = React.useContext(ThemeContext)
    const buttons: any = theme.buttons

    const styles = {
      primary: `${buttons?.primaryFill} ${buttons?.primaryTypography} ${buttons?.primaryBorder} ${buttons?.primaryPadding} ${buttons?.primaryRounded}`,
      secondary: `${buttons?.secondaryFill} ${buttons?.secondaryTypography} ${buttons?.secondaryBorder} ${buttons?.secondaryPadding} ${buttons?.secondaryRounded}`,
      minor: `relative ${buttons?.minorFill} ${buttons?.minorTypography} ${buttons?.minorBorder} ${buttons?.minorPadding} ${buttons?.minorRounded}`,
    };
    return button.type ? styles[button.type] : styles.primary
  }
  return (
    <div className={`${className}`}>
    {buttons &&
        buttons.map(function (button, index) {
          const arrowIcon = <svg className="absolute right-0 top-1/2 transform -translate-y-1/2 " width="24" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2.7915H27V27.7915" stroke="white" strokeWidth="4"/><path d="M27 2.7915L2 27.7915" stroke="white" strokeWidth="4"/></svg>
          const element = (
              <div className="mb-12 uppercase" key={index}>
                <a
                  className={classes(button)}
                  href={button.link}
                  target={linkTarget(button.link)}
                  data-tinafield={`${parentField}.${index}`}
                >
                  {button.label} {button.type === "minor" && arrowIcon}
                </a>
              </div>
            );
          return element;
        })}
    </div>
  );
};
