"use client";

import useSWR from "swr";
import { useState } from "react";
import { fetcher } from "../base/fetcher";
import { CustomReactSelect } from "@/components/select";
import { Character } from "@/base/types";
import { Card } from "@radix-ui/themes";
import clsx from "clsx";

export default function Home() {
  const [searchName, setSearchName] = useState("");
  const {
    data: characterData,
    error: characterError,
    isLoading: isCharacterLoading,
  } = useSWR<{ results: Character[] }>(
    `https://rickandmortyapi.com/api/character?name=${searchName}`,
    fetcher
  );

  return (
    <main
      className={clsx(
        "flex min-h-screen flex-col items-center justify-center bg-no-repeat bg-cover bg-center",
        characterError
          ? "bg-[url('/404-error.jpeg')]"
          : "bg-[url('/rick-and-morty-bg.jpeg')]"
      )}
    >
      {(characterData || isCharacterLoading) && (
        <Card variant="surface" className="h-96 pb-6">
          <CustomReactSelect
            key={"custom-rickandmorty-select"}
            isDataLoading={isCharacterLoading}
            setText={setSearchName}
            selectOptions={characterData?.results}
          />
        </Card>
      )}
    </main>
  );
}
