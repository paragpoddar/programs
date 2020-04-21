class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtFirst(data) {
    this.head = new Node(data, this.head);
  }

  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      //   console.log("current -> ", current);
      current = current.next;
    }
    // console.log("head-> ", this.head);
  }

  removeAt(index) {
    let current = this.head;
    let count = 0;
    let previous;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
      console.log("previous-> ", previous);
    }
    console.log("head-> ", this.head);
  }
}

let ll = new LinkedList();

ll.insertAtFirst(11);
ll.insertAtFirst(12);
ll.insertAtFirst(13);
ll.insertAtFirst(14);

// console.log(ll);
ll.removeAt(2);
ll.printListData();
