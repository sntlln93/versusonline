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
        cx={48.37}
        cy={48.37}
        r={47.62}
        fill="none"
        className="history__credits-icon-border"
        strokeMiterlimit={22.926}
      />
      <circle
        cx={48.37}
        cy={48.37}
        r={42.1}
        className="history__credits-icon-bg"
      />
      <path
        className="history__credits-icon-draw"
        d="M76.17 32.28l-9.84 9.84-2.06-2.07 6.32-6.32H56.82v-2.91l13.76-.01-6.32-6.31 2.07-2.07 9.83 9.84zM75.1 45.83v15.08H60.09V58h12.1V45.83h2.91zM48.37 33.69H24.55v24.3h35.53v2.91H21.63V30.76h26.73v2.91l.01.01zm0 4.86c4.02 0 7.29 3.26 7.29 7.29 0 4.02-3.26 7.29-7.29 7.29-4.02 0-7.29-3.26-7.29-7.29 0-4.02 3.26-7.29 7.29-7.29zm0 2.91c-2.42 0-4.37 1.96-4.37 4.37 0 2.42 1.96 4.38 4.37 4.38a4.37 4.37 0 004.37-4.38c0-2.42-1.96-4.37-4.37-4.37zm-13.61 2.43v3.89h-3.89v-3.89h3.89zm31.11 0v3.89h-3.89v-3.89h3.89z"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgComponent;
