"use client";

import React, {
  useState,
  useRef,
  useLayoutEffect,
  cloneElement,
} from "react";
import Link from "next/link";

const DefaultHomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);
const DefaultCompassIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
  </svg>
);
const DefaultBellIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

export type NavItem = {
  id: string | number;
  icon: React.ReactElement;
  label?: string;
  href?: string;
  onClick?: () => void;
};

const defaultNavItems: NavItem[] = [
  { id: "default-home", icon: <DefaultHomeIcon />, label: "Home", href: "/" },
  {
    id: "default-explore",
    icon: <DefaultCompassIcon />,
    label: "Explore",
    href: "/cases",
  },
  {
    id: "default-notifications",
    icon: <DefaultBellIcon />,
    label: "Notifications",
    href: "/photography",
  },
];

type LimelightNavProps = {
  items?: NavItem[];
  defaultActiveIndex?: number;
  /** When set, highlights this tab (e.g. sync with `usePathname`) */
  activeIndex?: number;
  onTabChange?: (index: number) => void;
  className?: string;
  limelightClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
};

export const LimelightNav = ({
  items = defaultNavItems,
  defaultActiveIndex = 0,
  activeIndex: activeIndexProp,
  onTabChange,
  className,
  limelightClassName,
  iconContainerClassName,
  iconClassName,
}: LimelightNavProps) => {
  const [internalActiveIndex, setInternalActiveIndex] =
    useState(defaultActiveIndex);
  const activeIndex =
    activeIndexProp !== undefined ? activeIndexProp : internalActiveIndex;
  const [isReady, setIsReady] = useState(false);
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (items.length === 0) return;

    const limelight = limelightRef.current;
    const activeItem = navItemRefs.current[activeIndex];

    if (limelight && activeItem) {
      const newLeft =
        activeItem.offsetLeft +
        activeItem.offsetWidth / 2 -
        limelight.offsetWidth / 2;
      limelight.style.left = `${newLeft}px`;

      if (!isReady) {
        setTimeout(() => setIsReady(true), 50);
      }
    }
  }, [activeIndex, isReady, items]);

  if (items.length === 0) {
    return null;
  }

  const handleItemClick = (index: number, itemOnClick?: () => void) => {
    if (activeIndexProp === undefined) {
      setInternalActiveIndex(index);
    }
    onTabChange?.(index);
    itemOnClick?.();
  };

  return (
    <nav
      className={`relative inline-flex items-center h-14 rounded-xl bg-card text-foreground border border-border px-2 shadow-soft ${className ?? ""}`}
    >
      {items.map(({ id, icon, label, onClick, href }, index) => {
        const target = href ?? "#";
        const isExternal =
          target.startsWith("http") || target.startsWith("mailto:");
        const sharedClass = `relative z-20 flex h-full cursor-pointer items-center justify-center p-4 ${iconContainerClassName ?? ""}`;
        const iconNode = cloneElement(icon, {
          className: `w-6 h-6 transition-opacity duration-200 ease-in-out ${
            activeIndex === index ? "opacity-100" : "opacity-40"
          } ${icon.props.className ?? ""} ${iconClassName ?? ""}`,
        });

        if (isExternal) {
          return (
            <a
              key={id}
              href={target}
              ref={(el) => {
                navItemRefs.current[index] = el;
              }}
              className={sharedClass}
              onClick={() => handleItemClick(index, onClick)}
              aria-label={label}
            >
              {iconNode}
            </a>
          );
        }

        return (
          <Link
            key={id}
            href={target}
            prefetch
            ref={(el) => {
              navItemRefs.current[index] = el;
            }}
            className={sharedClass}
            onClick={() => handleItemClick(index, onClick)}
            aria-label={label}
          >
            {iconNode}
          </Link>
        );
      })}

      <div
        ref={limelightRef}
        className={`absolute top-0 z-10 w-11 h-[5px] rounded-full bg-editorial-accent shadow-[0_40px_28px_rgba(158,158,244,0.28)] ${
          isReady ? "transition-[left] duration-300 ease-in-out" : ""
        } ${limelightClassName ?? ""}`}
        style={{ left: "-999px" }}
      >
        <div className="absolute left-[-30%] top-[5px] w-[160%] h-14 [clip-path:polygon(5%_100%,25%_0,75%_0,95%_100%)] bg-gradient-to-b from-editorial-accent/35 to-transparent pointer-events-none" />
      </div>
    </nav>
  );
};
