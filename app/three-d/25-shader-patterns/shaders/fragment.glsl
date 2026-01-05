#define PI 3.14159265359

varying vec2 vUv;
uniform float uTime;
uniform float uAmplitude;
uniform float uWaveEnabled;
uniform float uPulseEnabled;
uniform vec2 uCursor;
uniform float uUseCursor;

float random (vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

vec2 rotate(vec2 uv, float rotation, vec2 mid)
{
    return vec2(
      cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
      cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
}

void main() {

    // Pattern 3, grayscale gradient
    // float strength = vUv.x;

    // Pattern 4, vertical gradient
    // float strength = vUv.y;

    // Pattern 5, inverted vertical gradient
    // float strength = 1.0 - vUv.y;

    // Pattern 6
    // float strength = vUv.y * 10.0;

    // Pattern 7
    // float strength = mod(vUv.y * 10.0, 1.0);

    // Pattern 8 / 9
    // float strength = step(0.8, mod(vUv.y * 10.0, 1.0));

    // Pattern 10
    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));

    // Pattern 11
    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    // strength += step(0.8, mod(vUv.y * 10.0, 1.0));

    // Pattern 12
    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    // strength *= step(0.8, mod(vUv.y * 10.0, 1.0));

    // Pattern 13
    // float strength = step(0.4, mod(vUv.x * 10.0, 1.0));
    // strength *= step(0.8, mod(vUv.y * 10.0, 1.0));

    // Pattern 14
    // float barX = step(0.4, mod(vUv.x * 10.0, 1.0));
    // barX *= step(0.8, mod(vUv.y * 10.0, 1.0));

    // float barY = step(0.8, mod(vUv.x * 10.0, 1.0));
    // barY *= step(0.4, mod(vUv.y * 10.0, 1.0));

    // float strength = barX + barY;

    // Pattern 15
    // float barX = step(0.4, mod(vUv.x * 10.0, 1.0));
    // barX *= step(0.8, mod(vUv.y * 10.0 + 0.2, 1.0));

    // float barY = step(0.8, mod(vUv.x * 10.0 + 0.2, 1.0));
    // barY *= step(0.4, mod(vUv.y * 10.0, 1.0));

    // float strength = barX + barY;

    // Pattern 16
    // float strength = abs(vUv.x - 0.5);

    // Pattern 17
    // float strength = min(abs(vUv.x - 0.5), abs(vUv.y - 0.5));

    // Pattern 18
    // float strength = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5));

    // Pattern 19
    // float strength = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));

    // Pattern 20
    // float square1 = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    // float square2 =1.0 - step(0.25, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    // float strength = square1 * square2;


    // Pattern 21
    // float strength = floor(vUv.x * 10.0) / 10.0;


    // Pattern 22
    // float strength = floor(vUv.x * 10.0) / 10.0;
    // strength *= floor(vUv.y * 10.0) / 10.0;

    // Pattern 23 random doesnt exist in glsl, so we need to use a function to generate a random number.
    // float strength = random(vUv);

    // Pattern 24
    // vec2 gridUv = vec2(
    //     floor(vUv.x * 10.0) / 10.0,
    //     floor(vUv.y * 10.0) / 10.0
    // );
    // float strength = random(gridUv);

    // Pattern 25
    // vec2 gridUv = vec2(
    //     floor(vUv.x * 10.0) / 10.0,
    //     floor(vUv.y * 10.0 + vUv.x * 5.0) / 10.0
    // );
    // float strength = random(gridUv);

    // Pattern 26
    // float strength = length(vUv);

    // Pattern 27
    // float strength = distance(vUv, vec2(0.5));

    // Pattern 28
    // float strength = 1.0 - distance(vUv, vec2(0.5));

    // Pattern 29 - Point light effect
    // float strength = 0.015 / distance(vUv, vec2(0.5));

    // Pattern 30
    // vec2 lightUv = vec2(
    //     vUv.x * 0.1 + 0.45,
    //     vUv.y * 0.5 + 0.25
    // );
    // float strength = 0.015 / distance(lightUv, vec2(0.5));

    // Pattern 31
    // vec2 lightUvX = vec2(
    //     vUv.x * 0.1 + 0.45,
    //     vUv.y * 0.5 + 0.25
    // );
    // vec2 lightUvY = vec2(
    //     vUv.x * 0.5 + 0.25,
    //     vUv.y * 0.1 + 0.45
    // );
    // float lightX = 0.015 / distance(lightUvX, vec2(0.5));
    // float lightY = 0.015 / distance(lightUvY, vec2(0.5));
    // float strength = lightX * lightY;

    // Pattern 32
    // vec2 rotatedUv = rotate(vUv, PI * 0.25, vec2(0.5));
    // vec2 lightUvX = vec2(
    //     rotatedUv.x * 0.1 + 0.45,
    //     rotatedUv.y * 0.5 + 0.25
    // );
    // vec2 lightUvY = vec2(
    //     rotatedUv.x * 0.5 + 0.25,
    //     rotatedUv.y * 0.1 + 0.45
    // );
    // float lightX = 0.015 / distance(lightUvX, vec2(0.5));
    // float lightY = 0.015 / distance(lightUvY, vec2(0.5));
    // float strength = lightX * lightY;

    // Pattern 33
    // float strength = step(0.25, distance(vUv, vec2(0.5)));

    // Pattern 34
    // float strength = abs(distance(vUv, vec2(0.5)) - 0.25);

    // Pattern 35
    // float strength = step(0.01, abs(distance(vUv, vec2(0.5)) - 0.25));

    // Pattern 36 - circle
    // float strength = 1.0 - step(0.01, abs(distance(vUv, vec2(0.5)) - 0.25));

    // Pattern 37 - waved circle with sin()
    // vec2 wavedUv = vec2(
    //     vUv.x,
    //     vUv.y + sin(vUv.x * 30.0) * 0.1
    // );
    // float strength = 1.0 - step(0.01, abs(distance(wavedUv, vec2(0.5)) - 0.25));

    // Pattern 38
    // vec2 wavedUv = vec2(
    //     vUv.x + sin(vUv.y * 30.0) * 0.1,
    //     vUv.y + sin(vUv.x * 30.0) * 0.1
    // );
    // float strength = 1.0 - step(0.01, abs(distance(wavedUv, vec2(0.5)) - 0.25));

    // Pattern 39 - waved circle wiht high amplitude
    // vec2 wavedUv = vec2(
    //     vUv.x + sin(vUv.y * 100.0) * 0.1,
    //     vUv.y + sin(vUv.x * 100.0) * 0.1
    // );
    // float strength = 1.0 - step(0.01, abs(distance(wavedUv, vec2(0.5)) - 0.25));

    // Pulsating effect 
    // vec2 wavedUv = vec2(
    //     vUv.x + sin(vUv.y * 100.0) * 0.1,
    //     vUv.y + sin(vUv.x * 100.0) * 0.1
    // );
    // // Simple pulsing radius based on time
    // float pulse = sin(uTime) * 0.05 + 0.25; // Oscillates between 0.2 and 0.3
    // float strength = 1.0 -step(0.01, abs(distance(wavedUv, vec2(0.5)) - pulse));

    // Exclusive animation: cursor OR time, not both
    float animValue;
    if (uUseCursor > 0.5) {
        // Cursor only: use cursor position for animation
        animValue = (uCursor.x + uCursor.y) * 0.5 * 10.0;
    } else {
        // Time only: use time for animation
        animValue = uTime;
    }
    
    // Pulse effect (0 to 1) - only if pulse is enabled
    float pulse = uPulseEnabled > 0.5 ? sin(animValue * 2.0) * 0.5 + 0.5 : 0.5;
    
    // Wave effect with cursor distortion
    vec2 wavedUv = vUv;
    if (uWaveEnabled > 0.5) {
        // Cursor-based distortion (only when cursor mode is active)
        vec2 cursorDistortion = vec2(0.0);
        if (uUseCursor > 0.5) {
            // Calculate distance from cursor to current UV
            vec2 cursorUv = uCursor;
            float distToCursor = distance(vUv, cursorUv);
            // Create distortion based on cursor position
            cursorDistortion = (vUv - cursorUv) * (1.0 / (distToCursor + 0.1)) * 0.2;
        }
        
        wavedUv = vec2(
            vUv.x + sin(vUv.y * uAmplitude + animValue * 3.0) * (0.05 + pulse * 0.05) + cursorDistortion.x,
            vUv.y + sin(vUv.x * uAmplitude + animValue * 3.0) * (0.05 + pulse * 0.05) + cursorDistortion.y
        );
    } else if (uUseCursor > 0.5) {
        // Apply cursor distortion even without waves (only in cursor mode)
        vec2 cursorUv = uCursor;
        float distToCursor = distance(vUv, cursorUv);
        vec2 cursorDistortion = (vUv - cursorUv) * (1.0 / (distToCursor + 0.1)) * 0.2;
        wavedUv = vUv + cursorDistortion;
    }
    
    // Radius with optional pulsing
    float radius = uPulseEnabled > 0.5 ? 0.25 + pulse * 0.1 : 0.25;
    float strength = step(0.01, abs(distance(wavedUv, vec2(0.5)) - radius));

    gl_FragColor = vec4(vec3(strength), 1.0);
}  