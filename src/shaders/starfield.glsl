#version 330 core

// Vertex Shader
layout(location = 0) in vec3 position;

uniform mat4 projection;
uniform mat4 view;

void main()
{
    gl_Position = projection * view * vec4(position, 1.0);
}

// Fragment Shader
out vec4 fragColor;

void main()
{
    // Procedural starfield
    float noise = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
    float brightness = smoothstep(0.2, 0.6, noise);
    fragColor = vec4(vec3(brightness), 1.0);
}