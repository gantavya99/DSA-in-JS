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
function reverse(node){
    var prev=null;
    var current=node;
    var next=null;
    while(current!=null){
        next=current.next;
        current.next=prev;
        prev=current;
        current=next;
    }
   
    return prev;
}
var head =new Node(54);
head.next=new Node(48);
head.next.next=new Node(79);
printList(head);
