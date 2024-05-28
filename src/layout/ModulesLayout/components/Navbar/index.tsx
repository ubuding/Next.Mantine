import "./style.scss";
import {
  ActionIcon,
  Avatar,
  Popover,
  Button,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconSun,
  IconMoon,
  IconLogout,
} from "@tabler/icons-react";

export default function Navbar() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  return (
    <div className="modules-layout navbar-wrap">
      <div className="navbar">
        <div className="logo-wrap">
          <div className="logo"></div>
        </div>
        <div className="label"></div>

        <div className="tools">
          <div className="theme item">
            <ActionIcon
              size="xl"
              color="transpant"
              onClick={() =>
                setColorScheme(
                  computedColorScheme === "light" ? "dark" : "light",
                )
              }
            >
              {computedColorScheme === "light" ? <IconMoon /> : <IconSun />}
            </ActionIcon>
          </div>

          <div className="git item">
            <ActionIcon
              size="xl"
              color="transpant"
              onClick={() =>
                window.open("https://github.com/ubuding", "_blank")
              }
            >
              <IconBrandGithub />
            </ActionIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
