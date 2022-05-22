import math, time

# Simple arithmetic functions

def add(op1, op2):
    if op1 is None:
        return "Error: First operand required"
    if op2 is None:
        return "Error: Second operand required"
    return op1 + op2

def subtract(op1, op2):
    if op1 is None:
        return "Error: First operand required"
    if op2 is None:
        return "Error: Second operand required"
    return op1 - op2

def multiply(op1, op2):
    if op1 is None:
        return "Error: First operand required"
    if op2 is None:
        return "Error: Second operand required"
    return op1* op2

def divide(op1, op2):
    if op1 is None:
        return "Error: First operand required"
    if op2 is None:
        return "Error: Second operand required"
    if op2 == 0:
        return "Error: Cannot divide by 0"
        
    return op1/ op2

# Trig functions

def sin(op1):
    return math.sin(op1)

def cos(op1):
    return math.cos(op1)

def tan(op1):
    if math.degrees(op1) == 90:
        return "Error: Invalid operand. Cannot calculate tan(90)"
    return math.tan(op1)

# Inverse trig functions

def asin(op1):
    if op1 > 1 or op1 < -1:
        return "Error: Invalid operand"
    return math.asin(op1)

def acos(op1):
    if op1 > 1 or op1 < -1:
        return "Error: Invalid operand"
        
    return math.acos(op1)

def atan(op1):
    return math.atan(op1)


# parsing text file
while True:
    time.sleep(1)
    
    
    with open('text.txt','r+') as f:
        data = f.read()
        op1 = None
        op2 = None
        
        # Find operation and operand(s)
        data_chunks = data.split(', ')
        if len(data_chunks) == 1:
            # print('DATA HAS ONE VALUE')
            continue
        operation = data_chunks[0].lower()
        try: 
            op1 = float(data_chunks[1])
        except ValueError:
            op1 = None
        
        if len(data_chunks) == 3:
            try:
                op2 = float(data_chunks[2])
            except ValueError:
                op2 = None
            
        # send operands to appropriate functions

        if operation == 'add':
            result = add(op1, op2)
        elif operation == 'subtract':
            result = subtract(op1, op2)
        elif operation == 'multiply':
            result = multiply(op1, op2)
        elif operation == 'divide':
            result = divide(op1,op2)
            
        # Trig functions
        elif operation == 'sin':
            if op1 is None:
                result = "Error: First operand required"
            else:    
                result = sin(math.radians(op1))
                
        elif operation == 'cos':
            if op1 is None:
                result = "Error: First operand required"
            else:
                result = cos(math.radians(op1))

        elif operation == 'tan':
            if op1 is None:
                result = "Error: First operand required"
            else:
                result = tan(math.radians(op1))
        elif operation == 'asin':
            if op1 is None:
                result = "Error: First operand required"
            else:
                result = math.degrees(asin(op1))

        elif operation == 'acos':
            if op1 is None:
                result = "Error: First operand required"
            else:
                result = math.degrees(acos(op1))

        elif operation == 'atan':
            if op1 is None:
                result = "Error: First operand required"
            else:
                result = math.degrees(atan(op1))
        
        # Check for incorrect function call
        else:
            result = 'Error: Invalid operation'
        # Update text file with result
        f.truncate(0)
        f.seek(0)
        f.write(str(result))