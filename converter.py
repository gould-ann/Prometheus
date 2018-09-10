f = open("asdf.txt","r")

dic = {}
for line in f:
	dic[line.split(" ")[0]] = " ".join(line.replace("\n","").split(" ")[1:])

print dic