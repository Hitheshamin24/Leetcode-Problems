/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next || k==0) return head
    let length=0
    let temp=head
    let prev=head
    while(temp){
        prev=temp
        temp=temp.next
        length++
    }
    k=k%length
    if(k===0) return head
    let stepsToNextNode=length-k
    let previous=null
    let current=head
    while(stepsToNextNode>0){
        previous=current
        current=current.next
        stepsToNextNode--
    }
    previous.next=null
    prev.next=head
    return current

};