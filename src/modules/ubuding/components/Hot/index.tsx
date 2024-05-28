"use client";
import { Carousel } from "@mantine/carousel";
import "./style.scss";
import { Image } from "#/Image";
export default function Hot() {
  const images = [
    {
      className: "hot_image",
      src: "/images/hot_1.jpg",
      width: "100%",
      height: "300px",
      alt: "",
    },
    {
      className: "hot_image",
      src: "/images/hot_2.jpg",
      width: "100%",
      height: "300px",
      alt: "",
    },
    {
      className: "hot_image",
      src: "/images/hot_3.jpg",
      width: "100%",
      height: "300px",
      alt: "",
    },
    {
      className: "hot_image",
      src: "/images/hot_4.jpg",
      width: "100%",
      height: "300px",
      alt: "",
    },
    {
      className: "hot_image",
      src: "/images/hot_5.jpg",
      width: "100%",
      height: "300px",
      alt: "",
    },
    {
      className: "hot_image",
      src: "/images/hot_6.jpg",
      width: "100%",
      height: "300px",
      alt: "",
    },
  ];
  return (
    <div className="component hot-component">
      <Carousel
        withIndicators
        height={300}
        slideSize="50%"
        slideGap="md"
        loop
        align="start"
        slidesToScroll={2}
      >
        {images.map((props, key) => (
          <Carousel.Slide key={key}>
            <div className="item">
              <Image {...props} alt={props.alt} />
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}
