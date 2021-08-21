import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 96.73 96.73"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}
    >
      <circle
        className="history__credits-icon-border"
        cx={48.37}
        cy={48.37}
        r={47.62}
        fill="none"
        strokeMiterlimit={22.926}
      />
      <circle
        className="history__credits-icon-bg"
        cx={48.37}
        cy={48.37}
        r={42.1}
      />
      <path
        className="history__credits-icon-draw"
        d="M48.37 55.44l9.84 9.84-2.06 2.06-6.32-6.33.01 13.77h-2.91l-.01-13.76-6.31 6.31-2.06-2.06 9.84-9.84-.01.01zM75.1 30.77V60.9H60.09v-2.91h12.1v-24.3H24.55v24.3h12.1v2.91H21.63V30.77H75.1zm-26.73 7.78c4.03 0 7.29 3.26 7.29 7.29s-3.26 7.29-7.29 7.29-7.29-3.26-7.29-7.29 3.26-7.29 7.29-7.29zm0 2.91c-2.42 0-4.37 1.96-4.37 4.37 0 2.42 1.96 4.38 4.37 4.38a4.37 4.37 0 004.37-4.38c0-2.42-1.96-4.37-4.37-4.37zm-13.61 2.43v3.89h-3.89v-3.89h3.89zm31.11 0v3.89h-3.89v-3.89h3.89z"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgComponent;
