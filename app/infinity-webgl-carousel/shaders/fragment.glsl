// fragment.glsl
precision highp float;

uniform sampler2D uTexture;
uniform vec2 uPlaneSizes;
uniform vec2 uImageSizes;

varying vec2 vUv;

void main() {
  vec2 ratio = vec2(
    min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
    min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
  );

  vec2 uv = vec2(
    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );

  vec4 finalColor = texture2D(uTexture, uv);  
  gl_FragColor = finalColor;
}

/*
 * EXPLANATION IN SIMPLE TERMS:
 * 
 * This shader displays an image on a plane while keeping the image's aspect ratio correct.
 * 
 * 1. It receives the image texture and the sizes of both the plane and the image
 * 
 * 2. It calculates a "ratio" to figure out how to fit the image on the plane without stretching it
 *    - If the image is wider than the plane, it scales down to fit the width
 *    - If the image is taller than the plane, it scales down to fit the height
 *    - This prevents the image from being distorted
 * 
 * 3. It adjusts the UV coordinates (where to sample the texture) to center the image
 *    - The image is centered on the plane
 *    - Any extra space is filled with the edges of the image (like a "cover" fit)
 * 
 * 4. Finally, it samples the texture at those adjusted coordinates and displays the color
 * 
 * Think of it like fitting a photo into a frame - the photo keeps its proportions,
 * and if it doesn't fit perfectly, it's centered and cropped to fit.
 */

 /*
    Here, we are passing the UVs of our mesh to the fragment shader
    and using them in the texture2D function to apply the image texture to our fragments.

    We are also using two uniforms : uPlaneSizes and uImageSizes,
    which allow us to recalculate the UV coordinates and have an "object-fit cover like" effect on our plane.
    This will be very useful later if we want to change our plane sizes without distorting the images.
    */