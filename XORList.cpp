/* C/C++ Implementation of Memory 
efficient Doubly Linked List */
#include <stdio.h>
#include <stdlib.h>
#include <inttypes.h>

// Node structure of a memory
// efficient doubly linked list
struct Node
{
	int data;
	struct Node *npx; /* XOR of next and previous node */
};

/* returns XORed value of the node addresses */
struct Node *XOR(struct Node *a, struct Node *b)
{
	return (struct Node *)((uintptr_t)(a) ^ (uintptr_t)(b));
}

/* Insert a node at the begining of the 
XORed linked list and makes the newly 
inserted node as head */
void insertHead(struct Node **head_ref, int data)
{
	// Allocate memory for new node
	struct Node *new_node = (struct Node *)malloc(sizeof(struct Node));
	new_node->data = data;

	/* Since new node is being inserted at the 
	begining, npx of new node will always be 
	XOR of current head and NULL */
	new_node->npx = XOR(*head_ref, NULL);

	/* If linked list is not empty, then npx of 
	current head node will be XOR of new node 
	and node next to current head */
	if (*head_ref != NULL)
	{
		// *(head_ref)->npx is XOR of NULL and next.
		// So if we do XOR of it with NULL, we get next
		struct Node *next = XOR((*head_ref)->npx, NULL);
		(*head_ref)->npx = XOR(new_node, next);
	}

	// Change head
	*head_ref = new_node;
}

void insertEnd(struct Node **head_ref, int data)
{
	// Allocate memory for new node
	struct Node *new_node = (struct Node *)malloc(sizeof(struct Node));
	new_node->data = data;

	struct Node *curr = *head_ref;
	struct Node *next;
	struct Node *prev = NULL;

	// if list is empty, then new node will havev npx of XOR NULL and NULL
	if (*head_ref != NULL) {
		while (curr != NULL) {
			next = XOR(prev, curr->npx);

			prev = curr;
			curr = next;
		}
		// Here prev is the end of the list
		prev->npx = XOR(XOR(prev->npx, NULL), new_node);
		new_node->npx = XOR(prev, NULL);
	}
}
// prints contents of doubly linked
// list in forward direction
void printList(struct Node *head)
{
	struct Node *curr = head;
	struct Node *prev = NULL;
	struct Node *next;

	printf("Following are the nodes of Linked List: \n");

	while (curr != NULL)
	{
		// print current node
		printf("%d ", curr->data);

		// get address of next node: curr->npx is
		// next^prev, so curr->npx^prev will be
		// next^prev^prev which is next
		next = XOR(prev, curr->npx);

		// update prev and curr for next iteration
		prev = curr;
		curr = next;
	}
}

// Driver program to test above functions
int main()
{
	/* Create following Doubly Linked List
	head-->40<-->30<-->20<-->10 */
	struct Node *head = NULL;
	insertHead(&head, 10);
	insertHead(&head, 20);
	insertHead(&head, 30);
	insertHead(&head, 40);
	insertEnd(&head, 4);

	// print the created list
	printList(head);

	return (0);
}
