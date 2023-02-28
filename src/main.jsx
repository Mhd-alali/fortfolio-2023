import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './components/experience'
import App from './App'

const root = ReactDOM.createRoot(document.querySelector('#root'))
const perspective = 600
const fov = 2. * Math.atan((innerHeight / 2) / perspective) * (180 / Math.PI)

root.render(
    <>
        <App />
        {
            innerWidth > 500 &&
            <Canvas style={{ position: 'fixed' }} shadows camera={{ fov, aspect: innerWidth / innerHeight, near: 0.1, far: perspective * 2., position: [8, 4, perspective] }}>
                <Experience />
            </Canvas>
        }
    </>
)