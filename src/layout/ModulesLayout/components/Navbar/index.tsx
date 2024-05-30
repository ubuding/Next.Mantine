import "./style.scss";
import { useMantineColorScheme, useComputedColorScheme } from "@mantine/core";
import {
  IconBrandGithub,
  IconSun,
  IconMoon,
  IconHome,
  IconRobot,
} from "@tabler/icons-react";

import { usePathname, useRouter } from "$/i18n/navigation";

export default function Navbar() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const router = useRouter();
  const path = usePathname();

  return (
    <div className="modules-layout navbar-wrap">
      <div className="navbar">
        <div
          className="logo-wrap"
          onClick={() => {
            router.push("/");
          }}
        >
          <div className="logo"></div>
          <div className="label">Next.Mantine</div>
        </div>

        <div className="tools">
          <div
            className="theme item button"
            onClick={() =>
              router.push(path === "/ubuding" ? "/about" : "/ubuding")
            }
          >
            {path === "/ubuding" ? <IconRobot /> : <IconHome />}
          </div>

          <div
            className="theme item button"
            onClick={() =>
              setColorScheme(computedColorScheme === "light" ? "dark" : "light")
            }
          >
            {computedColorScheme === "light" ? <IconMoon /> : <IconSun />}
          </div>

          <div
            className="git item button"
            onClick={() => window.open("https://github.com/ubuding", "_blank")}
          >
            <IconBrandGithub />
          </div>
        </div>
      </div>
    </div>
  );
}
