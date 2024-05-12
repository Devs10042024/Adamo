"use client";
import { useState } from 'react'
import './app.css'

function Chat() {
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
              <h2>Content 1</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati praesentium incidunt quia aspernatur quasi quidem
                facilis quo nihil vel voluptatum?
              </p>
            </div>

            <div
              className={
                toggleState === 2 ? 'content  active-content' : 'content'
              }
            >
              <h2>Content 2</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente voluptatum qui adipisci.
              </p>
            </div>

            <div
              className={
                toggleState === 3 ? 'content  active-content' : 'content'
              }
            >
              <h2>Content 3</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                sed nostrum rerum laudantium totam unde adipisci incidunt modi
                alias! Accusamus in quia odit aspernatur provident et ad vel
                distinctio recusandae totam quidem repudiandae omnis veritatis
                nostrum laboriosam architecto optio rem, dignissimos voluptatum
                beatae aperiam voluptatem atque. Beatae rerum dolores sunt.
              </p>
            </div>
            <div
              className={
                toggleState === 4 ? 'content  active-content' : 'content'
              }
            >
              <h2>Content 4</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati praesentium incidunt quia aspernatur quasi quidem
                facilis quo nihil vel voluptatum?
              </p>
            </div>
            <div
              className={
                toggleState === 5 ? 'content  active-content' : 'content'
              }
            >
              <h2>FiveFiveSixdotcom</h2>
              <hr />
              <p>
                cabin crew, slices on your cross check, copy that as we should
                be landing shortly please be sure that your tray table is locked
                and the chair is in the upright position. the artistic points
                are; "five points six, five point eight five five six dot com"
                getting opportunities what about the fucking coordinates? roger
                that, copy that.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
    </div>
  )
}

export default Chat