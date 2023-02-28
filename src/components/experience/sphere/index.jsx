import React from 'react';
import vertexShader from '../vertex.glsl'
import fragmentShader from './fragment.glsl'
import { Vector2 } from 'three';
import { createRef } from 'react';


function Sphere({Ref}) {
    return (
        <>
            <mesh ref={Ref} scale={[innerHeight / 3, innerHeight / 3, innerHeight / 3]}>
                <icosahedronGeometry args={[1, 32, 32]} />
                <shaderMaterial
                    attach="material"
                    args={[
                        {
                            vertexShader,
                            fragmentShader,
                            uniforms: {
                                uTime: { value: 0.0 },
                                uRandom: { value: (Math.random() - .5) * 2. * Math.PI },
                                uWhite: { value: 0.4 },
                                uDark: { value: 0. },
                                uResolution: { value: new Vector2(innerWidth, innerHeight) }
                            },
                        }
                    ]}/>
            </mesh>
        </>
    );
}

export default Sphere;
