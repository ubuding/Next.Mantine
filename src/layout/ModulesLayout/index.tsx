"use client";
import { useEffect, useRef, useState } from "react";
import { Tabs } from "@mantine/core";
import { IconRobot, IconHome } from "@tabler/icons-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss";
export const ModulesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  /* @ChildrenScroll 监听子元素滚动事件, 实现导航栏的动态显示 Start */
  const ref = useRef(null);
  const [display, setDisplay] = useState(true);
  /* @ChildrenScroll End */

  useEffect(() => {
    const children = (ref.current as any)?.children || [];
    const node = children[0];

    let lastTop = 0;
    const onScroll = (e: any) => {
      const top: number = e.target.scrollTop;
      console.log(top, lastTop);
      setDisplay(top > lastTop ? false : true);
      lastTop = top;
    };
    if (node) {
      node.addEventListener("scroll", onScroll);
    }
    () => {
      if (node) {
        node.removeEventListener("scroll", onScroll);
      }
    };
  }, []);
  return (
    <div className="layout modules-layout">
      <Navbar />
      <div
        style={{
          width: "100%",
          height: "46px",
          position: "fixed",
          top: "52px",
          left: 0,
          zIndex: 99,
          transform: `translate3d(0,  ${display ? 0 : "-110px"},0)`,
          transition: "transform 400ms ease",
        }}
      >
        <Tabs defaultValue="gallery">
          <Tabs.List>
            <Tabs.Tab value="gallery" leftSection={<IconHome />}>
              ubuding
            </Tabs.Tab>
            <Tabs.Tab value="messages" leftSection={<IconRobot />}>
              About
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>

      <main
        className="modules-wrap"
        ref={ref}
        style={{
          marginTop: display ? "52px" : "0px",
          transition: "margin-top 400ms ease",
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};
