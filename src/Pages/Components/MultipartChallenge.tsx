import { useState, useEffect } from "react";
import { Stack, Group, TextInput, Button, Title, Text, Popover, Anchor } from "@mantine/core";
import { SHA256 } from "crypto-js";
import { notifications } from "@mantine/notifications";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

/**
 * Props for the Challange component
 */
export interface MultipartChallangeProps {
  /**
   * Title of the challange
   */
  title: string;

  /**
   * Main content of the challenge
   */
  content: React.ReactNode;

  /**
   * Parts of the challenge
   */
  parts: {
    /**
     * Question
     */
    title: string;

    /**
     * Solution
     */
    solutionHash: string;

    /**
     * Regex to match the flag by
     */
    regex: RegExp;
  }[];

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

function MultipartChallenge({title, content, parts, files, hints}: MultipartChallangeProps) {
  const [inp, setInp] = useState<string[]>(parts.map(() => ""));
  const [bgCols, setBgCols] = useState(parts.map(() => "var(--mantine-color-dark-4)"));

  function setInpIx(ix: number, val: string) {
    setInp(inp.map((mval, mix) => {return (ix == mix) ? val : mval}));
  }

  function setBgIx(ix: number, val: string) {
    setBgCols(bgCols.map((mval, mix) => {return (ix === mix) ? val : mval}));
  }

  function ixToLetter(ix: number) {
    return String.fromCharCode("a".charCodeAt(0) + ix);
  }

  if (files === undefined) files = [];
  if (hints === undefined) hints = [];

  const LOCAL_STORAGE_NAMES = parts.map((val, ix) => {return SHA256(title+ix.toString()+val.solutionHash).toString();})

  function checkSolution(ix: number) {
    if (!inp[ix].match(parts[ix].regex)) {
      notifications.show({message: 'Flag does not match its RegEx!', color: "red", icon: <FaExclamationTriangle />});
      return;
    }
    if (parts[ix].solutionHash === SHA256(inp[ix]).toString()) {
      setBgIx(ix, "var(--mantine-color-green-9)");
      localStorage.setItem(LOCAL_STORAGE_NAMES[ix], inp[ix]);
      notifications.show({message: `Congratulations, you've solved challenge ${title} part ${ixToLetter(ix)}`, color: "green", icon: <FaCheckCircle />});
    } else {
      setBgIx(ix, "var(--mantine-color-red-9)");
      notifications.show({message: 'Incorrect flag!', color: "red", icon: <FaExclamationTriangle />});
    }
  }

  useEffect(() => {
    LOCAL_STORAGE_NAMES.forEach((val, ix) => {
      let loc = localStorage.getItem(val);
      if (loc) {
        setInpIx(ix, loc);
        setBgIx(ix, "var(--mantine-color-green-9)");
    }
    });
  }, [])


  return (
    <>
    <Stack justify="center" gap="md" p={10} bg="dark.5">
      <Title>{title}</Title>
      <Text>This challenge is multipart and consists of {parts.length} parts (a-{ixToLetter(parts.length-1)})</Text>
      {content}
      {(files.length !== 0) ? <Text>Files to download</Text> : <></>}
      <Group gap={30} wrap="wrap">
        {files.map((val) => {return <Anchor key={val.name} href={val.path} download={val.name}>{val.name}</Anchor>})}
      </Group>
      {(hints.length !== 0) ? <Text>Hints</Text> : <></>}
      <Group gap={10}>
        {hints.map((val, ix) => {return <Popover key={ix} position="bottom"><Popover.Target><Button>{`Hint ${ix+1}`}</Button></Popover.Target><Popover.Dropdown styles={{dropdown: {backgroundColor: 'var(--mantine-color-dark-4)'}}}><Text>{val}</Text></Popover.Dropdown></Popover>})}
      </Group>
      {
        parts.map((val, ix) => {
          return (
          <Group key={ix}>
            <TextInput flex={5} styles={{input: {backgroundColor: bgCols[ix], color: "whitesmoke"}}} label={ixToLetter(ix) + ") " + val.title} placeholder={val.regex.source} value={inp[ix]} onChange={(e) => setInpIx(ix, e.currentTarget.value)} />
            <Button flex={1} onClick={() => checkSolution(ix)}>Submit</Button>
          </Group>
          );
        })
      }
    </Stack>
    </>
  );
}

export default MultipartChallenge;