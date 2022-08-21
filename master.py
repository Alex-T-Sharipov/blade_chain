import sys, os
import subprocess
from subprocess import PIPE
import scripts

# Terminal output
# Puzzle:
# - combined: combined
#   creator: quest1mq55kdx9qvwuyhzr2nmjxysscqqs9khcnuz9hh
#   id: "0"
#   image: umage
#   location: location
#   name: name
#   owner: owner

output = subprocess.run(args="python3 ../post.py name2 imm4ge 4ow4ner co5mbi5ned lo6cat62ion alice".split(" "), stdin=PIPE, stdout=PIPE).stdout.decode("utf-8")
out_array = []
dict_to_append = {}

for line in output.split("\n"):
    # print(dict_to_append)
    if len(dict_to_append) == 7:
        out_array.append(dict_to_append)
        dict_to_append = {}
    if "combined" in line: 
        dict_to_append.update({"combined": line[line.index(":") + 2:]})
        continue
    elif "creator" in line:
        dict_to_append.update({"creator": line[line.index(":") + 2:]})
        continue
    elif "id" in line:
        dict_to_append.update({"id": int(line[line.index('"') + 1 :-1 ]) })
        continue
    elif "image" in line:
        dict_to_append.update({"image": line[line.index(":") + 2:]})
        continue
    elif "location" in line:
        dict_to_append.update({"location": line[line.index(":") + 2:]})
        continue
    elif "name" in line:
        dict_to_append.update({"name": line[line.index(":") + 2:]})
        continue
    elif "owner" in line:
        dict_to_append.update({"owner": line[line.index(":") + 2:]})
        continue
if len(dict_to_append) == 7:
    out_array.append(dict_to_append)

print(out_array)

# print(scripts.nfts_owned(out_array, "4ow4ner"))
# print(len(scripts.nfts_owned(out_array, "4ow4ner")))