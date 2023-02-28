import { Perf } from 'r3f-perf'
import gsap from 'gsap';
import { useIntersectionObserver, lerp } from '../../animation';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import Plane from './plane';
import Sphere from './sphere'
import Image from './image';



export default function Experience() {
    const sphereRef = useRef(null)
    const planeRef = useRef(null)
    const ImageRef = useRef(null)

    useIntersectionObserver({ element: document.querySelector(".hero"), threshold: .7 },
        () => {
            gsap.to(sphereRef.current.scale, { x: innerHeight / 3, y: innerHeight / 3, z: innerHeight / 3, ease: "power2.inOut", duration: 1 })
            gsap.to(sphereRef.current.position, { x: 0, y: 0, z: 0, ease: "power2.inOut", duration: 1 })
            gsap.to(sphereRef.current.material.uniforms.uWhite, { value: 0.3, duration: 1, ease: "power2.inOut" })
        },
        () => {
            gsap.to(sphereRef.current.scale, { x: innerHeight * .05, y: innerHeight * .05, z: innerHeight * .05, ease: "power2.inOut", duration: 1, })
            gsap.to(sphereRef.current.position, { y: innerHeight * .38, ease: "power2.inOut", duration: 1, })
            gsap.to(sphereRef.current.material.uniforms.uWhite, { value: .75, duration: 1, ease: "power2.inOut" })
        }
    )

    const toggleTheme = (theme) => {
        switch (theme) {
            case "dark":
                document.documentElement.classList.add("dark")
                gsap.to(sphereRef.current.material.uniforms.uDark, { value: 0., duration: .75 })
                gsap.to(planeRef.current.material.uniforms.uDark, { value: 0., duration: .75 })
                break;

            case "light":
                document.documentElement.classList.remove("dark")
                gsap.to(sphereRef.current.material.uniforms.uDark, { value: 1., duration: .75 })
                gsap.to(planeRef.current.material.uniforms.uDark, { value: 1., duration: .75 })
                break;
        }
    }
    const dark = document.querySelector(".dark-toggler")
    const light = document.querySelector(".light-toggler")

    dark.addEventListener("click", () => {
        toggleTheme('dark')
    })
    light.addEventListener("click", () => {
        toggleTheme('light')
    })
    let target = { x: 0, y: 0 }
    addEventListener('mousemove', (args) => {
        target.x = args.clientX
        target.y = args.clientY
        const x = ((args.clientY / innerHeight - .5))
        const y = ((args.clientX / innerWidth - .5))
        gsap.to(sphereRef.current.rotation, { y, ease: 'inOut', duration: 1 })
        gsap.to(sphereRef.current.rotation, { x, ease: 'inOut', duration: 1 })
    })
    addEventListener("resize", () => {
        planeRef.current.scale.set(innerWidth, innerHeight, 0)
        sphereRef.current.scale.set(innerHeight / 3, innerHeight / 3, innerHeight / 3)
    })
    const projectList = document.querySelector(".projects ul");
    let linksHover = false
    projectList.addEventListener('mouseenter', () => {
        linksHover = true
    })
    projectList.addEventListener('mouseleave', () => {
        linksHover = false
    })
    let offsetX = 0
    let offsetY = 0
    useFrame((gl, delta) => {
        sphereRef.current.material.uniforms.uTime.value += delta;
        planeRef.current.material.uniforms.uTime.value += delta;
        if (linksHover) {
            gsap.to(ImageRef.current.material.uniforms.uAlpha, { value: 1. })
        } else {
            gsap.to(ImageRef.current.material.uniforms.uAlpha, { value: 0. })
        }
        offsetX = lerp(offsetX, target.x, 0.1)
        offsetY = lerp(offsetY, target.y, 0.1)
        ImageRef.current.material.uniforms.uOffset.value.set((target.x - offsetX) * 0.0005, - (target.y - offsetY) * 0.0005)
        ImageRef.current.position.set(offsetX - (innerWidth / 2), -offsetY + (innerHeight / 2), 0);
    })
    return <>

        {window.location.hash === '#debug' ? <Perf deepAnalyze position="bottom-left" /> : null}
        <Image Ref={ImageRef} texture={'texture.jpg'} />
        <Plane Ref={planeRef} />
        <Sphere Ref={sphereRef} />
    </>
}