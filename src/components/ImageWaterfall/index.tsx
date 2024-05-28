import { useMemo } from "react";
import { SimpleGrid, Stack, Card } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { Image } from "./components/Image";
import { useHeadroom } from "@mantine/hooks";
import "./style.scss";
interface DataItem {
  src: string;
  height: number;
}

// TODO 实现下拉加载, 图片 hover, 展示序号
export default function Waterfall({
  data = [],
  imageWidth = 250,
}: {
  data: DataItem[];
  imageWidth?: number;
}) {
  const { width } = useViewportSize();

  const cols = useMemo(() => {
    const cols = Math.floor(width / imageWidth);
    const W = cols * imageWidth + (cols - 1) * 16;
    return W > width ? cols - 1 : cols;
  }, [width]);

  const group = useMemo(() => {
    if (width && cols && data.length) {
      let row: DataItem[][] = [];
      let h: Array<number> = [];
      for (let index = 0; index < cols; index++) {
        row.push([]);
        h.push(0);
      }

      let index = 0;
      data.forEach((item) => {
        if (index >= cols) {
          index = 0;
        }

        const max = Math.max(...h);
        const min = Math.min(...h);
        if (max - min >= imageWidth) {
          index = h.findIndex((_) => _ === min);
        }

        row[index].push(item);
        h[index] = (h?.at(index) || 0) + item.height;
        index++;
      });
      return row;
    }
  }, [cols, data]);

  return (
    <div
      className="component waterfall-component"
      style={{
        width: cols * imageWidth + (cols - 1) * 16 + "px",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
        }}
      ></div>
      <SimpleGrid cols={cols}>
        {group?.map((images, key) => (
          <Stack gap="md" key={key}>
            {images.map((image, key) => (
              <Image
                className="waterfall-image"
                key={key}
                width={imageWidth + "px"}
                height={image.height + "px"}
                src={image.src}
                alt={image.src}
                radius="md"
              />
            ))}
          </Stack>
        ))}
      </SimpleGrid>
    </div>
  );
}
