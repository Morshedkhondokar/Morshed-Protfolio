import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

export default function HoverText({ children }) {
  const spanRef1 = useRef();
  const spanRef2 = useRef();

  const split1 = useRef(null);
  const split2 = useRef(null);

  useGSAP(() => {
    document.fonts.ready.then(() => {
      split1.current = SplitText.create(spanRef1.current, { type: "chars" });
      split2.current = SplitText.create(spanRef2.current, { type: "chars" });
    });

    return () => {
      split1.current?.revert();
      split2.current?.revert();
    };
  }, []);

  const handleMouseEnter = () => {
    if (!split1.current || !split2.current) return;

    gsap.to(split1.current.chars, {
      yPercent: -100,
      stagger: 0.05,
      duration: 0.5,
    });

    gsap.to(split2.current.chars, {
      yPercent: -100,
      stagger: 0.05,
      duration: 0.5,
    });
  };

  const handleMouseLeave = () => {
    if (!split1.current || !split2.current) return;

    gsap.to(split1.current.chars, {
      yPercent: 0,
      stagger: 0.05,
      duration: 0.5,
    });

    gsap.to(split2.current.chars, {
      yPercent: 0,
      stagger: 0.05,
      duration: 0.5,
    });
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-flex items-center overflow-hidden"
    >
      <span
        ref={spanRef1}
        className="block "
      >
        {children}
      </span>

      <span
        ref={spanRef2}
        className="block absolute top-full left-0"
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
}
