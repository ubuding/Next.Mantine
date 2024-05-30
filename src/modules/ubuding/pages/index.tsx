"use client";
import { useRef, useState } from "react";
import { Center, Loader } from "@mantine/core";
import { useInfiniteScroll } from "ahooks";
import Waterfalls from "#/Waterfalls";
import Hot from "@/ubuding/components/Hot";
import { getImages } from "@/ubuding/service";
import "./style.scss";
export const Ubuding = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { data, loading, loadMore, loadingMore, noMore } = useInfiniteScroll(
    (_) => {
      return getImages(_?.list?.length || 0);
    },
    {
      target: ref,
      isNoMore: (_: any) => {
        return !_?.hasData;
      },
    },
  );

  return (
    <div ref={ref} className="module ubuding-module">
      <Hot />
      {loading ? (
        <Center inline style={{ height: "100%" }}>
          <Loader />
        </Center>
      ) : (
        <Waterfalls data={data?.list} Component={Block} />
      )}
    </div>
  );
};

function Block({
  id,
  height,
  deg,
  from,
  to,
}: {
  id: number;
  height: number;
  deg: number;
  from: number;
  to: number;
}) {
  return (
    <div
      className={id % 6 === 0 ? "block active" : "block"}
      style={{
        height: height + "px",
        backgroundImage: `linear-gradient(${deg}deg, ${from}, ${to})`,
      }}
    >
      {id}
    </div>
  );
}
