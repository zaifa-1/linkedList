# linkedList
 The `Node` class encapsulates the data and reference to the next node, enabling the linked list to chain multiple nodes together to create a dynamic and flexible data structure.

The `LinkedList` class represents a collection of nodes that are linked together in a linear sequence. It's a fundamental data structure where each node contains data and a reference to the next node in the list. 

1. constructor(): Initializes the linked list with the head and tail set to null and the length to 0.

2. prepend(value): Inserts a new node with the given value at the beginning of the linked list. If the list is empty, it sets both the head and tail to the new node.

3. append(value): Adds a new node with the given value at the end of the linked list. If the list is empty, it calls the prepend(value) function to handle the case.

4. size(): Returns the number of nodes in the linked list (i.e., its length).

5. listHead(): Returns the value of the head node in the linked list. If the list is empty, it returns null.

6. listTail(): Returns the value of the tail node in the linked list. If the list is empty, it returns null.

7. at(index): Returns the value of the node at the specified index in the linked list. If the index is out of bounds, it returns null.

8. pop(): Removes the last node from the linked list and returns the removed node. If the list is empty, it does nothing and returns null.

9. contains(value): Checks if the linked list contains a node with the specified value. If found, it returns true; otherwise, it returns false.

10. find(value): Searches for the first occurrence of the specified value in the linked list and returns its index. If the value is not found, it returns null.

11. toString(): Creates a human-readable string representation of the linked list. It returns a string showing all the values in the linked list, separated by "->". If the list is empty, it returns null.