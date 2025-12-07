import { useState, useEffect } from "react";
import { Stack, Group, TextInput, Button, Title, Text, Popover, Anchor } from "@mantine/core";
import { SHA256 } from "crypto-js";
import { notifications } from "@mantine/notifications";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

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
   * Flag format options
   */
  flagFormat: {
    /**
     * RegEx to be matched
     */
    regex: RegExp;

    /**
     * Optional custom flag type message (should end with a space)
     * 
     * @description Regex will be appended right after the message
     * 
     * @default 'Flag is in format: '
     */
    message?: string;
  }

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

function Challenge({title, content, solutionHash, flagFormat, files, hints}: ChallangeProps) {
  const [inp, setInp] = useState("");
  const [bgCol, setBgCol] = useState("var(--mantine-color-dark-4)");

  if (files === undefined) files = [];
  if (hints === undefined) hints = [];

  const LOCAL_STORAGE_NAME = SHA256(title+solutionHash).toString();

  function checkSolution() {
    if (!inp.match(flagFormat.regex)) {
      notifications.show({message: 'Flag does not match its RegEx!', color: "red", icon: <FaExclamationTriangle />});
      return;
    }
    console.log(JSON.stringify(solutionHash));
    console.log(JSON.stringify(SHA256(inp).toString()));
    console.log(typeof(solutionHash));
    console.log(typeof(SHA256(inp).toString()));
    console.log(solutionHash === SHA256(inp).toString());
    if (solutionHash === SHA256(inp).toString()) {
      setBgCol("var(--mantine-color-green-9)");
      localStorage.setItem(LOCAL_STORAGE_NAME, inp);
      notifications.show({message: `Congratulations, you've solved challenge ${title}`, color: "green", icon: <FaCheckCircle />});
    } else {
      setBgCol("var(--mantine-color-red-9)");
      notifications.show({message: 'Incorrect flag!', color: "red", icon: <FaExclamationTriangle />});
    }
  }

  useEffect(() => {
    let loc = localStorage.getItem(LOCAL_STORAGE_NAME);
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
      <Text>{(flagFormat.message) ? flagFormat.message : "Flag is in format: "}{flagFormat.regex.source}</Text>
      {(files.length !== 0) ? <Text>Files to download</Text> : <></>}
      <Group gap={30} wrap="wrap">
        {files.map((val) => {return <Anchor key={val.name} href={val.path} download={val.name}>{val.name}</Anchor>})}
      </Group>
      {(hints.length !== 0) ? <Text>Hints</Text> : <></>}
      <Group gap={10}>
        {hints.map((val, ix) => {return <Popover key={ix} position="bottom"><Popover.Target><Button>{`Hint ${ix+1}`}</Button></Popover.Target><Popover.Dropdown styles={{dropdown: {backgroundColor: 'var(--mantine-color-dark-4)'}}}><Text>{val}</Text></Popover.Dropdown></Popover>})}
      </Group>
      <Group>
        <TextInput flex={5} styles={{input: {backgroundColor: bgCol, color: "whitesmoke"}}} label="Flag" placeholder={flagFormat.regex.source} value={inp} onChange={(e) => setInp(e.currentTarget.value)} />
        <Button flex={1} onClick={checkSolution}>Submit</Button>
      </Group>
    </Stack>
    </>
  );
}

export default Challenge