import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export function LazyLoad({ children }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  return (
    <Lazy ref={ref} isVisible={isVisible}>
      {children}
    </Lazy>
  );
}
const Lazy = styled.div`
  width: 100%;
  transform: translateY(${(props) => (props.isVisible ? "0" : "20px")});
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: opacity 0.6s ease, transform 0.6s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;
