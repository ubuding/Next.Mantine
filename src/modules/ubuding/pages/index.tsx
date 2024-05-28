"use client";
import { useRef, useState } from "react";
import { Center, Loader } from "@mantine/core";
import { useInfiniteScroll } from "ahooks";
import ImageWaterfall from "#/ImageWaterfall";
import Hot from "@/ubuding/components/Hot";
import { getImages } from "./service";
import "./style.scss";
export const Ubuding = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { data, loading, loadMore, loadingMore, noMore } = useInfiniteScroll(
    (_) => {
      return getImages();
    },
    {
      target: ref,
      isNoMore: (_: any) => {
        return !_?.hasData;
      },
    },
  );

  return (
    <div ref={ref} className="module home-module">
      <Hot />
      {loading ? (
        <Center inline style={{ height: "100%" }}>
          <Loader />
        </Center>
      ) : (
        <ImageWaterfall data={data.list} />
      )}
    </div>
  );
};
