# https://www.hackerrank.com/challenges/python-lists/problem

if __name__ == '__main__':
    N = int(input())
    list = []
    for i in range(N):
        command = input()
        # print(type(command))   # <class 'str'>
        if command.startswith("insert"):
            splittedCommand = command.split(" ")
            list.insert(int(splittedCommand[1]), int(splittedCommand[2]))
        if command == "print":
            print(list)
        if command.startswith("remove"):
            list.remove(int(command.split(" ")[1]))
        if command.startswith("append"):
            list.append(int(command.split(" ")[1]))
        if command == "sort":
            list.sort()
        if command == "pop":
            list.pop()
        if command == "reverse":
            list.reverse()
