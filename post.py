import os
import sys
import time
from subprocess import Popen, PIPE

os.system("export GOPATH=$HOME/go")
os.system("export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin")
os.system("source $HOME/.zshrc")
try:
    name, image, owner, combined, location, author = sys.argv[1:]
except Exception as e:
    print("Error occured:", e)

content = None
new_content = None
names = set()

with Popen(f"questd tx quest create-puzzle {name} {image} {owner} {combined} {location} --from {author}".split(" "),
            stdin=PIPE, stdout=PIPE, universal_newlines=True) as p:
    answer = 'y'
    print(answer, file=p.stdin) # provide answer
    p.stdin.flush()

os.system("questd q quest puzzles")