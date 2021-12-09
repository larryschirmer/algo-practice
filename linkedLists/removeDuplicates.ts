export {};

type LinkedList = { id: string; next: LinkedList | null; value: number };

const removeDuplicates = (linkedList: LinkedList) => {
  let pointer: LinkedList | null = linkedList;

  while (pointer !== null) {
    pointer.id;
    pointer.value;
    pointer.next.value;

    while (pointer.value === pointer.next?.value) {
      pointer.next = pointer.next.next;
      pointer.next?.value;
    }
    pointer = pointer.next;
  }

  return linkedList;
};

let list = {
  id: '1',
  value: 1,
  next: {
    id: '1-2',
    value: 1,
    next: {
      id: '1-3',
      value: 1,
      next: {
        id: '2',
        value: 3,
        next: {
          id: '3',
          value: 4,
          next: {
            id: '3-2',
            value: 4,
            next: {
              id: '3-3',
              value: 4,
              next: {
                id: '4',
                value: 5,
                next: {
                  id: '5',
                  value: 6,
                  next: {
                    id: '5-2',
                    value: 6,
                    next: null,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

removeDuplicates(list); //?
