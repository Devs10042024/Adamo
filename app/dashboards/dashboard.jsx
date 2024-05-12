"use client";
import { useState } from 'react'
import './app.css'
import Clientes from './clientes';
import Estoque from './estoque';
import Projetos from './projetos';
import Chat from './chat';

function Dashboard() {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <div className="container">
      <div className="tab-container">
        <aside className="side-nav">
          <div
            className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(1)}
          >
            <div className="side-nav-info">
              <p className="side-nav-job">Estoque</p>
            </div>
          </div>
          <div
            className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(2)}
          >
            <div className="side-nav-info">
              <p className="side-nav-job">Clientes</p>
            </div>
          </div>

          <div
            className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(3)}
          >

            <div className="side-nav-info">
              <p className="side-nav-job">Projetos</p>
            </div>
          </div>
          <div
            className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(4)}
          >
            <div className="side-nav-info">
              <p className="side-nav-job">Chat</p>
            </div>
          </div>
        </aside>
        <div className="tab-content">
          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? 'content  active-content' : 'content'
              }
            >
              <Estoque/>
            </div>

            <div
              className={
                toggleState === 2 ? 'content  active-content' : 'content'
              }
            >
              <Clientes/>
            </div>

            <div
              className={
                toggleState === 3 ? 'content  active-content' : 'content'
              }
            >
              <Projetos/>
            </div>
            <div
              className={
                toggleState === 4 ? 'content  active-content' : 'content'
              }
            >
              <Chat/>
            </div>
          </div>
        </div>
      </div>

      <br />
    </div>
  )
}

export default Dashboard