// $(function(){

// 	// Js問一
//   $("#submit-btn").on('click', function(){
// 		form = $("#testForm").serializeArray();
// 		$.each(form, function(i, item){

// 			// Js問一
// 			// console.log('name', item.name);
// 			// console.log('value', item.value);

// 			// EX1
// 			if( item.value == '' ){
// 				alert('空白の箇所があります ('+item.name+')');
// 				form = '';
// 				return false;
// 			}

// 		})
		
// 		// EX1
// 		if( form !== '' ){
// 			// Ajax
// 			$.ajax({
// 				type: 'post',
// 				url: 'create',
// 				data: form
// 			}).done(function(data){
// 				$("#testList").append(data)
// 			});
// 		}
		

// 	});

// 	// Js問二
// 	$("#temp-btn").on('click', function(){
// 		$("#familyName").val('トランス');
// 		$("#firstName").val('太郎');
// 		$("#e-mail").val('trans@gmail.com');
// 		$("#female").prop('checked', true);
// 		$("#age").val('20');
// 		$("#note").val('test');
// 	});

// 	// Js問三
// 	$("#disabled-btn").on('click', function(){
// 		$("#familyName, #firstName, #e-mail, #male, #female, #age, #note, #submit-btn, #clear-btn, #temp-btn").prop('disabled', disabled_flag);
// 		disabled_flag = !disabled_flag;
// 		// EX3
// 		if( disabled_flag ){
// 			$(this).text('操作不能').removeClass('btn-info').addClass('btn-danger');
// 		} else {
// 			$(this).text('解除').removeClass('btn-danger').addClass('btn-info');
// 		}
// 	});

// 	// Ajax
// 	$("#testList").on('click', '.list', function(){
// 		$(this).children('.note').toggle(400);		
// 	});

// 	// EX2
// 	$("#testList").on('click', '.list-clear', function(){		
// 		$(this).closest('li').empty();
// 	});
// });

// var disabled_flag = true;


// EX4
var _0x466c=['.note','#familyName,\x20#firstName,\x20#e-mail,\x20#male,\x20#female,\x20#age,\x20#note,\x20#submit-btn,\x20#clear-btn,\x20#temp-btn','each','#familyName','post','click','text','#note','btn-info','#firstName','trans@gmail.com','.list-clear','append','toggle','.list','val','空白の箇所があります\x20(','#testList','#disabled-btn','#submit-btn','btn-danger','addClass','#testForm','操作不能','#temp-btn','closest','#female','test','create','removeClass','#age','#e-mail','トランス','ajax','prop','children'];(function(_0x10a5c0,_0x466c05){var _0x3c3c3c=function(_0x2918dd){while(--_0x2918dd){_0x10a5c0['push'](_0x10a5c0['shift']());}};_0x3c3c3c(++_0x466c05);}(_0x466c,0xa9));var _0x3c3c=function(_0x10a5c0,_0x466c05){_0x10a5c0=_0x10a5c0-0x0;var _0x3c3c3c=_0x466c[_0x10a5c0];return _0x3c3c3c;};$(function(){$(_0x3c3c('0x1e'))['on'](_0x3c3c('0x10'),function(){form=$(_0x3c3c('0x21'))['serializeArray']();$[_0x3c3c('0xd')](form,function(_0x14b5b4,_0x1af55f){if(_0x1af55f['value']==''){alert(_0x3c3c('0x1b')+_0x1af55f['name']+')');form='';return![];}});if(form!==''){$[_0x3c3c('0x8')]({'type':_0x3c3c('0xf'),'url':_0x3c3c('0x3'),'data':form})['done'](function(_0x5d6e0d){$(_0x3c3c('0x1c'))[_0x3c3c('0x17')](_0x5d6e0d);});}});$(_0x3c3c('0x23'))['on'](_0x3c3c('0x10'),function(){$(_0x3c3c('0xe'))[_0x3c3c('0x1a')](_0x3c3c('0x7'));$(_0x3c3c('0x14'))[_0x3c3c('0x1a')]('太郎');$(_0x3c3c('0x6'))['val'](_0x3c3c('0x15'));$(_0x3c3c('0x1'))['prop']('checked',!![]);$(_0x3c3c('0x5'))[_0x3c3c('0x1a')]('20');$(_0x3c3c('0x12'))['val'](_0x3c3c('0x2'));});$(_0x3c3c('0x1d'))['on'](_0x3c3c('0x10'),function(){$(_0x3c3c('0xc'))[_0x3c3c('0x9')]('disabled',disabled_flag);disabled_flag=!disabled_flag;if(disabled_flag){$(this)['text'](_0x3c3c('0x22'))[_0x3c3c('0x4')](_0x3c3c('0x13'))[_0x3c3c('0x20')](_0x3c3c('0x1f'));}else{$(this)[_0x3c3c('0x11')]('解除')[_0x3c3c('0x4')](_0x3c3c('0x1f'))['addClass'](_0x3c3c('0x13'));}});$(_0x3c3c('0x1c'))['on'](_0x3c3c('0x10'),_0x3c3c('0x19'),function(){$(this)[_0x3c3c('0xa')](_0x3c3c('0xb'))[_0x3c3c('0x18')](0x190);});$(_0x3c3c('0x1c'))['on'](_0x3c3c('0x10'),_0x3c3c('0x16'),function(){$(this)[_0x3c3c('0x0')]('li')['empty']();});});var disabled_flag=!![];