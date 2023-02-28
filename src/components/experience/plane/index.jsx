import React from 'react';
import vertexShader from '../vertex.glsl'
import fragmentShader from './fragment.glsl'


function Plane({Ref}) {
    return (
        <>
            <mesh ref={Ref} scale={[innerWidth, innerHeight,0]} position-z={-2}>
                <planeGeometry args={[1, 1]} />
                <shaderMaterial
                    attach="material"
                    args={[
                        {
                            vertexShader,
                            fragmentShader,
                            uniforms: {
                                uTime: { value: 0.0 },
                                uRandom: { value: (Math.random() - .5) * 2. * Math.PI },
                                uDark: { value: 0. }
                            },
                        }
                    ]}/>
            </mesh>
        </>
    );
}

export default Plane;
