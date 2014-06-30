#pragma strict

var speed : float = 2;
private var y : float;
private var dir : Vector2;
function Start () {
	rigidbody2D.velocity = Vector2.one.normalized * speed;
}
function hitFactor(ballPos : Vector2, racketPos: Vector2, racketHeight : float) : float{
	return (ballPos.y - racketPos.y) / racketHeight;
}
function OnCollisionEnter2D(coll: Collision2D) {
	if(coll.gameObject.name == "RacketLeft") {
		y = hitFactor(transform.position, coll.transform.position, 0.64);
		dir = Vector2(1, y).normalized;
		rigidbody2D.velocity = dir * speed;
	}
	
	if(coll.gameObject.name == "RacketRight") {
		y = hitFactor(transform.position, coll.transform.position, 0.64);
		dir = Vector2(-1, y).normalized;
		rigidbody2D.velocity = dir * speed;
	}
}