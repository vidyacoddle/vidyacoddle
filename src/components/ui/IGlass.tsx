import React from "react";

// Combined outer and inner shadow exactly from osglass.txt
export const GLASS_SHADOW = "shadow-[0px_6px_24px_rgba(0,0,0,0.2),inset_0_0_23px_0px_#ffffff]";

export const DEFAULT_GLASS_FILTER_SCALE = 101;
export const BUTTON_GLASS_FILTER_SCALE = 101;

export interface GlassFilterProps {
  id: string;
  scale?: number;
}

export const GlassFilter = React.memo(
  ({ id, scale = DEFAULT_GLASS_FILTER_SCALE }: GlassFilterProps) => (
    <svg aria-hidden="true" className="hidden" focusable={false}>
      <title>Glass Effect Filter</title>
      <defs>
        <filter
          id={id}
          x="0%"
          y="0%"
          width="100%"
          height="100%"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.009 0.009"
            numOctaves="2"
            seed="92"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurred"
            result="displaced"
            scale={scale}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  )
);
GlassFilter.displayName = "GlassFilter";
