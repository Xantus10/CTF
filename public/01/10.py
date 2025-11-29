# 568412371625 21 16 11 37 2 187 228 30 16 210 232 42 20 242 5 232 218 216 215 26 235 217 17 226 213 242 255 227 168 226 37 234 238 47 52
inp = input('Pass your input: ')
key = int(input('Key (number): '))


enc = ''


enc += str(ord(inp[0]) + key)
for i in range(1, len(inp)):
  first = ord(inp[i-1])
  second = ord(inp[i])
  e = first + second + key
  e = e % 256
  enc += ' '
  enc += str(e)

print(f'Your encrypted output: {enc}')
