#pragma strict

var up : KeyCode;
var down : KeyCode;

function FixedUpdate(){
	if (Input.GetKey(up)) {
		transform.Translate(Vector2(0,0.1));
	}
	
	if (Input.GetKey(down)) {
		transform.Translate(Vector2(0,-0.1));
	}
}