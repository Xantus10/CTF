import { Stack, Text, Code, Accordion, List } from "@mantine/core";
import Challenge from "./Components/Challenge";

function MainPage() {


  return (
    <Stack p={20} gap={10}>
      <Accordion defaultValue={"CTF"}>
        <Accordion.Item key={"CTF"} value="CTF">
          <Accordion.Control>
            <Text>Welcome to CTF!</Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text>This CTF is mainly focused on crypto related topics, and is meant to be solved solo.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item key={"Writeup"} value="Writeup">
          <Accordion.Control>
            <Text>Making a writeup</Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text>A writeup for each challenge should mention at least the following</Text>
            <List>
              <List.Item>A brief summary of the challenge (description of the problem)</List.Item>
              <List.Item>If it uses a cipher, say which (And how do we find out it is that particular cipher) or if it uses a custom one, explain how it works</List.Item>
              <List.Item>IMPORTANT! Feature a detailed Step By Step solution (1. I tried this, 2. We do this, 3. We see this so we do this, 4. ...)</List.Item>
              <List.Item>Feature the flag to the challenge</List.Item>
            </List>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <Challenge title="01 Crazy Encodiac" content={<><Text>Are you qualified to join our clubs of Encodiacs?</Text><Text>Flag is in format: flag{'{'}[A-Za-z0-9_]*{'}'}</Text></>} solutionHash="51e43ed3999a3b7488d6078c43972ea1aa100d9d8e744e7f7da2c57f1377a7ca" hints={["Good idea to use cyberchef, most things are there, but not all of them"]} files={[{name: "01.txt", path: "01.txt"}]} />
      <Challenge title="02 Password backup" content={<><Text>I heard about this really good password backup company, you simply send them all your passwords and they send you a backup of them! When I did it, I got only a locked zip file. Can you tell me if my passwords are really there? I heard the zip is supposed to be protected by 5 character uppercase letters.</Text><Text>Flag is in format: flag{'{'}[A-Za-z0-9_]*{'}'}</Text></>} solutionHash="924f9ec73d893957a8dfbebf08f66d9e975be2a331ed9eb8a2e4ebd77d4e4ea8" hints={["First zip2john, then hashcat", "hashcat --help might help you"]} files={[{name: "02.zip", path: "02.zip"}]} />
      <Challenge title="03 I NEED my document" content={<><Text>Help! My word document has been encrypted! I used secret resources and found some info, so listen carefully!</Text><Text>It was encrypted using XOR. I found out the password is not that long, but it IS longer than 10 characters. Can you help me now?</Text><Text>Flag is in format: flag{'{'}[A-Za-z0-9_]*{'}'}</Text></>} solutionHash="5a50a3896cabc2c59c52a1307fcf825b83d83e0b66d2f10888ee8cd77e05fc53" hints={["Try inspecting a normal word doc", "What happens when you XOR null byte?", "At the beginning of each docx file lie two letters"]} files={[{name: "03.docx", path: "03.docx"}]} />
      <Challenge title="04 The safe" content={<><Text>A valued professor died in a tragic accident and all his research with him. He stored everything in a safe with 5 number combination. You found this note on his desk. Can you solve the code?</Text>
      <Code><div style={{wordWrap: 'break-word'}}>gamma - 529e9e0beb5f85d1f132917c1a09860c</div></Code>
      <Code><div style={{wordWrap: 'break-word'}}>alpha - 413af0de1f97a2155acf2b8b26ab36e2</div></Code>
      <Code><div style={{wordWrap: 'break-word'}}>epsilon - 0f82d86afa0f5dc965c5c15aca58dcfb</div></Code>
      <Code><div style={{wordWrap: 'break-word'}}>delta - bc21e6484530fc9d0313cb816b733396</div></Code>
      <Code><div style={{wordWrap: 'break-word'}}>beta - 960df6d77e65cd185ca4f3501db634eb</div></Code>
      <Text>Note: For correctness check the code should be divisible by 17 and when you add 71 it should become a palindrome (read the same from left and right)</Text><Text>Flag is the code, written in numerical form: [0-9]{'{'}5{'}'}</Text></>} solutionHash="03c35e2ac31bcc3af85c3f1a956f986a7c22035a9ae1651e67a83d671e205391" hints={["Whip out the crackstation", "Sort the numbers"]} />
      <Challenge title="05 Long live Gaius Iulius" content={<><Text>A famous latin phrase hides in this text.</Text><Code><div style={{wordWrap: 'break-word'}}>HWWXEUXWH</div></Code><Text>Flag is the decoded phrase, as is: [A-Z]{'{'}9{'}'}</Text></>} solutionHash="f14857ad3e667f08fed69e6daa2c819e5042f54b3ea18b7c96bd8c4ab240c75c" hints={["Perhaps the name of the challange could be a clue", "Very small keyspace"]} />
      <Challenge title="06 Not quite enigma" content={<><Text>The following has been encrypted with XOR, all we know is the enemy always ends their message with 'Heil Hitler!' and starts their key with 'NO'</Text><Code><div style={{wordWrap: 'break-word'}}>1a272c3d692a28323d2e222b692e3e612129653b3d2a22323a6f2c2339283f352f21262b65673e353c202b29692223223c36353a202823613c2a343b203528256f454f0c253228232b3d37272c346d203c2a653c2c23634b1e2621292c2823326e2e372b692022372b3d282b27336d253c202b2b3a694700203665292035216139272a6e3a2f22363d6f2c203d223f243d3b65272767342e3b6f2c3d692623612f2820203d6722276e3b2d2b693439203a2a696e25222c372b6f31262c672e2e3b21313c30672c326e3c2a2127672c326e3f2a3d3a2e2f2d2b6e4f2825262a3a177f30110a73231e1d3b767a251809342d2470110f357d2c111b2d7d161738237f26261119733f2a33454f0f27236d203d6f24223e26343244072027256705283a23203c68</div></Code><Text>Flag is in format: flag{'{'}[A-Za-z0-9]*{'}'}</Text></>} solutionHash="72cb1c613d5407b471f322c44e57b994aa1945cf0cd6787b442b8c69260c0a4f" hints={["Known plaintext placed at the END"]} />
      <Challenge title="07 Fact Or Eyes" content={<><Text>How about some RSA values?</Text>
      <Code><div style={{wordWrap: 'break-word'}}>e=65537</div></Code>
      <Code><div style={{wordWrap: 'break-word'}}>n=71176441092066411625367601667192399255165349695931</div></Code>
      <Code><div style={{wordWrap: 'break-word'}}>c=29498414316977244474057002469181107573714090746642</div></Code>
      <Text>Flag is in format: flag{'{'}[A-Za-z0-9]*{'}'}</Text></>} solutionHash="f22a4e255074c6f66e24fc1cd0874489ce4c4d5070c899e4848e8d8484b845b6" hints={["If you read the name, it spells factorize", "factordb", "Calculate private key (or d)"]} />
      <Challenge title="08 Lord Playfair sends his regards" content={<><Text>Oi, bruv, here I've got a message for you.</Text><Text>The key you say? Well how about VDA's ... ehm, how do they call it ... "datová schránka"?</Text><Code><div style={{wordWrap: 'break-word'}}>UGZ AHFH KX WNA VPBX LKMHBVO RATTD</div></Code></>} solutionHash="a55482cad424ca4041b2282748d687ec6c557ef0e716032a6de45851d97e42a1" hints={["Bruv you blind? Read the title of the challenge", "The key is only the letters bruv (ignore numbers)"]} />
      <Challenge title="09 CoolCustomCrypto" content={<><Text>Welcome to CCC!</Text><Text>We offer a variety of safe and Cool Cryptography solutions! Our solutions are 100% Safe and 100% Custom. Here we believe it is not that hard to make a cipher, what could go wrong after all? If you are interested, you can try our demo encryptor.</Text><Text>Flag is in format: flag{'{'}[A-Za-z0-9]*{'}'}</Text></>} solutionHash="4d1475b1ad0063bc655be29fd458f692685727bf7aa6ce8730c77d7e7fde10f8" hints={["A cipher should need a key", "What is happening to the first character of the input?"]} files={[{name: "09.py", path: "09.py"}]} />
      <Challenge title="10 CoolCustomCrypto part 2" content={<><Text>Note: I recommend solving this challenge AFTER chal no. 09</Text><Text>Good morning, afternoon and evening customers of CCC</Text><Text>We are writing to you to aplogogise for issues with our demo. As many of you pointed out, it is not even encryption. This time we learned and we are here to offer you our fixed demo, featuring a strong key!</Text><Text>Flag is in format: flag{'{'}[A-Za-z0-9]*{'}'}</Text></>} solutionHash="60544876647807bd1c99de5790991d3bce274757ac65545e3b81641361be455f" hints={["It is once again about the first character", "Bet you can guess the first character of plaintext", "Once you get the key, just write a decryptor"]} files={[{name: "10.py", path: "10.py"}]} />
    </Stack>
  );
}

export default MainPage;