import React from 'react';
import vertexShader from './vertex.glsl'
import fragmentShader from './fragment.glsl'
import * as THREE from 'three'

function Image({texture,Ref}) {
    return (
        <>
            <mesh ref={Ref} scale={[250, 300, 0]}>
                <planeGeometry args={[1, 1, 20, 20]} />
                <shaderMaterial args={[
                    {
                        vertexShader,
                        fragmentShader,
                        transparent: true,
                        uniforms: {
                            uAlpha: { value: 0. },
                            uTexture: { value: new THREE.TextureLoader().load(texture) },
                            uOffset: { value: new THREE.Vector2(0, 0) },
                        },
                    }
                ]} />
            </mesh>
        </>
    );
}
export default Image;