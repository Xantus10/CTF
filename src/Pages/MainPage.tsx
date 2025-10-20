import { Stack, Text, Code } from "@mantine/core";
import Challenge from "./Components/Challenge";

function MainPage() {


  return (
    <Stack p={20} gap={10}>
      <Challenge title="redocne" content={<><Text>How about getting flag from this: </Text><Code><div style={{wordWrap: 'break-word'}}>3d3d41497534694c6734694c7441694c74344349743443497430694c6730694c7441694c7434534c6730694c6734694c753043497434534c7434694c67344349753043497530694c7441534c743043497534534c673443497530694c6741694c74304349743443497534534c7541694c7434694c</div></Code></>} solutionHash="93e06ad8145996f84b8d300b1f94ff0f991292b5faca53c7f494ae6fbc5ca9b0" hints={["Shouldn't the == be at the end?", "Try to read redocne BACKWARDS"]} />
      <Challenge title="Word document" content={<><Text>You are given a word document file encrypted with XOR. We have intel, that the key is not very long, but it is more than 10 characters. Can you crack it? (Note: Sometimes you have to switch between UTF-8 and Latin1 encoding. Perhaps solving certain parts in hex would be easier. Also this challange is a bit harder, so don't be ashamed to use the hints or to temporarily skip it and come back to it after few more chapters!)</Text></>} solutionHash="b4605e890b0942107a401d87509861806863f5ddeedf1ca6fcfa8e0688f99975" hints={["What is at the beginning of a docx file?", "What happens if you encrypt a bunch of the same repeated characters?", "Try to create a new .docx file and look for what characters are repeated ;)", "What happens, when you XOR something with null byte?"]} files={[{name: 'worddocument.docx', path: 'worddocument.docx'}]} />
      <Challenge title="redocne" content={<><Text>How about getting flag from this: </Text><Code><div style={{wordWrap: 'break-word'}}>3d3d41497534694c6734694c7441694c74344349743443497430694c6730694c7441694c7434534c6730694c6734694c753043497434534c7434694c67344349753043497530694c7441534c743043497534534c673443497530694c6741694c74304349743443497534534c7541694c7434694c</div></Code></>} solutionHash="93e06ad8145996f84b8d300b1f94ff0f991292b5faca53c7f494ae6fbc5ca9b0" hints={["Shouldn't the == be at the end?", "Try to read redocne BACKWARDS"]} />
    </Stack>
  );
}

export default MainPage;