// LIBRARIES
import React from "react";

// Context Type
interface CustomSvgIcon {
  className?: string;
}

// FC
const WordPressLogo = ({ className = "" }: CustomSvgIcon) => {
  return (
    <svg viewBox="0 0 186.3 189" className={className}>
      <pattern
        x="-33.5"
        y="165.9"
        width="69"
        height="69"
        patternUnits="userSpaceOnUse"
        viewBox="2.1 -70.9 69 69"
        style={{ overflow: "visible" }}
      >
        <path style={{ fill: "none" }} d="M2.1-70.9h69v69h-69z" />
        <path d="M2.1-70.9h69v69h-69z" />
        <path d="M61.8-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M54.1-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M46.4-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M38.8-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M31.1-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M23.4-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M15.8-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M8.1-71.7v.2l-.2.2c-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2c0 .1 0 .1 0 0M.4-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.2.4.6.6.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2c0 .1 0 .1 0 0" />
        <g>
          <path d="M69.4-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0" />
        </g>
        <path d="M.5-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.2.3.6.6.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2c0 .1 0 .1 0 0" />
        <g>
          <path d="M69.4-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M61.8-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M54.1-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M46.5-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M38.8-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M31.1-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M23.5-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M15.8-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M8.2-64v.2c-.1.1-.2.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .2.2.4.3.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2.1.3.1.2.1.3-.1 0-.1 0 0 0M.5-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1 0 .3.1.4 0 .2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2" />
          <g>
            <path d="M69.4-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M61.8-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M54.1-56.3v.2c-.1 0-.1 0-.2.1s-.1.3-.1.4c-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M46.5-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M38.8-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M31.1-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M23.5-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M15.8-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M8.2-56.3v.2c-.1 0-.2 0-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c-.1 0-.1 0 0 0M.5-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3" />
          </g>
          <g>
            <path d="M69.4-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M61.8-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M54.1-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M46.5-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M38.8-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M31.1-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M23.5-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M15.8-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M8.2-48.7v.2c-.1.1-.2.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.1.2.3.6.5.6s.4-.1.5-.1c.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2.1.3.1.2.1.3-.1 0-.1 0 0 0M.5-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.2.3.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3" />
          </g>
          <g>
            <path d="M69.4-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M61.8-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M54.1-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M46.5-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M38.8-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M31.1-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M23.5-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M15.8-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M8.2-41v.2c-.1 0-.2 0-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c-.1 0-.1 0 0 0M.5-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5h.4c.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2" />
          </g>
          <g>
            <path d="M69.4-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M61.8-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M54.1-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M46.5-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M38.8-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M31.1-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M23.5-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M15.8-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M8.2-33.4v.2c-.1.1-.2.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c-.1 0-.1 0 0 0M.5-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3" />
          </g>
          <g>
            <path d="M69.4-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M61.8-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M54.1-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M46.5-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M38.8-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M31.1-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M23.5-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M15.8-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M8.2-25.7v.2c-.1.1-.2 0-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .1.2.3.3.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2.1.2.1.2.1.3-.1 0-.1 0 0 0M.5-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.3.5.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3" />
          </g>
          <g>
            <path d="M69.4-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M61.8-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M54.1-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M46.5-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M38.8-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M31.1-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M23.5-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M15.8-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M8.2-18.1v.2c-.1.1-.2.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .2.2.4.3.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2.1.3.1.2.1.3-.1.1-.1 0 0 0M.5-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1 0 .3.1.4.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.1c0 .1 0 0 0 0" />
          </g>
          <g>
            <path d="M69.4-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M61.8-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.4.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2M54.1-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M46.5-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M38.8-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.4.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2M31.1-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M23.5-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M15.8-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.4.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2M8.2-10.4v.2c-.1.1-.2 0-.2.1-.1.1-.1.3-.1.3-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .2.2.4.3.6.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2.1.2.1.2.1.3-.1 0-.1 0 0 0M.5-10.4v.2c-.1.1-.1.1-.2.1 0 .1-.1.3-.1.3-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.2.3.6.6.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.4.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2" />
          </g>
        </g>
        <g>
          <path d="M69.4-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.2.4.6.6.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2c0 .1 0 0 0 0M61.8-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .2.2.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M54.1-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.2.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2.1.3-.1.4-.3v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.1c0 .1 0 0 0 0M46.5-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.1.2.3.6.5.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2.1.2.1.1.1.2M38.8-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .2.2.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M31.1-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.2.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M23.5-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.1.2.3.6.6.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2c0 .1 0 0 0 0M15.8-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.2.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M8.2-2.8v.2c-.1.1-.2.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .2.2.4.3.5.2.2.4.6.6.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8 0 .1-.2.2-.3.2-.2.1-.1.2-.3.3-.1 0-.2.1-.2.2v.1c-.1.1-.1 0 0 0M.5-2.8v.2c-.1.1-.1.1-.2.1 0 .1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .2.2.4.4.5.2.2.3.6.6.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2 0 .3-.2.4-.4v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.1 0-.2.1-.4.1-.1.1-.1.2-.3.3-.1 0-.2.1-.2.2v.1c0 .1 0 0 0 0" />
        </g>
      </pattern>
      <path d="M93.1 0C-31.1 2.2-31 186.8 93.1 189c124.2-2.2 124.2-186.8 0-189zM8.2 94.5c0-12.3 2.6-24 7.4-34.6l40.5 111C27.7 157.2 8.2 128.1 8.2 94.5zm84.9 85c-8.3 0-16.4-1.2-24-3.5l25.5-74.1c.7 1.4 25.7 71.5 26.7 72.7-8.8 3.2-18.3 4.9-28.2 4.9zm11.7-124.8c5.1-.3 9.7-.8 9.7-.8 4.6-.5 4-7.3-.5-7 0 0-13.8 1.1-22.6 1.1C83 47.9 69 46.9 69 46.9c-4.6-.3-5.1 6.7-.5 7 0 0 4.3.5 8.9.8L90.6 91 72 146.7l-30.9-92c5.1-.3 9.7-.8 9.7-.8 4.6-.5 4-7.3-.5-7-.5.1-20.4 1.5-28.1 1 25.3-42.5 93-51.3 128.4-16-8.7-.8-15.4 6.9-15.4 15 1.2 15.9 16.1 24.1 15.3 43.4-.2 12.3-11.3 41.4-14.9 55.8l-30.8-91.4zm62.9-1c22.6 38.4 6.4 93.7-31.8 114.2 6.7-25.6 36.8-88.5 31.8-114.2z" />
    </svg>
  );
};

export default WordPressLogo;
