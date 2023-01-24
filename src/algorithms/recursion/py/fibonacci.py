'''
Fibonnaci iterative
'''

def fibonnaci(num):
    if num <=2:
        return 1
    
    res = 1
    curr = 1
    prev = 0
    while res < num:
        next = prev + curr
        prev = curr
        curr = next 
        res +=1
    return res


fibonnaci(10)



'''
Fibonnaci recursive
'''

def fibonnaciRecursive(num):
    if num <= 1:
        return num
    return fibonnaci(num - 1) + fibonnaci(num -2)

fibonnaciRecursive(10)