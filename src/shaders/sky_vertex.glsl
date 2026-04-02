#version 330 core

// Vertex Shader
layout(location = 0) in vec3 aPosition;

out vec3 fragPosition;

void main()
{
    fragPosition = aPosition;
    gl_Position = vec4(aPosition, 1.0);
}