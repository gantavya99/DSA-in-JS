class Node{
    constructor(val){
        this.data=val;
        this.next=null;
    }
}
function printList(node){
    while(node!=null){
        console.log(node.data + " ");
        node=node.next;
    }
}
function reverse(head){
    var prev=null;
    var current=head;
    var next=null;
    while(current!=null){
       next=current.next;
       current.next=prev;
       prev=current;
       current=next;  
    }
    head=prev;
    return node;
}
var head =new Node(54);
head.next=new Node(48);
head.next.next=new Node(79);
printList(head);
