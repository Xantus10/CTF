import { Text, /*Code, */Stack } from "@mantine/core";
import MultipartChallenge from "../Components/MultipartChallenge";

function CMITRE() {

  return (
    <Stack p={20} gap={10}>
      <MultipartChallenge title="Reconnaisance - SMTP" content={<><Text>First the attacker focused on our SMTP server (open to the internet). In smtp.csv you have the logs from the server, see what you can find in them.</Text></>} hints={['What does VRFY command do?', 'The first technique is the scan', 'The second describes what the attacker is gathering']} files={[{name: 'smtp.csv', path: 'mitre/smtp.csv'}]}
      parts={[
        {title: 'Enter IP of a user that connected from a laptop', solutionHash: '75206179fb993de1c85999d4b57805c5b9458260da4640eea6dc8fda2d3b6f74'},
        {title: 'Enter password of lucia.vary@vulncomp.com', solutionHash: 'bb02146fca5b3e437a1e83da65b8dcc95fb00ee8cbcc9605d5b4828660f17f61'},
        {title: 'Which IP address tried to enumerate accounts', solutionHash: '3696668f6f827407e5ff469091d3da2449de15b914b45b1afe87aeb5436f3ecb'},
        {title: 'This behavior corresponds to one MITRE technique and one subtechnique, enter them like this: TXXXX;TXXXX.XXX', solutionHash: '94f5021d8ba48f79cd0eecb47bf164d52adc456e5c335abc4ebae98f0123e725'}
      ]} />
      <MultipartChallenge title="Initial Access - Email" content={<><Text>After recon, the attacker sent multiple phishing emails which contained malicious content. One of these is the one in the file fake.eml</Text></>} files={[{name: 'fake.eml', path: 'mitre/fake.eml'}]} 
      parts={[
        {title: 'What is the displayed "From" address in the email?', solutionHash: '288bf0c2227716cce1ea60d8b23d8016da2033f5467ca8a5147bcb3827fd6ae2'},
        {title: 'What is the real attacker email address?', solutionHash: '742c600d416c796bb8a4930b441713423fc168791e0e6dfc00414e67566ebc2a'},
        {title: 'What is the name of the malicious attachment?', solutionHash: '5982a6b86b99c6303357c99393ad5c90a69b21506b200ecaa9a4952c4a70d9ed'},
        {title: 'What mitre subtechnique matches this Initial Access attempt? (TXXXX.XXX)', solutionHash: '93cb3ab7baff6e215961332a7f9aef85cb5a22704e006e6a19fbf3b9017c03da'}
      ]} />
      <MultipartChallenge title="Execution - HTML application" content={<><Text>After downloading and unzipping the attachment the user continued to make mistakes.</Text><Text>Note: You need to extract the attachment on your own.</Text></>} 
      parts={[
        {title: 'What is the extension of the file? (enter .XXX)', solutionHash: '0303a6035cc5c4585cf6b031dd5426e54290bdff4a77a0114554c5a80522eeb0'},
        {title: 'What executable is going to execute this file (on windows; enter X.exe)', solutionHash: '1c753a7f12afb9e4ad34399cd85f769ee57836bd9d4f074be5c611e43e45ac56'},
        {title: 'Which mitre subtechnique symbolises the fact that user executed the file? (enter TXXXX.XXX)', solutionHash: 'a2f62dddec5a008f68df4e27831d4ff86460b8d0340114a269e0d6c8b07e0ec1'},
        {title: 'Which mitre subtechnique symbolises the language the executable malware is written in? (enter TXXXX.XXX)', solutionHash: 'bb6c1417746337f8979ae8582292bb55ef659be8c1b1cfaa93516a9627321843'},
        {title: 'What is the name of the second malware phase file? (The local filename)', solutionHash: '1e3450b1bbd405570df9827e76955edfef9d53ca9122083dfc8550a730b8494c'},
        {title: 'What program will execute the second phase? (enter X.exe)', solutionHash: 'f307e73a3447b10444e67233700c1aa5ca8e3673dd2f292084bf485583caad6f'}
      ]} />
    </Stack>
  );
}

export default CMITRE;