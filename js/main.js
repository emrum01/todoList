
new Vue({
    el: '#app',
    data: {
        todos:[],
        newItem:'',
        count:0,
        done:[]
    },
    methods:{
        addItem:function(e,index){
            this.todos.push(this.newItem);
            this.newItem='';
            this.done[index]=false;
        },
        //todo削除
        deleteItem:function(index){
            
                if(window.confirm('い　い　ん　で　す　ね　？')){
                    this.todos.splice(index,1); //該当のインデックスの要素をリストから削除
                }

        },
        doneItem:function(index){
                this.count++;
                this.done[index]=true;
        }
        
    }
});