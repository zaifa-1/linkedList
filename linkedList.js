import Node from './Node'

class LinkedList{
    constructor(){
      this.head= null;
      this.tail= null
      this.length= 0
    }
    prepend(value){
      let listNode= new Node(value, this.head)
      this.head= listNode;
      this.length++
    }
  
    append(value){
      if(this.head === null) return this.prepend(value)
      let listNode= new Node(value, null)
      let current= this.head;
      while(current.next !== null){
        current= current.next
      }
      current.next= listNode
      this.tail= listNode
      this.length++
    }
  
    size(){
      let length=1
      if(this.head === null) return 0
      let current= this.head;
      while(current.next !== null){
        current= current.next
        length++
      }
      return length
    }
  
    listHead(){
      if (this.head === null) return null
      return this.head.value
    }
  
    listTail(){
      if(this.tail === null) return null
      return this.tail.value
    }
  
    at(index){
      if(index < 0 || index >= this.length){
      return null;
      }  
      let current= this.head
      for(let i=0 ; i<index; i++){
        current= current.next;
      }
      return current.value
    }

    pop(){
        let current= this.head;
        for(let i=0 ; i<this.length-2; i++){
          current= current.next
        }
        current.next= null
        this.length--
        return current
      }
  
    contains(value){
      let current= this.head;
      for(let i=0 ; i<this.length; i++){
      if(current.value === value){
        return true
      }
        current= current.next
      }return false
    }
  
    find(value){
      let current= this.head;
      for(let i=0 ; i<this.length; i++){
      if(current.value === value){
        return i
      }
        current= current.next
      }return null
    }
  
    toString(){
      if (this.head === null){
      return null  
      } 
      let current= this.head
      let string= ''
      for(let i=0; i<this.length; i++){
        string+= `${current.value} -> `
        if(current.next === null){
          string+= null
        }
        current= current.next
      }
      return string
    }
    
  }