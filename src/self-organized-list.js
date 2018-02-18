class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count=0;
    }

    insert(data) {
        if(this.count===0){
            this.head=new Node(data);
            this.tail=this.head;
            this.head.hext=this.tail;

        }
        if(this.count===1){
            this.tail=new Node(data);
            this.head.next=this.tail;
            this.tail.prev=this.head;
        }
        if(this.count>1){
        var buff=this.tail;
        this.tail=new Node(data);
        this.head.next=buff;
        buff.next=this.tail;
        buff.prev=this.head;
        this.tail.prev=buff;}
        this.count++;
    }

    size() {
    return this.count;
    }

    at(index) {
    var arr = this.toArray();
    if(this.count===0||arr[index]===undefined){
        return null;
    }
    return arr[index];
    }

    findNode(data) {
        var ref=this.head;
        for(let i=0;i<this.size();i++){
            if(ref.data===data)
            {
                return ref;
            }
            ref=ref.next;
        }
        return null;
    }

    toArray() {
        if(this.count===0)
        {return [];}
        var arr=[];
        var ref=this.head;
        for(let i=0;i<this.size();i++){
            arr.push(ref.data);
            ref=ref.next;
        }
        return arr;
    }

    removeAt(index) {
        this.count--;
        if(this.count===0){
            if(index===0){
                this.head.next=null;
                this.tail=null;
                this.head=null;
            }
            if(index===1){
                this.tail.prev=null;
                this.tail=null;
                this.head=null;
            }


        }
       var ref1=this.head;
        var node=null;
        for(let i=0;i<this.size();i++){
            if(i===index){
                node=ref1;
                if(this.count===1){
                    if(node===this.head){
                        this.tail=this.head;
                        this.head.prev=null;
                        this.tail.next=null;
                    }
                    if(node===this.tail){
                        this.head=this.tail;
                        this.head.prev=null;
                        this.tail.next=null;

                    }
                }
                if(node===this.head){
                    this.head=this.head.next;
                    this.head.prev=null;
                }
                if(node===this.tail){
                    this.tail=this.tail.prev;
                    this.tail.next=null;
                }
                var ref=[node.next,node.prev];
                ref[0].prev=ref[1];
                if(ref[1]){
                    ref[1].next=ref[0];
                }

                break;
            }
            ref1=ref1.next;
        }

    }





    moveToFront(node) {
        var ref=[node.next,node.prev];
        node.prev=null;
        node.next=this.head;
        var buff=this.head;
        this.head=node;
        buff.next=ref[0];
        buff.prev=ref[1];

    }

    reorganize(data) {

    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
