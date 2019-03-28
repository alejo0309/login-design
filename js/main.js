// captura boton "entrar" para mostrar "modal popup"
var login_btn_state = document.getElementById('login');
// captura de estado para abrir DIV "modal_popup"
var login_modal_popup = document.getElementById('login_modal_popup');
// captura de estado boton cerrar en "modal popup"
var login_close_btn_state = document.getElementById('login_closeBtn');

login_btn_state.addEventListener('click', abrir_modal_login);
login_close_btn_state.addEventListener('click', cerrar_modal_login);
window.addEventListener('click', cerrar_modal_ventana_login);

function abrir_modal_login(){
	// window.alert('123')
	login_modal_popup.style.display = 'block';
};

function cerrar_modal_login(){
	// window.alert('123')
	login_modal_popup.style.display = 'none';
};

function cerrar_modal_ventana_login(e){
	// window.alert('123')
	if(e.target == login_modal_popup){
		login_modal_popup.style.display = 'none';
	}
};

// captura boton "regístrate" para mostrar "modal popup"
var register_btn_state = document.getElementById('register');
// captura de estado para abrir DIV "modal_popup"
var register_modal_popup = document.getElementById('register_modal_popup');
// captura de estado boton cerrar en "modal popup"
var register_close_btn_state = document.getElementById('register_closeBtn');

register_btn_state.addEventListener('click', abrir_modal_registro);
register_close_btn_state.addEventListener('click', cerrar_modal_registro);
window.addEventListener('click', cerrar_modal_ventana_registro);

function abrir_modal_registro(){
	// window.alert('123')
	register_modal_popup.style.display = 'block';
};

function cerrar_modal_registro(){
	// window.alert('123')
	register_modal_popup.style.display = 'none';
};

function cerrar_modal_ventana_registro(e){
	// window.alert('123')
	if(e.target == register_modal_popup){
		register_modal_popup.style.display = 'none';
	}
};

// captura boton "olvide contraseña" para mostrar "modal popup"
var forgot_pass_btn_state = document.getElementById('forgot_pass');
// captura de estado para abrir DIV "modal_popup"
var forgot_pass_modal_popup = document.getElementById('forgot_pass_modal_popup');
// captura de estado boton cerrar en "modal popup"
var forgot_pass_close_btn_state = document.getElementById('forgot_pass_closeBtn');

forgot_pass_btn_state.addEventListener('click', abrir_modal_olvide_contraseña);
forgot_pass_close_btn_state.addEventListener('click', cerrar_modal_olvide_contraseña);
window.addEventListener('click', cerrar_modal_ventana_olvide_contraseña);

function abrir_modal_olvide_contraseña(){
	// window.alert('123')
	forgot_pass_modal_popup.style.display = 'block';
};

function cerrar_modal_olvide_contraseña(){
	// window.alert('123')
	forgot_pass_modal_popup.style.display = 'none';
};

function cerrar_modal_ventana_olvide_contraseña(e){
	// window.alert('123')
	if(e.target == forgot_pass_modal_popup){
		forgot_pass_modal_popup.style.display = 'none';
	}
};