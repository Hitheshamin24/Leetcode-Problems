/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(!head || !head.next){
        return null
    }

    let slow=head,speed=head
    while(speed && speed.next){
        slow=slow.next
        speed=speed.next.next
    }
    let temp=head
    while(temp.next!=slow){
        temp=temp.next
    }
    temp.next=temp.next.next
    return head;
};