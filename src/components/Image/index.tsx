import NextImage from "next/image";
import { Image as MantineImage } from "@mantine/core";
import type { MantineImageProps, NextImageProps } from "./type";
import "./style.scss";
export const Image = (props: MantineImageProps) => {
  const {
    src,
    alt = "",
    height = "auto",
    width = "250px",
    className = "",
  } = props;
  return (
    <div
      className={"component image-component " + className}
      style={{ height, width }}
    >
      <MantineImage
        component={() =>
          NImage({
            src,
            alt,
          })
        }
      />
    </div>
  );
};

function NImage({ src, alt = "" }: NextImageProps) {
  return <NextImage src={src} alt={alt} fill={true} objectFit="cover" />;
}
