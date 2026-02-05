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
        {title: 'The attacker\'s actions correspond to one mitre technique (format: TXXXX)', solutionHash: 'a66c2b959ccc076093e1e9d98e45d58385c15a1344318a72a1d2502d597bbf7e'},
        {title: 'The data the attacker targeted have their mitre subtechnique (format: TXXXX.XXX)', solutionHash: 'c0a9e1102affc28461b11b8c33ad970494051d328b9b8f9e7479651373ec63be'},
      ]} />
      <MultipartChallenge title="Initial Access - Email" content={<><Text>After recon, the attacker sent multiple phishing emails which contained malicious content. One of these is the one in the file fake.eml</Text></>} files={[{name: 'fake.eml', path: 'mitre/fake.eml'}]} 
      parts={[
        {title: 'What is the displayed "From" address in the email?', solutionHash: '288bf0c2227716cce1ea60d8b23d8016da2033f5467ca8a5147bcb3827fd6ae2'},
        {title: 'What is the real attacker email address?', solutionHash: '742c600d416c796bb8a4930b441713423fc168791e0e6dfc00414e67566ebc2a'},
        {title: 'What is the name of the malicious attachment?', solutionHash: '5982a6b86b99c6303357c99393ad5c90a69b21506b200ecaa9a4952c4a70d9ed'},
        {title: 'What mitre subtechnique matches this Initial Access attempt? (format: TXXXX.XXX)', solutionHash: '93cb3ab7baff6e215961332a7f9aef85cb5a22704e006e6a19fbf3b9017c03da'}
      ]} />
      <MultipartChallenge title="Execution - HTML application" content={<><Text>After downloading and unzipping the attachment the user continued to make mistakes.</Text><Text>Note: You need to extract the attachment on your own.</Text></>} 
      parts={[
        {title: 'What is the extension of the file? (format: .XXX)', solutionHash: '0303a6035cc5c4585cf6b031dd5426e54290bdff4a77a0114554c5a80522eeb0'},
        {title: 'What executable is going to execute this file (on windows; format: name.exe)', solutionHash: '1c753a7f12afb9e4ad34399cd85f769ee57836bd9d4f074be5c611e43e45ac56'},
        {title: 'Which mitre subtechnique symbolises the fact that user executed the file? (format: TXXXX.XXX)', solutionHash: 'a2f62dddec5a008f68df4e27831d4ff86460b8d0340114a269e0d6c8b07e0ec1'},
        {title: 'Which mitre subtechnique symbolises the language the executable malware is written in? (format: TXXXX.XXX)', solutionHash: 'bb6c1417746337f8979ae8582292bb55ef659be8c1b1cfaa93516a9627321843'},
        {title: 'What is the name of the second malware phase file? (The local filename)', solutionHash: '1e3450b1bbd405570df9827e76955edfef9d53ca9122083dfc8550a730b8494c'},
        {title: 'What program will execute the second phase? (format: name.exe)', solutionHash: 'f307e73a3447b10444e67233700c1aa5ca8e3673dd2f292084bf485583caad6f'}
      ]} />
      <MultipartChallenge title="Persistence - Windows" content={<><Text>Second phase of the malware serves as the final malware and also does some setup for itself - among others, persistence techniques.</Text><Text>Note: You need to request the second phase yourselves, utilize the download url in previous file.</Text></>}
      parts={[
        {title: 'What is the registry key name (not path) the malware creates?', solutionHash: '83071950bb4108899e6b7e02510838d61867bf9bba98fe3f7056d24c61614c05'},
        {title: 'This sort of persistence mechanism maps to a mitre subtechnique (format: TXXXX.XXX)', solutionHash: 'b442ac9026d19b39de7e5dc831febc438055142185c335f847e77ee4699ec15e'},
        {title: 'As a backup the script also creates a user account for persistence. Enter its name and password (separated by :, ie. username:password)', solutionHash: 'e5934d1f0ddae0a3b60c38594fdcc0573a39ccf3879b167c94df9bf16305d7b4'},
        {title: 'The account creation also maps to a mitre subtechnique (format: TXXXX.XXX)', solutionHash: 'a4a459ef8aae26dd8a05c636ac673eb6e6cd8c7a7076e37d6038e34b1de0c019'}
      ]} />
      <MultipartChallenge title="Discovery - User accounts and AV discovery" content={<><Text>One of the attackers first actions is discovery, to gather information on his surroundings. He created a special command+function in the malware for it.</Text></>} hints={["Check out the ComDisc function"]}
      parts={[
        {title: 'What PS cmdlet does the attacker use to get list of local user accounts (format: xxx-xxxxxxxxx)', solutionHash: 'baacfaccc93f1719ef2081c305f843f73c30c4be5f5ebb14047f4ea617030ee0'},
        {title: 'This of course maps to a mitre subtechnique (format: TXXXX.XXX)', solutionHash: '2a01f56787d8c9ea3a2c8668d5429f337fc836eef1b2c2d2db81e7c1731f028a'},
        {title: 'The malware also checks for the presence of an antivirus executable. Which AV program is it? (The answer is a single 9letter word; all lowercase)', solutionHash: '4b6afdd16374f5a993eec1020ae1af0003087fc801e963f7a8b2b6acfa8c8951'},
        {title: 'And what would the mitre attack subtechnique for that be? (format: TXXXX.XXX; Focus on the antivirus SW part)', solutionHash: '030841a5fca6f0d2a083eaaa0dc1c804f82f71e019e40be5c4f451a7f0ab1e56'}
      ]} />
    </Stack>
  );
}

export default CMITRE;