# https://www.hackerrank.com/challenges/python-tuples/problem

import builtins

if __name__ == '__main__':
    n = int(input())
    # integer_list = list(map(int, input().split()))
    integer_list=[int(x) for x in input().split()]  # [1,2,3,4]
    t = tuple(integer_list)
    print(hash(t))
    
    