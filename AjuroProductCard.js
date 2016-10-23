	function AddPost(rootId, postData)
	{
		user_id = 0;
		$('#'+rootId).prepend(`<div class='post'>
	<table>
		<tr height=12> 
			<td></td>
						<td></td>
						<td></td>
						<td></td>
			<td width=20 class='strip' rowspan=5>
				`+(postData.user_id == user_id ? "<div class='follow unpublish'>&#128505;</div>" : "")+`
				<div class='follow unpublish'>&#9734;</div>
				`+(postData.user_id  == user_id ? ("<div class='follow edit' id='Id"+postData.id+"'>&#9998;</div>") : "")+`				
				<div class='follow report'>&#9872;</div>
			</td>
		</tr>
		<tr>
			<td class='user_up'>&#9650;</td>
			<td rowspan=3 width=60><div class='image3'><div class='image2'><div class='image1'><a href='https://facebook.com/`+postData.fb+`' target='_blank'><img class="img" src="`+postData.uimage+`" alt=""></a></div></div></div></td>
			<td class='article' colspan=2><div id='article_title'>`+postData.title+`</div> <span class='follow article'>&#9872;</span></td>
		</tr>
		<tr>
			<td height=12 class='score'>0</td>
			<td class='name'>`+postData.first_name+` `+postData.last_name+`</td>
			<td class='eval1' rowspan=2> 
				<div class='cover'>
					<img class='trigger' alt='Afla pretul'>
					<span class='uncover'>
						<div class='price'  id='article_price'>`+postData.price.substring(0)+`</div> RON 
						<span class='sadf'>&#9785;</span>
					</span>
				</div>				
			</td>
		</tr>
		<tr>
			<td class='user_down' width=14>&#9660;</td>				
			<td class='date'>acum aproximativ 2 saptamâni</td>
		</tr>
		<tr>
			<td class='content' colspan=4><div id='article_description'>`+postData.description+`<span class='more'>[...]</span></div>
			</td>
		</tr>
		<tr>
			<td colspan=5 style='width:480px'>
				<span style='color:#eee; padding-bottom: 4px'><hr></span>
				<span class='helper'><span class='satisfaction'>&#128548; &#128577; &#128528; &#128578; &#128525;</span></span>
				<span class='contact'>
				<div id='phone'>&#9742;</div> Telefon
				<div id='email'>&#9993;</div> Scrie-i 
				</span>
				<span class='social'>
				<div id='like'> </div> 6 
				<div id='comment'> </div> 2 
				<span id='distribution'> </span> Distribuie
				</span><span id='actions'></span>
			</td>
		</tr>
	</table>
</div>`);
	}