//agar dapar berjalan di react
import React from 'react';
import './HelloComponent.css';

//function arrow
const Hellocomponent = () => {
    return (

<html>
	<head>
	<title>Membuat Desain Form Login Dengan CSS</title>
	</head>
<body>
	<h1>Form login</h1>
 
	
	<div className="kotak_login">
		<p className="tulisan_login"><h1>Tugas Pertemuan KeTiga</h1></p>
		
		<br>
		</br>
		<table align="center">
		<thead>
			<td><label>Username</label></td>
			<td><input type ="text" name ="username"className="form_login" placeholder="Masukkan username" required=""></input></td>
		</thead>
		<tbody>
			<td><label>Password</label></td>
			<td><input type="text" name="password" className="form_login" placeholder="Masukkan Password" required=""></input></td>
		</tbody>
		</table>
		
		<br></br>
		<form>

			<input type="submit" class="tombol_login" value="LOGIN"></input>
			<br/>
			<br/>
			<center>
			<input type="checkbox" defaultChecked></input>	
			<label>Remember me</label>			
			</center>
			<br></br>
			<center>			
				<a class="tombol_cancel" href="#">Cancel</a>
			</center>
		</form>
	</div>
</body>
</html>
    );
}
//bisa dipanggil dimana saja
export default Hellocomponent;