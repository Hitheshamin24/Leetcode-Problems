/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy=new ListNode(0,head)
    let length=0
    let temp=head
    while(temp){
        length++
        temp=temp.next
    }
    let target=length-n
    let prev=dummy
    for(let i=0;i<target;i++){
        prev=prev.next
    }
    prev.next=prev.next.next
    return dummy.next
};