import { Stack, NativeSelect, Paper, Title, Text } from "@mantine/core";
import { useState } from "react";

import C01 from "./CTFs/C01";
import C02 from "./CTFs/C02";


function MainPage() {

  /**
   * Different CTF challenges
   */
  const CTFs : 
    {
      /**
       * Title of the CTF (Will be displayed)
       */
      title: string;

      /**
       * Optional description
       */
      description?: string;

      /**
       * Component containing the challenges
       */
      comp: React.ReactNode;
    }[]
   = [
    { title: 'Easy crypto CTF', description: 'Beginner level crypto CTFs, featuring hashes, classical ciphers, XOR and much more!', comp: <C01 /> },
    { title: 'Malware focused CTF', description: 'Some malware challenges and one stego for fun!', comp: <C02 /> }
  ];

  /**
   * Index of the currently active CTF
   */
  const [ctfIndex, setCtfIndex] = useState(0);

  return (
    <Stack p={20} gap={10}>
      <NativeSelect label="Select a CTF" value={ctfIndex} data={CTFs.map((val, ix) => ({label: val.title, value: ix.toString()}))} onChange={(e) => setCtfIndex(parseInt(e.currentTarget.value))} />
      <Paper bg="blue.9" p={25} mb={24}><Title order={2}>{CTFs[ctfIndex].title}</Title></Paper>
      <Text mb={24}>{CTFs[ctfIndex].description}</Text>
      {CTFs[ctfIndex].comp}
    </Stack>
  );
}

export default MainPage;