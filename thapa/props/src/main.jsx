import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './components/NetflixCard/App.jsx'
import {Event} from './components/EventHandling/EventHandle.jsx';
import { EventHandlerasProps } from './components/EventHandling/EhasProps.jsx';
import { UseStateHook } from './components/hooks/useStaeHook.jsx';
import { DerivedState } from './components/hooks/PracuseStae.jsx';
import {LiftingState} from './LiftState.jsx';
import { ToggleSwitch } from './projects/Toggleswitch/ToggleSwitch.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>    
    {/* <EventHandlerasProps/> */}
    {/* <DerivedState/>*/}
    {/* <LiftingState/> */}
    <ToggleSwitch/>
  </StrictMode>
)
