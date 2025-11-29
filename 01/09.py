# 102 210 205 200 226 201 129 169 169 165 209 150 169 235 216 211 164 143 163 116 143 184 137 165 231 209 143 167 229 205 162 181 235 233 167 166 236
inp = input('Pass your input: ')


enc = ''


enc += str(ord(inp[0]))
for i in range(1, len(inp)):
  first = ord(inp[i-1])
  second = ord(inp[i])
  e = first + second
  e = e % 256
  enc += ' '
  enc += str(e)

print(f'Your encrypted output: {enc}')
