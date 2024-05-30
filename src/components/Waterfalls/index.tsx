import { useMemo } from "react";
import { SimpleGrid, Stack } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export default function Waterfall<T extends { height: number; id: number }>({
  data = [],
  width = 250,
  Component,
}: {
  data: Array<T>;
  width?: number;
  Component: any;
}) {
  const { width: ViewWidth } = useViewportSize();

  const cols = useMemo(() => {
    const cols = Math.floor(ViewWidth / width);
    const W = cols * width + (cols - 1) * 16;
    return W > ViewWidth ? cols - 1 : cols;
  }, [ViewWidth, width]);

  const group = useMemo(() => {
    if (ViewWidth && cols && data.length) {
      let row: T[][] = [];
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
        if (max - min >= width) {
          index = h.findIndex((_) => _ === min);
        }

        row[index].push(item);
        h[index] = (h?.at(index) || 0) + item.height;
        index++;
      });

      return row;
    }
  }, [cols, data, ViewWidth, width]);

  return (
    <div
      className="component waterfall-component"
      style={{
        width: cols * width + (cols - 1) * 16 + "px",
        margin: "0 auto",
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
        {group?.map((list, index) => (
          <Stack gap="md" key={index}>
            {list.map((item) => (
              <Component className="waterfall-item" key={item.id} {...item} />
            ))}
          </Stack>
        ))}
      </SimpleGrid>
    </div>
  );
}
