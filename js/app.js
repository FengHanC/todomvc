;(function (window) {
	'use strict';
var vm=new Vue({
	el:'#app',
	data:{
		lists:[{id:'1',title:'看书',checked:'true'},{id:'2',title:'打代码',checked:'false'}],
		edit:null,
		loutext:"all"
	},
	computed:{
		lnum:{
			get(){
				var rz=0;
				var s=this.lists.length;
				for(var i=0;i<this.lists.length;i++){
						if(this.lists[i].checked)
						{
							rz++
						}
				}
				return s-rz;
			}
		},
		checkedAll:{
			get(){
				return this.lists.every(t=>t.checked);
			},
			set(){
				const checked = !this.checkedAll
				this.lists.forEach(item => {
				item.checked = checked;
			})
			}
		}
	},
	methods:{
		sbt:function(e){
			const textvalue=e.target.value.trim();
			const lists=this.lists;
			if(!textvalue.length)
			{
				return
			}
			lists.push({
				id:lists.length?lists[lists.length-1].id+1:1,
				title:textvalue,
				checked:false
			})
		},
		dbedit:function(item){
			this.edit=item;
		},
		 //保存编辑任务，敲回车保存
		 handleSaveEdit(item,index,e){
			//0.注册绑定事件处理函数
			//1.获取文本框的数据
			//2.数据校验
			//      如果数据为空，则删除文本框
			//      否则保存编辑
			//console.log(e.target.value)
			const value = e.target.value
			if(!value.length){//若为空，则删除
				this.item.splice(index,1)
			}else{    //保存
				item.title = value 
				this.edit = null//取消样式
			}

		},

		//按下esc键取消编辑，不保存
		handleCanceEditEsc(){
			//取消样式即可
			this.edit = null
		},
		rmli:function(index){
			this.lists.splice(index,1);
		},
		rem:function(){
			for(var i=0; i<this.lists.length;i++){
				if(this.lists[i].checked){
					this.lists.splice(i,1);
					i--;
				}
			}
		}
	}
})
})(window);
	