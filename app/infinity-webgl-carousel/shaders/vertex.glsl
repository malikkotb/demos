// vertex.glsl
varying vec2 vUv;

void main() {
  vec3 pos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );

  // VARYINGS
  vUv = uv;
}