'''
    Factorial iterative
'''
def factorial(num):
    res = 0
    if num <=2:
        return 2

    for i in range(num):
        i += 1
        res *= i
    return res

print(factorial(10))   #-> Output = 362880

'''
Factorial Recursive
'''
def factorialRecursive(num):
    if num <= 1:
        return num

    return num * factorial(num-1)

print(factorialRecursive(10)) #-> Output = 362880