import { useState, useEffect } from "react";
import { Stack, Group, TextInput, Button, Title, Text, Popover, Anchor } from "@mantine/core";
import { SHA256 } from "crypto-js";

/**
 * Props for the Challange component
 */
export interface ChallangeProps {
  /**
   * Title of the challange
   */
  title: string;

  /**
   * Content of the challange
   */
  content: React.ReactNode;

  /**
   * Hash of the correct solution
   */
  solutionHash: string;

  /**
   * Optional challange files
   */
  files?: {
    /**
     * Name to display the file under
     */
    name: string;

    /**
     * Path to the file
     */
    path: string;
  }[];

  /**
   * Hints for the challange
   */
  hints?: string[];
};

function Challenge({title, content, solutionHash, files, hints}: ChallangeProps) {
  const [inp, setInp] = useState("")
  const [bgCol, setBgCol] = useState("var(--mantine-color-dark-4)")

  if (files === undefined) files = [];
  if (hints === undefined) hints = [];

  function checkSolution() {
    console.log(inp);
    if (solutionHash === SHA256(inp).toString()) {
      setBgCol("var(--mantine-color-green-9)")
      localStorage.setItem(solutionHash, inp);
    } else {
      setBgCol("var(--mantine-color-red-9)")
    }
  }

  useEffect(() => {
    let loc = localStorage.getItem(solutionHash);
    if (loc) {
      setInp(loc);
      setBgCol("var(--mantine-color-green-9)");
    }
  }, [])


  return (
    <>
    <Stack justify="center" gap="md" p={10} bg="dark.5">
      <Title>{title}</Title>
      {content}
      {(files.length !== 0) ? <Text>Files to download</Text> : <></>}
      <Group gap={10}>
        {files.map((val) => {return <Anchor key={val.name} href={val.path} download={val.name}>{val.name}</Anchor>})}
      </Group>
      <Text>Hints</Text>
      <Group gap={10}>
        {hints.map((val, ix) => {return <Popover key={ix} position="bottom"><Popover.Target><Button>{`Hint ${ix+1}`}</Button></Popover.Target><Popover.Dropdown styles={{dropdown: {backgroundColor: 'var(--mantine-color-dark-4)'}}}><Text>{val}</Text></Popover.Dropdown></Popover>})}
      </Group>
      <Group>
        <TextInput flex={5} styles={{input: {backgroundColor: bgCol, color: "whitesmoke"}}} label="Flag" placeholder="flag" value={inp} onChange={(e) => setInp(e.currentTarget.value)} />
        <Button flex={1} onClick={checkSolution}>Submit</Button>
      </Group>
    </Stack>
    </>
  );
}

export default Challenge