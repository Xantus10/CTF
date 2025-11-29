import { Stack, NativeSelect, Paper, Title } from "@mantine/core";
import { useState } from "react";

import C01 from "./CTFs/C01";


function MainPage() {

  /**
   * Different CTF challenges
   */
  const CTFs : [
    {
      /**
       * Title of the CTF (Will be displayed)
       */
      title: string;

      /**
       * Component containing the challenges
       */
      comp: React.ReactNode;
    }
  ] = [
    { title: 'Easy crypto CTF', comp: <C01 /> },
  ];

  /**
   * Index of the currently active CTF
   */
  const [ctfIndex, setCtfIndex] = useState(0);

  return (
    <Stack p={20} gap={10}>
      <NativeSelect label="Select a CTF" value={ctfIndex} data={CTFs.map((val, ix) => ({label: val.title, value: ix.toString()}))} onChange={(e) => setCtfIndex(parseInt(e.currentTarget.value))} />
      <Paper bg="blue.9" p={25} mb={24}><Title order={2}>{CTFs[ctfIndex].title}</Title></Paper>
      {CTFs[ctfIndex].comp}
    </Stack>
  );
}

export default MainPage;